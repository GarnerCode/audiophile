<template>
    <div v-if="cartToggled">
        <div @click="cartToggled = false" class="cart-backdrop"></div>
        <div class="cart-container">
            <div class="cart-header">
                <h6>Cart ({{ cartCount }})</h6>
                <button @click="clearCart()" v-if="cartItems?.length">Remove All</button>
            </div>
            <ul class="cart-items-list" v-if="cartItems?.length">
                <li class="cart-item" v-for="(item, index) of cartItems" :key="index">
                    <img class="item-img" :src="item.product.image.mobile" :alt="item.product.name">
                    <div class="item-details">
                        <div class="item-name">{{ item.product.name }}</div>
                        <div class="item-price">${{ item.product.price.toLocaleString() }}</div>
                    </div>
                    <FieldQuantity :quantity="item.count" @valueEmit="(e) => handleQuantityEvent(e, item.product.id)"></FieldQuantity>
                </li>
            </ul>
            <h6 class="cart-empty" v-if="!cartItems?.length">
                Cart is Empty
            </h6>
            <div class="total-row">
                <div class="total-label">Total</div>
                <div class="total-price">${{ calculateTotalPrice() }}</div>
            </div>
            <NuxtLink v-if="cartItems?.length" class="button button-primary" to="/">Checkout</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Cart',
        data: () => {
            return {
                cartToggled: false,
                cartCount: 0,
                cartItems: [],
            }
        },
        mounted() {
            document.addEventListener('toggleCart', (e) => {
                this.cartToggled = !this.cartToggled;
            });
            document.addEventListener('localStorageUpdated', (e) => {
                const storage = JSON.parse(localStorage.getItem('cart'));
                if (storage) {
                    this.cartItems = storage;
                } else {
                    this.cartItems = [];
                }
            })
            if (localStorage.getItem('cart')) {
                const cart = JSON.parse(localStorage.getItem('cart'));
                this.cartCount = cart.length;
                this.cartItems = JSON.parse(localStorage.getItem('cart'));
                console.log('cartItems: ', this.cartItems);
            }
        },
        methods: {
            handleQuantityEvent(e: any, itemId: number): void {
                let targetIndex = this.cartItems.findIndex((item: any) => {
                    return item.product.id === itemId;
                });
                this.cartItems[targetIndex].count = e;
                localStorage.setItem('cart', JSON.stringify(this.cartItems));
            },
            calculateTotalPrice(): string {
                let total = 0;
                this.cartItems?.forEach((item: any) => {
                    total += (item.product.price * item.count);
                });
                return total.toLocaleString();
            },
            clearCart(): void {
                localStorage.clear();
                this.cartItems = [];
                const event = new Event('localStorageUpdated');
                document.dispatchEvent(event);
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .cart-backdrop {
            position: fixed;
            z-index: 11;
            top: 0rem;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.4);
        }
        .cart-container {
                background-color: var(--color-white);
                color: black;
                padding: 3rem;
                border-radius: var(--border-radius);
                position: fixed;
                top: 13rem;
                left: 0;
                right: 0;
                margin: 0 auto;
                z-index: 12;
                width: calc(327px - 3rem);
                .cart-header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 6rem;
                    button {
                        background: none;
                        border: none;
                        text-decoration: underline;
                        opacity: 0.5;
                        transition: var(--transition);
                        cursor: pointer;
                        &:hover {
                            opacity: 1;
                        }
                    }
                }
                .cart-items-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    margin: 5rem 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    gap: 5rem;
                }
                .cart-item {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 3.5rem;
                    .item-img {
                        width: 64px;
                    }
                    .item-details {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }
                    .item-name {
                        font-size: 15px;
                        font-weight: bold;
                    }
                    .item-price {
                        font-size: 14px;
                        font-weight: bold;
                        opacity: 0.5;
                    }
                }
                .cart-empty {
                    margin-top: 3rem;
                }
                .total-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin: 3rem 0;
                    .total-label {
                        text-transform: uppercase;
                        color: rgba(0,0,0,0.5);
                        font-size: 15px;
                        font-weight: 500;
                    }
                    .total-price {
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
                a {
                    width: 100%;
                }
            }
    }
    @media screen and (min-width: 768px) {
        .cart-container {
            width: calc(377px - 3rem);
            margin: 0;
            left: auto;
            right: 3rem;
        }
    }
    @media screen and (min-width: 1440px) {
        .cart-container {
            top: 11rem;
            right: 12rem;
        }
    }
</style>
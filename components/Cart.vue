<template>
    <div class="cart-backdrop" v-if="cartToggled">
        <div class="cart-container">
            <div class="cart-header">
                <h6>Cart ({{ cartCount }})</h6>
                <button>Remove All</button>
            </div>
            <ul class="cart-items-list">
                <li class="cart-item" v-for="(item, index) of cartItems" :key="index">
                    <img class="item-img" :src="item.product.image.mobile" :alt="item.product.name">
                    <div class="item-details">
                        <div class="item-name">{{ item.product.name }}</div>
                        <div class="item-price">${{ item.product.price.toLocaleString() }}</div>
                    </div>
                    <FieldQuantity :quantity="item.count" @valueEmit="(e) => handleQuantityEvent(e)"></FieldQuantity>
                </li>
            </ul>
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
            if (localStorage.getItem('cart')) {
                const cart = JSON.parse(localStorage.getItem('cart'));
                this.cartCount = cart.length;
                this.cartItems = JSON.parse(localStorage.getItem('cart'));
                console.log('cartItems: ', this.cartItems);
            }
        },
        methods: {
            handleQuantityEvent(e: any): void {
                console.log('event: ', e);
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
            display: flex;
            flex-direction: column;
            align-items: center;
            .cart-container {
                margin-top: 13rem;
                background-color: var(--color-white);
                color: black;
                padding: 3rem;
                border-radius: var(--border-radius);
                width: calc(100vw - 15rem)
            }
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
                margin: 3rem 0;
            }
            .cart-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
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
        }
    }
</style>
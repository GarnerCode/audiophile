<template>
    <div class="modal-container" v-if="cartData">
        <Transition name="fade" mode="out-in">
            <div v-if="toggleConfirmation" class="modal-backdrop"></div>
        </Transition>
        <Transition name="slide" mode="out-in">
            <div v-if="toggleConfirmation" class="order-confirm-container">
                <img class="confirmed-icon" src="~/static/assets/icons/icon-order-confirmed.svg">
                <h3>Thank you<br/> for your order</h3>
                <p>You will receive an email confirmation shortly.</p>
                <div class="order-summary-container">
                    <div class="products">
                        <div class="product-details">
                            <div class="container">
                                <img class="product-img" :src="cartData[0].product.image.mobile" :alt="cartData[0].product.name">
                                <div class="product-text">
                                    <div class="product-name">{{ cartData[0].product.name }}</div>
                                    <div class="product-price">${{ cartData[0].product.price.toLocaleString() }}</div>
                                </div>
                                <div class="product-count">
                                    x{{ cartData[0].count }}
                                </div>
                            </div>
                            <div v-if="cartData.length > 1" class="other-items-count">
                                and {{ cartData.length - 1 }} other item(s)
                            </div>
                        </div>
                    </div>
                    <div class="grand-total">
                        <div class="total-label">Grand Total</div>
                        <div class="total-value">${{ grandTotal.toLocaleString() }}</div>
                    </div>
                </div>
                <NuxtLink to="/" class="button button-primary">Back to Home</NuxtLink>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'OrderConfirm',
        data: () => {
            return {
                cartData: null,
            }
        },
        props: {
            grandTotal: {
                type: Number,
            },
            toggleConfirmation: {
                type: Boolean,
            }
        },
        watch: {
            'toggleConfirmation': {
                handler: function (val) {
                    if (val) {
                        this.cartData = JSON.parse(localStorage.getItem('cart'));
                        localStorage.setItem('cart', JSON.stringify([]));
                        const event = new Event('localStorageUpdated');
                        document.dispatchEvent(event);
                    }
                }
            }
        },
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
            .modal-backdrop {
                position: fixed;
                z-index: 21;
                top: 0rem;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0,0,0,0.4);
            }
            .order-confirm-container {
                background-color: white;
                border-radius: var(--border-radius);
                padding: 2rem;
                position: fixed;
                z-index: 22;
                top: 13rem;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: calc(327px - 3rem);
                display: flex;
                flex-direction: column;
                gap: 3rem;
                h3 {
                    font-weight: bold;
                }
                p {
                    opacity: 0.5;
                }
                .confirmed-icon {
                    width: 64px;
                }
                .products {
                    background-color: var(--color-gray);
                    border-top-left-radius: var(--border-radius);
                    border-top-right-radius: var(--border-radius);
                }
                .product-details {
                    width: calc(100% - 4rem);
                    padding: 2rem;
                    .container {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        border-bottom: 1px solid #979797;
                        padding-bottom: 1rem;
                    }
                }
                .product-img {
                    width: 50px;
                    border-radius: var(--border-radius);
                }
                .product-text {
                    max-width: 20rem;
                }
                .product-name {
                    font-size: 15px;
                    font-weight: bold;
                }
                .product-price {
                    font-size: 14px;
                    font-weight: bold;
                    opacity: 0.5;
                }
                .other-items-count {
                    font-size: 12px;
                    font-weight: bold;
                    opacity: 0.5;
                    text-align: center;
                    margin-top: 1rem;
                }
                .grand-total {
                    background-color: black;
                    padding: 2rem;
                    border-bottom-left-radius: var(--border-radius);
                    border-bottom-right-radius: var(--border-radius);
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                .total-label {
                    font-size: 15px;
                    font-weight: 500;
                    color: white;
                    opacity: 0;
                    text-transform: uppercase;
                }
                .total-value {
                    font-size: 18px;
                    font-weight: bold;
                    color: white;
                }
                a {
                    width: 100%;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .modal-container {
            .order-confirm-container {
                width: 540px;
                padding: 5rem;
                .order-summary-container {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                }
                .products {
                    border-radius: 0;
                    border-top-left-radius: var(--border-radius);
                    border-bottom-left-radius: var(--border-radius);
                    width: 60%;
                }
                .grand-total {
                    border-radius: 0;
                    border-top-right-radius: var(--border-radius);
                    border-bottom-right-radius: var(--border-radius);
                    width: 40%;
                    justify-content: center;
                    padding-left: 3rem;
                }
            }
        }
    }
</style>
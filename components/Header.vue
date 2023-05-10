<template>
    <header>
        <div class="header-mobile">
            <div class="nav-toggle" @click="navToggled = !navToggled" :class="{'toggled': navToggled}">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <div class="header-logo">
                <NuxtLink to="/">
                    <img src="~/static/assets/images/audiophile-logo.svg" alt="Audiophile Logo">
                </NuxtLink>
            </div>
            <div @click="toggleCart()" class="cart-icon-container">
                <img src="~/static/assets/icons/icon-cart.svg" alt="Cart Icon">
                <div v-if="cartCount" class="cart-count">
                    {{ cartCount }}
                </div>
            </div>
        </div>
        <div class="header-tablet">
            <div class="header-left">
                <div class="nav-toggle" @click="navToggled = !navToggled" :class="{'toggled': navToggled}">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <div class="header-logo">
                    <NuxtLink to="/">
                        <img src="~/static/assets/images/audiophile-logo.svg" alt="Audiophile Logo">
                    </NuxtLink>
                </div>
            </div>
            <div @click="toggleCart()" class="header-right">
                <img src="~/static/assets/icons/icon-cart.svg" alt="Cart Icon">
                <div v-if="cartCount" class="cart-count">
                    {{ cartCount }}
                </div>
            </div>
        </div>
        <div class="header-desktop">
            <div class="header-logo">
                <NuxtLink to="/">
                    <img src="~/static/assets/images/audiophile-logo.svg" alt="Audiophile Logo">
                </NuxtLink>
            </div>
            <nav>
                <ul>
                    <li v-for="(nav, index) of navData" :key="index">
                        <NuxtLink :to="nav.route">{{ nav.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div @click="toggleCart()" class="cart-icon-container">
                <img src="~/static/assets/icons/icon-cart.svg" alt="Cart Icon">
                <div v-if="cartCount" class="cart-count">
                    {{ cartCount }}
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { navData } from '@/const/navData';

    export default defineComponent({
        name: 'Header',
        data: () => {
            return {
                cartToggled: false,
                navToggled: false,
                navData,
                cartCount: 0,
            }
        },
        mounted() {
            if (localStorage.getItem('cart')) {
                const cart = JSON.parse(localStorage.getItem('cart'));
                this.cartCount = cart.length;
            }
            document.addEventListener('localStorageUpdated', (e) => {
                this.cartCount = JSON.parse(localStorage.getItem('cart'))?.length;
                console.log('cart updated, length is now: ', this.cartCount);
            });
        },
        methods: {
            toggleCart(): void {
                this.cartToggled = !this.cartToggled;
                const event = new Event('toggleCart');
                document.dispatchEvent(event);
            },
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        header {
            background-color: var(--color-black);
            padding: 0 var(--mobile-x-padding);
            border-bottom: 1px solid rgba(151, 151, 151, 0.1);
            height: 11rem;
            width: calc(100vw - 8rem);
            position: fixed;
            top: 0;
            z-index: 12;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .header-mobile {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .header-tablet {
                display: none;
            }
            .header-desktop {
                display: none;
            }
            .header-logo {
                cursor: pointer;
            }
            .nav-toggle {
                cursor: pointer;
                div {
                    width: 23px;
                    height: 3px;
                    background-color: var(--color-white);
                    margin: 5px;
                    transition: all 0.3s ease;
                }
                &.toggled {
                    div {
                        background-color: var(--color-primary);
                    }
                    .line1 {
                        transform: rotate(-45deg) translate(-5px, 6px);
                    }
                    .line2 {
                        opacity: 0;
                    }
                    .line3 {
                        transform: rotate(45deg) translate(-5px, -6px);
                    }
                }
            }
            .cart-icon-container, .header-right {
                display: flex;
                flex-direction: row;
                color: white;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
                div {
                    font-size: 16px;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        header {
            height: 11rem;
            .header-mobile {
                display: none;
            }
            .header-tablet {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .header-left {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        header {
            padding: 0 var(--desktop-x-padding);
            width: calc(100vw - 30rem);
            height: 8rem;
            .header-tablet {
                display: none;
            }
            .header-desktop {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            nav {
                ul {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    gap: 2rem;
                    align-items: center;
                }
                a {
                    text-decoration: none;
                    color: white;
                    text-transform: uppercase;
                    font-size: 13px;
                    letter-spacing: 2px;
                    transition: var(--transition);
                    &:hover {
                        color: var(--color-primary);
                    }
                }
            }
        }
    }
</style>
<template>
    <header>
        <div class="header-mobile">
            <div class="nav-toggle" @click="navToggled = !navToggled" :class="{'toggled': navToggled}">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <div class="header-logo">
                <img src="assets/images/audiophile-logo.svg" alt="Audiophile Logo">
            </div>
            <div class="cart-icon-container">
                <img src="assets/icons/icon-cart.svg" alt="Cart Icon">
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
                    <img src="assets/images/audiophile-logo.svg" alt="Audiophile Logo">
                </div>
            </div>
            <div class="header-right">
                <img src="assets/icons/icon-cart.svg" alt="Cart Icon">
            </div>
        </div>
        <div class="header-desktop">
            <div class="header-logo">
                <img src="assets/images/audiophile-logo.svg" alt="Audiophile Logo">
            </div>
            <nav>
                <ul>
                    <li v-for="(nav, index) of navData" :key="index">
                        <NuxtLink :to="nav.route">{{ nav.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="cart-icon-container">
                <img src="assets/icons/icon-cart.svg" alt="Cart Icon">
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { navData } from '@/const/navData';

    export default defineComponent({
        name: 'Header',
        data() {
            return {
                navToggled: false,
                navData,
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        header {
            background-color: var(--color-black);
            padding: 4rem var(--mobile-x-padding);
            border-bottom: 1px solid rgba(151, 151, 151, 0.1);
            height: 3.5rem;
            width: calc(100vw - 8rem);
            position: fixed;
            top: 0;
            z-index: 10;
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
        }
    }
    @media screen and (min-width: 768px) {
        header {
            padding: 2rem var(--mobile-x-padding);
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
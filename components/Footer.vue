<template>
    <footer>
        <div class="footer-color-bar"></div>
        <div class="footer-content">
            <div class="nav-row">
                <img src="assets/images/audiophile-logo.svg" alt="Audiophile Logo">
                <nav>
                    <ul>
                        <li v-for="(nav, index) of navData" :key="index">
                            <NuxtLink :to="nav.route">{{ nav.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            <div class="copyright-row">
                <p>Copyright {{ year }}. All Rights Reserved</p>
                <div class="links-row">
                    <a href="#">
                        <img src="assets/icons/icon-facebook.svg" alt="Facebook icon">
                    </a>
                    <a href="#">
                        <img src="assets/icons/icon-twitter.svg" alt="Twitter icon">
                    </a>
                    <a href="#">
                        <img src="assets/icons/icon-instagram.svg" alt="Instagram icon">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { navData } from '@/const/navData';

    export default defineComponent({
        name: 'Footer',
        data() {
            return {
                navData,
                year: new Date().getFullYear()
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        footer {
            background-color: var(--color-black);
            margin-top: 10rem;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            padding: 0 var(--mobile-x-padding);
            padding-bottom: 5rem;
            .footer-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 3rem;
                justify-content: space-around;
            }
            .footer-color-bar {
                width: 101px;
                height: 4px;
                background-color: var(--color-primary);
            }
            .nav-row {
                display: flex;
                flex-direction: column;
                gap: 5rem;
            }
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            li {
                text-align: center;
            }
            a {
                text-decoration: none;
                color: white;
                font-size: 13px;
                text-transform: uppercase;
                transition: var(--transition);
                &:hover {
                    color: var(--color-primary);
                }
            }
            p {
                color: white;
                text-align: center;
            }
            .copyright-row {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                align-items: center;
                p {
                    opacity: 0.5;
                }
            }
            .links-row {
                display: flex;
                flex-direction: row;
                gap: 3rem;
                align-items: center;
            }
        }
    }
    @media screen and (min-width: 768px) {
        footer {
            align-items: flex-start;
            padding-left: var(--desktop-x-padding);
            padding-right: var(--desktop-x-padding);
            .footer-content {
                align-items: flex-start;
                li {
                    text-align: left;
                }
                p {
                    text-align: left;
                }
                .copyright-row {
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                }
            }
        }
    }
    @media screen and (min-width: 1440px) {
        footer {
            .footer-content {
                width: 100%;
            }
            .nav-row {
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
            }
            ul {
                flex-direction: row;
                gap: 8rem;
            }
            p {
                width: 50rem;
            }
            .links-row {
                position: relative;
                bottom: 6rem;
            }
        }
    }
</style>
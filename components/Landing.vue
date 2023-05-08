<template>
    <section id="section-landing">
        <img class="mobile-hero hero-image" src="assets/images/mobile/image-header.jpg" alt="Hero image">
        <img class="tablet-hero hero-image" src="assets/images/tablet/image-header.jpg" alt="Hero image">
        <img class="desktop-hero hero-image" src="assets/images/desktop/image-hero.jpg" alt="Hero image">
        <div class="section-content" v-if="landingFeaturedProduct.id">
            <div class="section-text">
                <div class="overline">New Product</div>
                <h1>{{ landingFeaturedProduct.name }}</h1>
                <p>{{ landingFeaturedProduct.description }}</p>
                <button class="button button-primary">See Product</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { productData, landingFeaturedProduct } from '@/const/productData';

    export default defineComponent({
        name: 'Landing',
        data() {
            return {
                productData,
                landingFeaturedProduct,
            }
        },
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #section-landing {
            position: relative;
            .tablet-hero, .desktop-hero {
                display: none;
            }
            .hero-image {
                width: 100%;
            }
            .section-content {
                position: absolute;
                top: 15rem;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 5rem;
                h1 {
                    color: white;
                }
                p {
                    color: white;
                }
                .overline {
                    color: white;
                }
                button {
                    margin: 0 auto;
                }
            }
            .section-text {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #section-landing {
            .mobile-hero {
                display: none;
            }
            .tablet-hero {
                display: block;
            }
            .section-content {
                padding: 30rem 25rem;
            }
        }
    }
    @media screen and (min-width: 1024px) {
        #section-landing {
            .section-content {
                top: 0rem;
                padding: 30rem 35rem;
            }
        }
    }
    @media screen and (min-width: 1180px) {
        #section-landing {
            .section-content {
                top: 0rem;
                padding: 30rem 45rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #section-landing {
            .tablet-hero {
                display: none;
            }
            .desktop-hero {
                display: block;
            }
            .section-content {
                margin: 0;
                text-align: left;
                align-items: flex-start;
                padding: 0 var(--desktop-x-padding);
                button {
                    margin: 0;
                }
            }
            .section-text {
                max-width: 40rem;
            }
        }
    }
</style>
<template>
    <div class="product-feature-secondary">
        <div class="feature-content">
            <img class="feature-img img-mobile" :src="product.image.mobile" :alt="product.name">
            <img class="feature-img img-tablet" :src="product.image.tablet" :alt="product.name">
            <img class="feature-img img-desktop" :src="product.image.desktop" :alt="product.name">
            <div class="feature-text">
                <h4>{{ product.name }}</h4>
                <NuxtLink :to="`product-details/${product.id}`" class="button button-tertiary">See Product</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { secondaryFeaturedProduct } from '~/const/productData';

    export default defineComponent({
        name: 'ProductFeatureSecondary',
        data() {
            return {
                product: secondaryFeaturedProduct,
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-feature-secondary {
            margin: 0 var(--mobile-x-padding);
            border-radius: var(--border-radius);
            position: relative;
            .img-tablet {
                display: none;
            }
            .img-desktop {
                display: none;
            }
            .feature-img {
                width: 100%;
                border-radius: var(--border-radius);
            }
            .feature-text {
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                padding-left: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-feature-secondary {
            .img-mobile {
                display: none;
            }
            .img-tablet {
                display: block;
            }
            .feature-text {
                padding-left: 10rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .product-feature-secondary {
            margin: 0 var(--desktop-x-padding);
            .img-tablet {
                display: none;
            }
            .img-desktop {
                display: block;
            }
        }
    }
</style>
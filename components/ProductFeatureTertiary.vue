<template>
    <div class="product-feature-tertiary">
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
    import { tertiaryFeaturedProduct } from '~/const/productData';

    export default defineComponent({
        name: 'ProductFeatureTertiary',
        data() {
            return {
                product: tertiaryFeaturedProduct,
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-feature-tertiary {
            margin: 0 var(--mobile-x-padding);
            .img-tablet {
                display: none
            }
            .img-desktop {
                display: none;
            }
            .feature-img {
                width: 100%;
                border-radius: var(--border-radius);
            }
            .feature-text {
                padding: 7rem 3rem;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-feature-tertiary {
            .feature-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 3rem;
            }
            .img-mobile {
                display: none
            }
            .img-tablet {
                display: block;
            }
            .feature-text {
                justify-content: center;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .product-feature-tertiary {
            margin: 0 var(--desktop-x-padding);
            .feature-content {
                gap: 8rem;
            }
            .img-tablet {
                display: none
            }
            .img-desktop {
                display: block;
            }
        }
    }
</style>
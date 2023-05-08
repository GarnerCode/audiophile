<template>
    <div class="product-feature-primary">
        <div class="feature-content">
            <img class="feature-img img-mobile" :src="product.image.mobile" :alt="product.name">
            <img class="feature-img img-tablet" :src="product.image.tablet" :alt="product.name">
            <img class="feature-img img-desktop" :src="product.image.desktop" :alt="product.name">
            <div class="feature-text">
                <h1>{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <NuxtLink :to="`product-details/${product.id}`" class="button button-secondary">See Product</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { primaryFeaturedProduct } from '~/const/productData';

    export default defineComponent({
        name: 'ProductFeaturePrimary',
        data() {
            return {
                product: primaryFeaturedProduct,
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-feature-primary {
            background-color: var(--color-primary);
            background-image: url('static/assets/images/pattern-circles.svg');
            background-size:cover;
            background-position:center;
            background-position-y: -18rem;
            background-repeat: no-repeat;
            margin: 0 var(--mobile-x-padding);
            color: white;
            border-radius: var(--border-radius);
            padding: 6rem 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            .feature-content {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                align-items: center;
            }
            .feature-text {
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 3rem;
                align-items: center;
            }
            .feature-img {
                width: 20rem;
            }
            .img-tablet {
                display: none;
            }
            .img-desktop {
                display: none;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-feature-primary {
            background-position-y: -25rem;
            .img-mobile {
                display: none;
            }
            .img-tablet {
                display: block;
            }
            .feature-content {
                width: 40rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .product-feature-primary {
            background-position-y: -5rem;
            background-position-x: -23rem;
            margin: 0 var(--desktop-x-padding);
            .feature-content {
                flex-direction: row;
                justify-content: center;
                gap: 15rem;
                width: auto;
            }
            .img-tablet {
                display: none;
            }
            .img-desktop {
                display: block;
            }
            .feature-img {
                width: 410px;
                position: relative;
                top: 7.5rem;
            }
            .feature-text {
                width: 35rem;
                text-align: left;
                align-items: flex-start;
            }
        }
    }
</style>
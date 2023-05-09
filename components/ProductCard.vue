<template>
    <div class="product-card" v-if="product">
        <img class="card-img img-mobile" :src="product.image.mobile" :alt="product.name">
        <img class="card-img img-tablet" :src="product.image.tablet" :alt="product.name">
        <img class="card-img img-desktop" :src="product.image.desktop" :alt="product.name">
        <div class="card-text">
            <div class="overline text-highlight" v-if="product.new">New Product</div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <NuxtLink :to="`../product-details/${product.id}`" class="button button-primary">
                See Product
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProductCard',
        props: {
            product: {
                type: Object,
            }
        },
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            .img-tablet {
                display: none;
            }
            .img-desktop {
                display: none;
            }
            .card-img {
                width: 100%;
            }
            .card-text {
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 3rem;
                align-items: center;
            }
            h2 {
                max-width: 35rem;
            }
            .button {
                margin: 0 auto;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-card {
            .card-img {
                width: 60rem;
            }
            p {
                max-width: 40rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .product-card {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10rem;
            .card-img {
                width: 40rem;
            }
            .card-text {
                justify-content: center;
                text-align: left;
                align-items: flex-start;
            }
            .button {
                margin: 0;
            }
            p {
                max-width: 40rem;
            }
        }
    }
</style>
<template>
    <div class="product-details-container" v-if="activeProduct">
        <button @click="goBack()" class="go-back">Go Back</button>
        <div class="product-details">
            <div class="product-summary">
                <img class="summary-img summary-img-mobile" :src="activeProduct.image.mobile" :alt="activeProduct.name">
                <img class="summary-img summary-img-tablet" :src="activeProduct.image.tablet" :alt="activeProduct.name">
                <img class="summary-img summary-img-desktop" :src="activeProduct.image.desktop" :alt="activeProduct.name">
                <div class="product-summary-text">
                    <div v-if="activeProduct.new" class="overline text-highlight">New Product</div>
                    <h2>{{ activeProduct.name }}</h2>
                    <p>{{ activeProduct.description }}</p>
                    <div class="product-price">${{ activeProduct.price.toLocaleString() }}</div>
                    <div class="product-actions">
                        <div class="product-quantity">
                            <FieldQuantity :quantity="quantity" @valueEmit="(e) => handleQuantityEvent(e)"></FieldQuantity>
                        </div>
                        <button class="button button-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="product-features-container">
                <h3>Features</h3>
                <p>{{ activeProduct.features }}</p>
            </div>
            <div class="inclusions-container">
                <h3>In the Box</h3>
                <ul>
                    <li v-for="(item, index) of activeProduct.includes" :key="index">
                        <div class="list-label text-highlight">{{ item.quantity }}x</div>
                        <div class="list-item">{{ item.item }}</div>
                    </li>
                </ul>
            </div>
            <div class="gallery-container">
                <div class="column">
                    <img class="gallery-img gallery-img-mobile" :src="activeProduct.gallery.first.mobile">
                    <img class="gallery-img gallery-img-tablet" :src="activeProduct.gallery.first.tablet">
                    <img class="gallery-img gallery-img-desktop" :src="activeProduct.gallery.first.desktop">

                    <img class="gallery-img gallery-img-mobile" :src="activeProduct.gallery.second.mobile">
                    <img class="gallery-img gallery-img-tablet" :src="activeProduct.gallery.second.tablet">
                    <img class="gallery-img gallery-img-desktop" :src="activeProduct.gallery.second.desktop">
                </div>
                <div class="column">
                    <img class="gallery-img gallery-img-mobile" :src="activeProduct.gallery.third.mobile">
                    <img class="gallery-img gallery-img-tablet" :src="activeProduct.gallery.third.tablet">
                    <img class="gallery-img gallery-img-desktop" :src="activeProduct.gallery.third.desktop">
                </div>
            </div>
            <div class="similar-items-container">
                <h3>You may also like</h3>
                <div class="similar-item" v-for="(item, index) of activeProduct.others" :key="index">
                    <img class="similar-img similar-img-mobile" :src="item.image.mobile" :alt="item.name">
                    <img class="similar-img similar-img-tablet" :src="item.image.tablet" :alt="item.name">
                    <img class="similar-img similar-img-desktop" :src="item.image.desktop" :alt="item.name">
                    <h3>{{ item.name }}</h3>
                    <NuxtLink class="button button-primary" :to="`./${getIdBySlug(item.slug)}`">See Product</NuxtLink>
                </div>
            </div>
            <Categories></Categories>
            <About></About>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { productData } from '~/const/productData';
    import { Product } from '~/interfaces/Product.interface';

    export default defineComponent({
        name: 'ProductDetails',
        data() {
            return {
                productData,
                activeProduct: null as Product | null,
                quantity: 1 as number,
            }
        },
        mounted() {
            this.getActiveProduct();
            console.log('activeProduct: ', this.activeProduct);
        },
        watch: {
            'quantity': {
                handler: function (val) {
                    if (val === '') {
                        this.quantity = 1;
                    }
                }
            }
        },
        methods: {
            getActiveProduct(): void {
                const target = this.productData.find((product: Product) => {
                    return product.id.toLocaleString() === this.$route.params.id;
                });
                if (target) {
                    this.activeProduct = target;
                }
            },
            handleQuantityEvent(e: number): void {
                this.quantity = e;
            },
            getIdBySlug(slug: string): number {
                const item = this.productData.find((product: Product) => {
                    return product.slug === slug;
                });
                console.log('item: ', item);
                if (item) {
                    return item.id;
                }
                return 0;
            },
            goBack(): void {
                this.$router.go(-1);
            },
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-details-container {
            margin-top: 15rem;
            padding: 0 var(--mobile-x-padding);
            .go-back {
                background: none;
                border: none;
                color: rgba(0,0,0,0.5);
                transition: var(--transition);
                cursor: pointer;
                font-size: 15px;
                &:hover {
                    color: black;
                }
            }
            .product-details {
                display: flex;
                flex-direction: column;
                gap: 10rem;
            }
            .summary-img-tablet {
                display: none;
            }
            .summary-img-desktop {
                display: none;
            }
            .summary-img {
                width: 100%;
            }
            .product-summary-text {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .product-price {
                font-weight: bold;
                letter-spacing: 1.29px;
                font-size: 18px;
            }
            .product-actions {
                display: flex;
                flex-direction: row;
                gap: 2rem;
            }
            .product-features-container {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                p {
                    white-space: pre-line;
                }
            }
            .inclusions-container {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                li {
                    display: flex;
                    flex-direction: row;
                    gap: 3rem;
                }
                .list-label, .list-item {
                    font-size: 15px;
                }
                .list-label {
                    font-weight: bold;
                    width: 2rem;
                }
                .list-item {
                    font-weight: 500;
                }
            }
            .gallery-container {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                .column {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
            }
            .gallery-img-tablet {
                display: none;
            }
            .gallery-img-desktop {
                display: none;
            }
            .gallery-img {
                border-radius: var(--border-radius);
            }
            .similar-items-container {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                h3 {
                    text-align: center;
                }
                .similar-item {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    align-items: center;
                }
                .similar-img-tablet {
                    display: none;
                }
                .similar-img-desktop {
                    display: none;
                }
                .similar-img {
                    width: 100%;
                }
            }
        }
    }
</style>
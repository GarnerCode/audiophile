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
                        <button @click="addToCart()" class="button button-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="product-details-container">
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
            </div>
            <div class="gallery-container">
                <div class="column column-left">
                    <img class="gallery-img gallery-img-mobile" :src="activeProduct.gallery.first.mobile">
                    <img class="gallery-img gallery-img-tablet" :src="activeProduct.gallery.first.tablet">
                    <img class="gallery-img gallery-img-desktop" :src="activeProduct.gallery.first.desktop">

                    <img class="gallery-img gallery-img-mobile" :src="activeProduct.gallery.second.mobile">
                    <img class="gallery-img gallery-img-tablet" :src="activeProduct.gallery.second.tablet">
                    <img class="gallery-img gallery-img-desktop" :src="activeProduct.gallery.second.desktop">
                </div>
                <div class="column column-right">
                    <img class="gallery-img gallery-img-mobile" :src="activeProduct.gallery.third.mobile">
                    <img class="gallery-img gallery-img-tablet" :src="activeProduct.gallery.third.tablet">
                    <img class="gallery-img gallery-img-desktop" :src="activeProduct.gallery.third.desktop">
                </div>
            </div>
            <div class="similar-items-container">
                <h3>You may also like</h3>
                <div class="items-container">
                    <div class="similar-item" v-for="(item, index) of activeProduct.others" :key="index">
                        <img class="similar-img similar-img-mobile" :src="item.image.mobile" :alt="item.name">
                        <img class="similar-img similar-img-tablet" :src="item.image.tablet" :alt="item.name">
                        <img class="similar-img similar-img-desktop" :src="item.image.desktop" :alt="item.name">
                        <h3>{{ item.name }}</h3>
                        <NuxtLink class="button button-primary" :to="`./${getIdBySlug(item.slug)}`">See Product</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="categories">
            <Categories></Categories>
        </div>
        <About></About>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { productData } from '~/const/productData';
    import { Product } from '~/interfaces/Product.interface';

    export default defineComponent({
        name: 'ProductDetails',
        data: () => {
            return {
                productData,
                activeProduct: null as Product | null,
                quantity: 1 as number,
            }
        },
        mounted() {
            this.getActiveProduct();
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
            addToCart(): void {
                if (this.activeProduct) {
                    let currentCart = [] as Array<any>;

                    if (localStorage.getItem('cart')) {
                        let cart = localStorage.getItem('cart');
                        JSON.parse(cart).forEach((item: any) => {
                            currentCart.push(item);
                        });
                    }

                    const existingProduct = currentCart.find((item: any) => {
                        return item.product.id === this.activeProduct?.id;
                    });

                    if (existingProduct) {
                        const updatedCart = [];
                        currentCart.forEach((item: any) => {
                            if (item.product.id === this.activeProduct.id) {
                                item.count += this.quantity;
                            }
                            updatedCart.push(item)
                        });
                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                    } else {
                        currentCart.push({
                            product: this.activeProduct,
                            count: this.quantity,
                        });
                        localStorage.setItem('cart', JSON.stringify(currentCart));
                    }
                    const storageEvent = new Event('localStorageUpdated');
                    document.dispatchEvent(storageEvent);
                    const cartEvent = new Event('toggleCart');
                    document.dispatchEvent(cartEvent);
                }
            },
            getIdBySlug(slug: string): number {
                const item = this.productData.find((product: Product) => {
                    return product.slug === slug;
                });
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
            .product-details-container {
                display: flex;
                flex-direction: column;
                gap: 10rem;
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
                .items-container {
                    display: flex;
                    flex-direction: column;
                    gap: 5rem;
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
            .categories {
                margin: 10rem 0;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-details-container {
            .product-summary {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 8rem;
            }
            .summary-img-mobile {
                display: none;
            }
            .summary-img-tablet {
                display: block;
            }
            .summary-img {
                width: 40rem;
            }
            .inclusions-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20rem;
            }
            .gallery-container {
                display: flex;
                flex-direction: row;
                .column-left {
                    width: 40%;
                }
                .column-right {
                    width: 60%;
                }
            }
            .gallery-img-mobile {
                display: none;
            }
            .gallery-img-tablet {
                display: block;
            }
            .gallery-img {
                width: 100%;
                height: 100%;
            }
            .similar-items-container {
                .items-container {
                    flex-direction: row;
                    gap: 0rem;
                }
                .similar-img-mobile {
                    display: none;
                }
                .similar-img-tablet {
                    display: block;
                }
            }

        }
    }
    @media screen and (min-width: 1440px) {
        .product-details-container {
            padding: 0 var(--desktop-x-padding);
            .product-summary {
                gap: 5rem;
                p {
                    max-width: 60rem;
                }
            }
            .summary-img-tablet {
                display: none;
            }
            .summary-img-desktop {
                display: block;
            }
            .summary-img {
                width: 60rem;
            }
            .product-details-container {
                flex-direction: row;
                gap: 15rem;
            }
            .product-features-container {
                width: 100%;
            }
            .inclusions-container {
                flex-direction: column;
                gap: 5rem;
                width: 50rem;
            }
            .gallery-container {
                gap: 3rem;
                .column-left {
                    gap: 3rem
                }
            }
            .gallery-img-tablet {
                display: none;
            }
            .gallery-img-desktop {
                display: block;
            }
            .similar-items-container {
                .similar-img-tablet {
                    display: none;
                }
                .similar-img-desktop {
                    display: block;
                }
            }
        }
    }
</style>
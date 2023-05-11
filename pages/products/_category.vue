<template>
    <div class="products-container">
        <div class="category-title-container">
            <h2>{{ queryCategory }}</h2>
        </div>
        <div class="products-list">
            <ProductCard 
                v-for="(product, index) of filteredProductsByCategory()" 
                :key="index" 
                :product="product">
            </ProductCard>
        </div>
        <Categories></Categories>
        <About></About>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { productData } from '@/const/productData';
    import { Product } from '~/interfaces/Product.interface';

    export default defineComponent({
        name: 'Products',
        data() {
            return {
                productData,
                queryCategory: null as string | null,
            }
        },
        created() {
            this.queryCategory = this.$route.params.category;
        },
        methods: {
            filteredProductsByCategory(): Product[] {
                return this.productData.filter((product: Product) => {
                    return product.category === this.queryCategory;
                });
            }
        },
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .products-container {
            margin-top: 11rem;
            display: flex;
            flex-direction: column;
            gap: 10rem;
            .category-title-container {
                background-color: black;
                padding: 5rem 0;
                h2 {
                    color: white;
                    text-align: center;
                }
            }
            .products-list {
                padding: 0 var(--mobile-x-padding);
                display: flex;
                flex-direction: column;
                gap: 10rem;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .products-container {
            margin-top: 8rem;
        }
    }
</style>
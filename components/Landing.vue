<template>
    <section id="section-landing">
        <div class="section-content" v-if="featuredProduct.id">
            <div class="section-text">
                <div class="overline">New Product</div>
                <h1>{{ featuredProduct.name }}</h1>
                <p>{{ featuredProduct.description }}</p>
                <button class="button button-primary">See Product</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { productData, featuredProduct } from '@/const/productData';

    export default defineComponent({
        name: 'Landing',
        data() {
            return {
                productData,
                featuredProduct,
            }
        },
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #section-landing {
            position: relative;
            background-image: url('static/assets/images/mobile/image-header.jpg');
            background-size:cover;
            background-position-y: -7rem;
            background-position-x: -1.75rem;
            .section-content {
                padding: 21.5rem 4rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h1 {
                    color: white;
                    font-size: 36px;
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
        }
    }
</style>
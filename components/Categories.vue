<template>
    <div class="categories-container">
        <div v-for="(category, index) of categoriesData" :key="index" class="category">
            <img class="category-img category-img-mobile" :src="category.images.mobile" :alt="category.label">
            <img class="category-img category-img-tablet" :src="category.images.mobile" :alt="category.label">
            <img class="category-img category-img-desktop" :src="category.images.mobile" :alt="category.label">
            <div class="category-label">{{ category.label }}</div>
            <div class="category-action">
                <div>Shop</div>
                <img src="assets/icons/icon-arrow-right.svg">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { categoriesData } from '@/const/categoriesData';

    export default defineComponent({
        name: 'Categories',
        data() {
            return {
                categoriesData,
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .categories-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            margin: 7rem 0;
            .category {
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                .category-img {
                    width: 80px;
                }
                &:hover {
                    .category-action {
                        div {
                            color: var(--color-primary);
                        }
                    }
                }
            }
            .category-img-tablet {
                display: none;
            }
            .category-img-desktop {
                display: none;
            }
            .category-label {
                font-size: 15px;
                text-align: center;
                text-transform: uppercase;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
            .category-action {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 1rem;
                img {
                    width: 5px;
                }
                div {
                    font-size: 13px;
                    text-transform: uppercase;
                    font-weight: bold;
                    opacity: 0.5;
                    transition: var(--transition);
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .categories-container {
            flex-direction: row;
            justify-content: center;
            gap: 15rem;
            .category-img-mobile {
                display: none;
            }
            .category-img-tablet {
                display: block;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .categories-container {
            .category-img-tablet {
                display: none;
            }
            .category-img-desktop {
                display: block;
            }
            .category {
                .category-img {
                    width: 122px;
                }
            }
        }
    }
</style>
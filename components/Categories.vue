<template>
    <div class="categories-container">
        <div @click="handleClick(category.label)" :to="`/products/${category.label}`" v-for="(category, index) of categoriesData" :key="index" class="category">
            <img class="category-img category-img-mobile" :src="category.images.mobile" :alt="category.label">
            <img class="category-img category-img-tablet" :src="category.images.mobile" :alt="category.label">
            <img class="category-img category-img-desktop" :src="category.images.mobile" :alt="category.label">
            <div class="category-label">{{ category.label }}</div>
            <div class="category-action">
                <div>Shop</div>
                <img src="~/static/assets/icons/icon-arrow-right.svg">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { categoriesData } from '@/const/categoriesData';

    export default defineComponent({
        name: 'Categories',
        data: () => {
            return {
                categoriesData,
            }
        },
        methods: {
            fireCloseNav(): void {
                const event = new Event('closeMobileNav');
                document.dispatchEvent(event);
            },
            handleClick(route: string): void {
                this.$router.push(`/products/${route}`);
                this.fireCloseNav();
            },
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
            margin: 0;
            .category {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: black;
                cursor: pointer;
                .category-img {
                    width: 120px;
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
            gap: 5rem;
            .category {
                .category-img {
                    width: 100%;
                }
            }
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
                    width: 50%;
                }
            }
            .category-label {
                font-size: 18px;
            }
        }
    }
</style>
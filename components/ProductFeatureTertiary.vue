<template>
    <div class="product-feature-tertiary">
        <div class="feature-content">
            <img class="feature-img img-mobile" src="assets/images/mobile/tertiary-feature-mobile.jpg" alt="YX1 Earphones">
            <img class="feature-img img-tablet" src="assets/images/tablet/tertiary-feature-tablet.jpg" alt="YX1 Earphones">
            <img class="feature-img img-desktop" src="assets/images/desktop/tertiary-feature-desktop.jpg" alt="YX1 Earphones">
            <div class="feature-text">
                <h4>YX1 Earphones</h4>
                <button class="button button-tertiary">See Product</button>
            </div>
        </div>
    </div>
</template>

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
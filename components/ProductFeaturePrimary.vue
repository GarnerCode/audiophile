<template>
    <div class="product-feature-primary">
        <div class="feature-content">
            <img class="feature-img img-mobile" src="assets/images/mobile/primary-feature-mobile.png" alt="ZX9 Speaker">
            <img class="feature-img img-tablet" src="assets/images/tablet/primary-feature-tablet.png" alt="ZX9 Speaker">
            <img class="feature-img img-desktop" src="assets/images/desktop/primary-feature-desktop.png" alt="ZX9 Speaker">
            <div class="feature-text">
                <h1>ZX9<br/> Speaker</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button class="button button-secondary">See Product</button>
            </div>
        </div>
    </div>
</template>

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
<template>
    <div class="product-feature-primary">
        <div class="feature-content">
            <img class="feature-img img-mobile" src="assets/images/mobile/primary-feature-mobile.png" alt="ZX9 Speaker">
            <img class="feature-img img-tablet" src="assets/images/tablet/primary-feature-tablet.png" alt="ZX9 Speaker">
            <img class="feature-img img-desktop" src="assets/images/desktop/primary-feature-desktop.png" alt="ZX9 Speaker">
            <h1>ZX9<br/> Speaker</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button class="button button-secondary">See Product</button>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-feature-primary {
            background-color: var(--color-primary);
            background-image: url('static/assets/images/pattern-circles.svg');
            background-size:cover;
            background-position-x: -15rem;
            background-position-y: -18rem;
            background-repeat: no-repeat;
            margin: 0 var(--mobile-x-padding);
            color: white;
            border-radius: var(--border-radius);
            padding: 6rem 3rem;
            .feature-content {
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
</style>
<template>
    <section class="section-about">
        <img class="about-img about-img-mobile" src="~/static/assets/images/mobile/about-mobile.jpg" alt="About image">
        <img class="about-img about-img-tablet" src="~/static/assets/images/tablet/about-tablet.jpg" alt="About image">
        <img class="about-img about-img-desktop" src="~/static/assets/images/desktop/about-desktop.jpg" alt="About image">
        <div class="about-text">
            <h4>Bringing you the <span class="text-highlight">best</span> audio gear</h4>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    </section>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .section-about {
            margin: 0 var(--mobile-x-padding);
            display: flex;
            flex-direction: column;
            gap: 3rem;
            align-items: center;
            .about-img-tablet {
                display: none
            }
            .about-img-desktop {
                display: none;
            }
            .about-img {
                width: 100%;
                border-radius: var(--border-radius);
            }
            .about-text {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                align-items: center;
                text-align: center;
            }
            h4 {
                width: 40rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .section-about {
            .about-img-mobile {
                display: none;
            }
            .about-img-tablet {
                display: block;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .section-about {
            flex-direction: row-reverse;
            gap: 15rem;
            .about-img-tablet {
                display: none;
            }
            .about-img-desktop {
                display: block;
            }
            .about-text {
                text-align: left;
                align-items: flex-start;
            }
        }
    }
</style>
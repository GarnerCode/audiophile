<template>
    <div>
        <Header></Header>
        <main>
            <Cart></Cart>
            <Nuxt />
        </main>
        <Footer></Footer>
    </div>
</template>

<style lang="scss">
@import 'static/assets/styles.scss';
    :root {
        --color-primary: #D87D4A;
        --color-secondary: #fbaf85;
        --color-black: #101010;
        --color-gray: #F1F1F1;
        --color-white: #FAFAFA;

        --mobile-x-padding: 4rem;
        --desktop-x-padding: 15rem;
        --transition: 0.3s ease;
        --border-radius: 10px;
    }
    body {
        background-color: var(--color-gray);
        margin: 0;
        font-family: 'Manrope', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, .overline, .subtitle {
        text-transform: uppercase;
    }
    h1, h2, h3, h4, h5, h6, .subtitle {
        font-weight: bold;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    h1 {
        font-size: 56px;
        letter-spacing: 2px;
    }
    h2 {
        font-size: 28px;
        letter-spacing: 1.5px;
    }
    h3 {
        font-size: 32px;
        letter-spacing: 1.15px;
    }
    h4 {
        font-size: 28px;
        letter-spacing: 2px;
    }
    h5 {
        font-size: 24px;
        letter-spacing: 1.7px;
    }
    h6 {
        font-size: 18px;
        letter-spacing: 1.3px;
    }
    .overline {
        font-size: 14px;
        letter-spacing: 10px;
        color: var(--color-primary);
        font-weight:normal;
    }
    .subtitle {
        font-size: 13px;
        color: var(--color-primary);
    }
    .field {
        width: 309px;
        height: 56px;
        &.default {
            border: 1px solid #CFCFCF;
        }
    }
    p {
        font-size: 15px;
        line-height: 25px;
        font-weight: 500;
    }
    .text-highlight {
        color: var(--color-primary);
    }
    .button {
        width: 160px;
        height: 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        text-transform: uppercase;
        transition: var(--transition);
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
        &.button-primary {
            background-color: var(--color-primary);
            color: white;
            border: none;
            &:hover {
                background-color: var(--color-secondary);
            }
        }
        &.button-secondary {
            background-color: black;
            color: white;
            border: none;
            &:hover {
                background-color: #4C4C4C;
            }
        }
        &.button-tertiary {
            background: none;
            border: 1px solid black;
            color: black;
            &:hover {
                background-color: black;
                color: white;
            }
        }
    }
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
    .slide-enter, .slide-leave-to {
        opacity: 0;
        transform: translateY(-2rem);
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }
    @media screen and (min-width: 0px) {
        h1 {
            font-size: 36px;
        }
        h3 {
            font-size: 24px;
        }
        .hidden-mobile {
            display: block;
        }
        .hidden-tablet {
            display: none !important;
        }
    }
    @media screen and (min-width: 768px) {
        .hidden-mobile {
            display: none;
        }
        .hidden-tablet {
            display: block;
        }
        h1 {
            font-size: 56px;
        }
        h2 {
            font-size: 40px;
        }
        h3 {
            font-size: 32px;
        }
    }
</style>
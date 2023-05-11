<template>
    <div id="checkout-page">
        <OrderConfirm :grandTotal="grandTotal" :toggleConfirmation="toggleConfirmation"></OrderConfirm>
        <button @click="goBack()" class="go-back">Go Back</button>
        <div class="checkout-content">
            <form class="checkout-form">
                <h2>Checkout</h2>
                <div class="form-section-header">Billing Details</div>
                <div class="fields-container fields-grid">
                    <div class="field" :class="{'error': formData.name.error}">
                        <div class="label-row">
                            <label class="field-label" for="name">Name</label>
                            <div v-if="formData.name.error" class="field-error">
                                {{ formData.name.error }}
                            </div>
                        </div>
                        <input v-model="formData.name.value" class="field-input" name="name" type="text" placeholder="Alexei Ward">
                    </div>
                    <div class="field" :class="{'error': formData.email.error}">
                        <div class="label-row">
                            <label class="field-label" for="email">Email Address</label>
                            <div v-if="formData.email.error" class="field-error">
                                {{ formData.email.error }}
                            </div>
                        </div>
                        <input v-model="formData.email.value" class="field-input" name="email" type="email" placeholder="alexei@mail.com">
                    </div>
                    <div class="field" :class="{'error': formData.phone.error}">
                        <div class="label-row">
                            <label class="field-label" for="phone">Phone Number</label>
                            <div v-if="formData.phone.error" class="field-error">
                                {{ formData.phone.error }}
                            </div>
                        </div>
                        <input v-model="formData.phone.value" class="field-input" name="phone" type="tel" placeholder="202-555-0136">
                    </div>
                </div>
                <div class="form-section-header">Shipping Info</div>
                <div class="fields-container">
                    <div class="field" :class="{'error': formData.address.error}">
                        <div class="label-row">
                            <label class="field-label" for="address">Your Address</label>
                            <div v-if="formData.address.error" class="field-error">
                                {{ formData.address.error }}
                            </div>
                        </div>
                        <input v-model="formData.address.value" class="field-input" name="address" type="text" placeholder="1137 Williams Avenue">
                    </div>
                    <div class="fields-grid">
                        <div class="field" :class="{'error': formData.zip.error}">
                            <div class="label-row">
                                <label class="field-label" for="zip">ZIP Code</label>
                                <div v-if="formData.zip.error" class="field-error">
                                    {{ formData.zip.error }}
                                </div>
                            </div>
                            <input v-model="formData.zip.value" class="field-input" name="zip" type="text" placeholder="10001">
                        </div>
                        <div class="field" :class="{'error': formData.city.error}">
                            <div class="label-row">
                                <label class="field-label" for="city">City</label>
                                <div v-if="formData.city.error" class="field-error">
                                    {{ formData.city.error }}
                                </div>
                            </div>
                            <input v-model="formData.city.value" class="field-input" name="city" type="text" placeholder="New York">
                        </div>
                        <div class="field" :class="{'error': formData.country.error}">
                            <div class="label-row">
                                <label class="field-label" for="country">Country</label>
                                <div v-if="formData.country.error" class="field-error">
                                    {{ formData.country.error }}
                                </div>
                            </div>
                            <input v-model="formData.country.value" class="field-input" name="country" type="text" placeholder="United States">
                        </div>
                    </div>
                </div>
                <div class="form-section-header">Payment Details</div>
                <div class="fields-container">
                    <label class="field-label" for="pay-method">Payment Method</label>
                    <div class="field radio-group-field">
                        <div class="field radio-field" :class="{'field-active': toggleEMoney}">
                            <input @click="toggleEMoney = true" id="e-money" name="pay-method" class="field-input" type="radio" value="e-Money" checked>
                            <label class="field-label radio-label" for="e-money">e-Money</label>
                        </div>
                        <div class="field radio-field" :class="{'field-active': !toggleEMoney}">
                            <input @click="toggleEMoney = false" id="pay-method" name="pay-method" class="field-input" type="radio" value="Cash on Delivery">
                            <label class="field-label radio-label" for="e-money">Cash on Delivery</label>
                        </div>
                    </div>
                    <div class="e-money-fields">
                        <div class="field" v-if="toggleEMoney" :class="{'error': formData.eMoneyNum.error}">
                            <div class="label-row">
                                <label class="field-label" for="e-money-num">e-Money Number</label>
                                <div v-if="formData.eMoneyNum.error" class="field-error">
                                    {{ formData.eMoneyNum.error }}
                                </div>
                            </div>
                            <input v-model="formData.eMoneyNum.value" class="field-input" name="e-money-num" type="number" placeholder="238521993">
                        </div>
                        <div class="field" v-if="toggleEMoney" :class="{'error': formData.eMoneyPin.error}">
                            <div class="label-row">
                                <label class="field-label" for="e-money-pin">e-Money PIN</label>
                                <div v-if="formData.eMoneyPin.error" class="field-error">
                                    {{ formData.eMoneyPin.error }}
                                </div>
                            </div>
                            <input v-model="formData.eMoneyPin.value" class="field-input" name="e-money-pin" type="number" placeholder="6891">
                        </div>
                    </div>
                </div>
            </form>
            <div class="summary-container">
                <h2>Summary</h2>
                <ul class="products-list">
                    <li class="product-item" v-for="(item, index) of cartItems" :key="index">
                        <img class="product-img" :src="item.product.image.mobile" :alt="item.product.name">
                        <div class="product-details">
                            <div class="product-name">{{ item.product.name }}</div>
                            <div class="product-price">${{ item.product.price.toLocaleString() }}</div>
                        </div>
                        <div class="product-count">
                            x{{ item.count }}
                        </div>
                    </li>
                </ul>
                <div class="totals">
                    <div class="total-row">
                        <div class="total-label">Total</div>
                        <div class="total-value">${{ totalPrice.toLocaleString() }}</div>
                    </div>
                    <div class="total-row">
                        <div class="total-label">Shipping</div>
                        <div class="total-value">${{ shippingPrice.toLocaleString() }}</div>
                    </div>
                    <div class="total-row">
                        <div class="total-label">VAT (Included)</div>
                        <div class="total-value">${{ vatPrice.toLocaleString() }}</div>
                    </div>
                </div>
                <div class="total-row grand-total">
                    <div class="total-label">Grand Total</div>
                    <div class="total-value text-highlight">${{ grandTotal.toLocaleString() }}</div>
                </div>
                <button @click="submitForm()" class="button button-primary confirm">Continue & Pay</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { checkoutFormData } from '@/const/checkoutFormData';
    import { FormEnum } from '@/enum/Form.enum';

    export default defineComponent({
        name: 'Checkout',
        data: () => {
            return {
                cartItems: [],
                toggleEMoney: true,
                totalPrice: 0,
                shippingPrice: 50,
                vatPrice: 0,
                grandTotal: 0,
                formData: checkoutFormData,
                FormEnum,
                toggleConfirmation: false,
            }
        },
        mounted() {
            this.cartItems = JSON.parse(localStorage.getItem('cart'));
            this.calculateTotalPrice();
            this.calculateVatPrice();
            this.calculateGrandTotal();
        },
        methods: {
            goBack(): void {
                this.$router.go(-1);
            },
            calculateTotalPrice(): void {
                let total = 0;
                this.cartItems?.forEach((item: any) => {
                    total += (item.product.price * item.count);
                });
                this.totalPrice = total;
            },
            calculateVatPrice(): void {
                this.vatPrice = Math.round(this.totalPrice * 0.2);
            },
            calculateGrandTotal(): void {
                this.grandTotal = (this.totalPrice + this.shippingPrice + this.vatPrice);
            },
            validateForm(): boolean {
                let alphaPattern = /^[a-zA-Z\s]*$/;
                let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                let phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                let data = Object.values(this.formData);
                let error = false;
                data.forEach((field: any) => {
                    field.error = null;
                    switch(field.id) {
                        case 'name':
                            if (!alphaPattern.test(field.value)) {
                                this.formData.name.error = FormEnum.ERROR_FORMAT;
                            }
                            break;
                        case 'email':
                            if (!emailPattern.test(field.value)) {
                                this.formData.email.error = FormEnum.ERROR_FORMAT;
                            }
                            break;
                        case 'phone':
                            if (!phonePattern.test(field.value)) {
                                this.formData.phone.error = FormEnum.ERROR_FORMAT;
                            }
                            break;
                    }
                    if (field.value === '' && field.required) {
                        this.formData[`${field.id}`].error = FormEnum.ERROR_REQUIRED;
                    }
                    if ((field.id === 'eMoneyNum' || field.id === 'eMoneyPin') && !this.toggleEMoney) {
                        field.error = null;
                    }
                    if (field.error) {
                        error = true;
                    }
                });
                return !error;
            },
            submitForm(): void {
                if (this.validateForm()) {
                    this.toggleConfirmation = true;
                }
            },
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #checkout-page {
            margin-top: 15rem;
            padding: 0 var(--mobile-x-padding);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5rem;
            .checkout-form {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                width: calc(100% - 4rem);
                background-color: white;
                border-radius: var(--border-radius);
                padding: 2rem;
            }
            .form-section-header {
                text-transform: uppercase;
                color: var(--color-primary);
                font-weight: bold;
                font-size: 13px;
                letter-spacing: 0.93px;
            }
            .fields-container {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                width: 100%;
            }
            .fields-grid {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .field {
                height: fit-content;
                width: 100%;
                &.error {
                    .field-label {
                        color: red;
                    }
                    .field-input {
                        border-color: red;
                    }
                }
            }
            .label-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 1rem;
                width: 100%;
            }
            .field-label {
                font-size: 12px;
                font-weight: bold;
            }
            .field-error {
                color: red;
                font-size: 12px;
                font-weight: 500;
            }
            .field-input {
                display: block;
                background: none;
                border: 1px solid #CFCFCF;
                border-radius: var(--border-radius);
                padding: 2rem;
                width: calc(100% - 4rem);
                font-size: 14px;
                font-weight: bold;
                &:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
            }
            .radio-group-field {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .radio-field {
                border: 1px solid #CFCFCF;
                padding: 2rem;
                width: calc(100% - 4rem);
                border-radius: var(--border-radius);
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 1rem;
                input {
                    width: auto;
                    accent-color: var(--color-primary);
                    margin: 0;
                    cursor: pointer;
                }
                &.field-active {
                    border-color: var(--color-primary);
                }
            }
            .e-money-fields {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .summary-container {
                width: calc(100% - 4rem);
                display: flex;
                flex-direction: column;
                gap: 3rem;
                background-color: white;
                border-radius: var(--border-radius);
                padding: 2rem;
            }
            .products-list {
                list-style: none;
                padding: 0;
                margin: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }
            .product-item {
                display: grid;
                grid-template-columns: 64px 3fr 1fr;
                gap: 2rem;
            }
            .product-img {
                width: 64px;
            }
            .product-name {
                font-size: 15px;
                font-weight: bold;
            }
            .product-price {
                font-size: 14px;
                font-weight: bold;
                opacity: 0.5;
            }
            .product-count {
                font-size: 15px;
                font-weight: bold;
                opacity: 0.5;
                text-align: right;
            }
            .totals {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .total-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .total-label {
                font-size: 15px;
                font-weight: 500;
                text-transform: uppercase;
                opacity: 0.5;
            }
            .total-value {
                font-size: 18px;
                font-weight: bold;
            }
            .confirm {
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #checkout-page {
            .checkout-content {
                width: 100%;
            }
            .fields-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            .radio-group-field {
                width: 50%;
                align-self: flex-end;
            }
            .e-money-fields {
                flex-direction: row;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        #checkout-page {
            padding: 0 var(--desktop-x-padding);
            .checkout-content {
                display: flex;
                flex-direction: row;
                gap: 7rem;
            }
            .summary-container {
                height: fit-content;
            }
        }
    }
</style>
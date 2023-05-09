<template>
    <div class="field-quantity">
        <button @click="verifyProp(-1)">-</button>
        <input type="number" v-model="emittedValue" min="1">
        <button @click="verifyProp(1)">+</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'FieldQuantity',
        data() {
            return {
                emittedValue: 1 as number,
            }
        },
        props: {
            quantity: {
                type: Number
            }
        },
        watch: {
            'emittedValue': {
                handler: function (val) {
                    this.verifyInputChange(val);
                }
            }
        },
        methods: {
            verifyProp(value: number): void {
                if (this.quantity) {
                    if (typeof(this.quantity) === 'string') {
                        this.emittedValue = parseInt(this.quantity);
                    }
                    this.emittedValue = this.quantity;
                    if (this.quantity >= 1 && value !== -1) {
                        this.emittedValue = this.quantity + value;
                    } else if (this.quantity > 1) {
                        this.emittedValue = this.quantity + value;
                    }
                    if (typeof(this.emittedValue) === 'string') {
                        this.emittedValue = parseInt(this.emittedValue);
                    }
                    this.emitValue(this.emittedValue);
                }
            },
            verifyInputChange(val: number | string): void {
                if (val === '') {
                        this.emittedValue = 1;
                }
                if (typeof(this.emittedValue) === 'string') {
                    this.emittedValue = parseInt(this.emittedValue);
                }
                this.emitValue(this.emittedValue);
            },
            emitValue(value: number): void {
                this.$emit('valueEmit', value);
            },
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .field-quantity {
        display: flex;
        flex-direction: row;
        align-items: center;
            button, input {
                width: 32px;
                height: 32px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                background: none;
                border: none;
            }
            button {
                cursor: pointer;
                font-size: 16px;
                color: rgba(0,0,0,0.25);
                transition: var(--transition);
                &:hover {
                    color: var(--color-primary);
                }
            }
            input {
                font-size: 13px;
                font-weight: bold;
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>
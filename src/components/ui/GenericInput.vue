<template>
    <div class="field external">
        <label class="label" :for="id">{{label}}</label>
        <input class="input external" :class="{'error': error}"
               :type="type"
               :value="value"
               :id="id"
               v-on="listeners"
               @input="$emit('input', $event.target.value)"
               :placeholder="placeholder"/>
    </div>
</template>

<script>
    /* eslint-disable vue/no-side-effects-in-computed-properties */

    export default {
        name: "GenericInput",
        props: {
            error: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            id: {
                type: String
            },
            placeholder: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            value: {
                default: ''
            }
        },
        data: () => {
            return {
                oldValue: '',
                focus: false,
                haveNewValue: false
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    focus: () => {
                        this.oldValue = this.$props.value;
                        this.focus = true;
                        this.haveNewValue = false;
                    },
                    input: (event) => {
                        this.$emit('input', event.target.value)
                    },
                    blur: () => {
                        this.focus = false;
                    }
                }
            },
            hasError: {
                get: () => {
                    return this.error && !this.focus && !this.haveNewValue;
                }
            }
        },
        watch: {
            error: () => {
                this.haveNewValue = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .field {
        position: relative;

        &.external {
            margin-bottom: 30px;
            width: 100%;
        }

    }

    .input {
        width: 100%;
        border: 1px solid #9e9e9e;
        border-radius: 5px;
        height: 38px;
        padding-left: 10px;

        &.external {
            border-radius: 5px !important;
            height: 45px !important;;
            box-shadow: 0 0.5px 1px 0 rgba(193, 193, 218, 0.5);
        }

        &.error {
         background: white;
         border: 1px solid #ff3860;
         box-shadow: 0 0 3px 4px rgba(255, 26, 96, 0.5);
     }

    &::placeholder {
         font-size: 20px;
         color: #c7c8c8;
         font-weight: 200;
     }
    }

    .label {
        color: #47475c;
        font-size: 20px;
        line-height: 1.43;
        margin-bottom: 12px;
        display: inline-block;
    }

    .help {
        position: absolute;
        bottom: -23px;

    &.error {
         background: transparent;
         color: #ff3860;
         font-size: 12px;
         line-height: 1.67;
     }
    }

</style>

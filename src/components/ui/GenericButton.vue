<template>
    <div class="button" @click="onClick" :class="getType" :disabled="isLoading">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "GenericButton",
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            onClick: {
                type: Function,
                default: () => null,
            }
        },
        computed: {
            getType: {
                get() {
                    const styleClass = [`is-${this.type}`];
                    if (this.$props.isLoading) {
                        styleClass.push('is-loading');
                    }

                    if (this.$props.icon !== '') {
                        styleClass.push(this.$props.icon);
                    }
                    return styleClass;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .button {
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: white;
        padding: 8px 0;
        border-radius: 5px;
        margin-right: 16px;
        text-align: center;
        box-shadow: 0 0 5px 2px rgba(152, 152, 174, 0.5);
        cursor: pointer;

        &.is-primary {
            background: #47475c;
        }

        &.is-white {
            color: #47475c;
            background: rgba(255, 255, 255, 0.5);
        }

        &.google {
            color: #47475c;
            background-image: url("../../assets/768px-google-logo.png");
            background-repeat: no-repeat;
            background-position: 5% 50%;
            background-size: 20%;
            padding-left: 20px;
        }
        &.facebook {
            color: #F8F9F9;
            background-image: url("../../assets/facebook-logo.png");
            background-color: #3A5997;
            background-repeat: no-repeat;
            background-position: 5% 50%;
            background-size: 20%;
            padding-left: 20px;
        }
    }

</style>

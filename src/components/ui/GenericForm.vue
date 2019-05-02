<template>
    <form v-on:submit.prevent="onClick">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "GenericForm",
        props: {
            onClick: {
                type: Function,
                default: () => null,
            }
        }
    }
</script>

<style scoped>

</style>

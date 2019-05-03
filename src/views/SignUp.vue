<template>
    <div class="sign-up">
        <div class="content">
            <div class="sign-up-card">
                <div class="sign-up-container">
                    <div class="title">
                        <p>Sign Up</p>
                    </div>
                    <div class="sign-up-form">
                        <generic-form>
                            <generic-input v-model="email" placeholder="Email" type="mail"
                                           label="Mail" :error="false"></generic-input>
                            <generic-input v-model="password" placeholder="Password" type="password"
                                           label="Password" :error="false"></generic-input>
                            <generic-input v-model="repeatPassword" placeholder="Repeat password" type="password"
                                           label="Repeat password" :error="false"></generic-input>
                            <div class="login-button">
                                <generic-button :on-click="() => signUp({email, password, repeatPassword})">Sign in</generic-button>
                            </div>
                        </generic-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import GenericForm from "../components/ui/GenericForm";
    import GenericInput from "../components/ui/GenericInput";
    import GenericButton from "../components/ui/GenericButton";

    export default {
        name: "Login",
        components: {GenericButton, GenericInput, GenericForm},
        data: () => {
            return {
                email: '',
                password: '',
                repeatPassword: ''
            }
        },
        methods: {
            ...mapActions({
                signUp: 'oauth/signUp'
            }),
        }
    }
</script>

<style scoped lang="scss">

    .sign-up {
        display: grid;
        height: 100vh;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 130px 1fr 1fr;
        grid-template-areas: ". . ." ". content ." ". . .";
    }

    .sign-up-container {
        border-radius: 8px;
        box-shadow: 0 0 5px 2px rgba(152, 152, 174, 0.5);
        background: rgba(255, 255, 255, 0.5);
        max-width: 410px;
        margin: 0 auto;
    }

    .title {
        margin-top: 10%;
        text-align: center;
        font-size: 36px;
        font-weight: 200;
        display: inline-block;
        color: #47475c;
        width: 100%;
    }

    .sign-up-form {
        margin: 50px 30px 0;
        position: relative;
    }

    .content {
        grid-area: content;
    }

    .sign-up-button {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }

    .card {
        margin-top: 0;
        margin-left: 30px;
        margin-right: 30px;
        position: relative;
    }

    .error {
        font-size: 12px;
        color: #ff3860;
        margin-left: 5px;
        margin-top: 4px;
    }

    .error-container {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 80px;
        font-size: 12px;
        color: #fa4c64;
    }

    .button {
        width: 200px !important;
        font-size: 18px !important;
        margin: 0 0 35px;
    }

</style>

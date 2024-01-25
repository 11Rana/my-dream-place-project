<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">

    <MyNavbar :logoSrc="require('../images/Logo.svg')" :showLinks="false" :showButton="false" :showNotification="false"
        :showProfile="false" />

    <form id="loginForm" @submit.prevent="signIn" class="min-h-screen w-full flex items-center justify-center mt-ng3">
        <div class="w-96 h-96 p-6 ">
            <h1 class="text-center mb-6 font-semibold text-xl">Sign in</h1>
            <label class="start-0 font-normal text-xs block mb-1">Email address</label>
            <input type="text" placeholder="Email address" v-model="email"
                class="bg-Gray6 w-full h-8 pl-3 rounded-md text-sm text-Gray2 placeholder:text-transparent focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">

            <label class="start-0 font-normal text-xs block mb-1 mt-5">Password</label>
            <div class="relative">
                <input ref="passwordInput" type="password" placeholder="Enter password" v-model="password"
                    class="bg-Gray6 w-full h-8 rounded-md pl-3 text-sm text-Gray2 placeholder:text-transparent focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">
                <span class="absolute inset-y-0 right-0 flex items-center mr-4" @click="ShowPassword">
                    <i class="far fa-eye cursor-pointer" :style="{ color: eyecolor }"></i>
                </span>
            </div>

            <div v-if="showErrorMessage" class="text-Red1 mt-2 font-normal start-0 text-xs">
                Wrong email or password. Try Again!
            </div>

            <button type="submit" class="bg-Blue w-full h-8 rounded-md font-medium text-xs text-white mt-8">Sign
                in</button>

            <p class="text-grey2 text-xs mt-3 font-normal text-center">Don't have an account?
                <span class="text-Blue text-xs mt-5 font-normal cursor-pointer" @click="openRegister">Register</span>
            </p>

        </div>
    </form>
</template>
    
<script>

import usersData from '../../data/users.json';
import MyNavbar from '@/components/MyNavbar.vue';


export default {
    name: 'SignInPage',
    components: {
        MyNavbar: MyNavbar,
    },

    data() {
        return {
            eyecolor: '#4F4F4F',
            email: '',
            password: '',

            showErrorMessage: false

        };
    },

    mounted() {
        this.passwordType = "password";
    },
    methods: {
        ShowPassword() {
            if (this.passwordType === "password") {
                this.passwordType = "text";
            } else {
                this.passwordType = "password";
            }

            this.$refs.passwordInput.type = this.passwordType;
        },


        openRegister() {
            this.$router.push('/register');
        },

        signIn() {
            const email = this.email;
            const password = this.password;

            const user = usersData.users.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {

                this.showErrorMessage = false;
                this.$router.push('/LogedInHome');
            } else {

                this.showErrorMessage = true;
            }

        },


    }
}
</script>
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">

    <MyNavbar :logoSrc="require('../images/Logo.svg')" :showLinks="false" :showButton="false" :showNotification="false"
        :showProfile="false" />

    <form id="registerForm" @submit.prevent="Register" class="min-h-screen w-full flex items-center justify-center mt-ng3">
        <div class="w-96 h-96 p-6 ">
            <h1 class="text-center mb-6 font-semibold text-xl">Register</h1>
            <label class="start-0 font-normal text-xs block mb-1">Email address</label>
            <input type="email" v-model="email" placeholder="Email address" required
                class="bg-Gray6 w-full h-8 pl-3 rounded-md text-sm text-Gray2 placeholder:text-transparent focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">

            <label class="start-0 font-normal text-xs block mb-1 mt-5">Password</label>
            <div class="relative">
                <input ref="passwordInput" v-model="password" type="password" placeholder="Enter password" required
                    class="bg-Gray6 w-full h-8 rounded-md pl-3 text-sm text-Gray2 placeholder:text-transparent focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">
                <span class="absolute inset-y-0 right-0 flex items-center mr-4" @click="ShowPassword">
                    <i class="far fa-eye cursor-pointer" :style="{ color: eyecolor }"></i>
                </span>
            </div>

            <label class="start-0 font-normal text-xs block mb-1 mt-5">Confirm password</label>
            <div class="relative">
                <input ref="confirmPasswordInput" v-model="confirmPassword" type="password" placeholder="Enter password"
                    required
                    class="bg-Gray6 w-full h-8 rounded-md pl-3 text-sm text-Gray2 placeholder:text-transparent focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">
                <span class="absolute inset-y-0 right-0 flex items-center mr-4" @click="ShowConfirmPassword">
                    <i class="far fa-eye cursor-pointer" :style="{ color: eyecolor }"></i>
                </span>
            </div>

            <div v-if="showErrorMessage" class="text-Red1 mt-2 font-normal start-0 text-xs">
                Password did't match!
            </div>

            <button type="submit" @click="Register"
                class="bg-Blue w-full h-8 rounded-md font-medium text-xs text-white mt-8">Submit</button>

            <p class="text-Gray2 text-xs mt-3 font-normal text-center">Already have an account?
                <span class="text-Blue text-xs mt-5 font-normal cursor-pointer" @click="openSignIn">Sign in</span>
            </p>

        </div>
    </form>
</template>
  
<script>
import MyNavbar from '@/components/MyNavbar.vue';

export default {
    name: 'registerPage',
    components: {
        MyNavbar: MyNavbar,
    },

    data() {
        return {
            eyecolor: '#4F4F4F',
            // User data properties
            email: '',
            password: '',
            confirmPassword: '',

            showErrorMessage: false
        };
    },

    mounted() {
        this.passwordType = "password";
        this.confirmPasswordType = "password";
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

        ShowConfirmPassword() {
            if (this.confirmPasswordType === "password") {
                this.confirmPasswordType = "text";
            } else {
                this.confirmPasswordType = "password";
            }

            this.$refs.confirmPasswordInput.type = this.confirmPasswordType;
        },

        openSignIn() {
            this.$router.push('/SignIn');
        },

        async Register() {

            const form = document.getElementById('registerForm');
            if (!form.checkValidity()) {
                return;
            }

            if (this.password !== this.confirmPassword) {
                this.showErrorMessage = true;
                return;
            }

            try {
                const userData = {
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                };


                await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });



                // Clear the form fields
                this.email = '';
                this.password = '';
                this.confirmPassword = '';
                this.showErrorMessage = false;
                this.$router.push('/LogedInHome');
            } catch (error) {
                console.error(error);
                alert('Registration failed! Please try again.');
            }
        },

    }
}
</script>
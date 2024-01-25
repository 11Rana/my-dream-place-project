<template>
    <div class="h-full">

        <h1 class="font-semibold font-defaultFont text-Black1 text-2xl mb-8">Available rooms</h1>

        <div class="flex">
            <!-- Cobon -->
            <div class="flex bg-gradient-to-b from-Blue1 to-Blue2 rounded-md mt-18" style="width: 400px; height: 340px;">
                <img src="..//images/LogoWhite.svg" class="h-6 w-40 mt-16 ml-8">

                <p class="block font-defaultFont text-xl font-bold text-bgColor mt-32 mr-1" style="margin-left: -158px;">20%
                    off<br>Use Promotional<br>Coupon Code:<br>
                    <span class="font-defaultFont text-xl font-bold text-Yellow2">Orlando</span>
                </p>
                <img src="../images/Frame.svg" class="absolute h-72 w-44 ml-40 mt-9">

                <div>
                </div>
            </div>


            <!-- Card1 -->
            <div class="w-40 h-40 bg-bgColor ml-5 rounded-md" style="width: 416px; height: 432px;">
                <div class="bg-cover bg-center rounded-md" style="height: 200px;">
                    <img class="h-full w-full object-cover rounded-t-md" src="../images/Rectangle 70.svg" alt="Your Image">
                </div>
                <p class="block font-defaultFont text-md font-semibold text-Black3 ml-5 mt-5">Standard twin ben,
                    Multiplebeds</p>

                <div>
                    <div class="flex items-center ml-5 mt-4 mb-0.5">
                        <div>
                            <img src="../images/bag-tick-2 1.svg">
                        </div>
                        <p class="font-defaultFont text-sm font-normal text-Gray2 ml-1 mt-0.5">300 sq ft</p>
                    </div>

                    <div class="flex items-center ml-5 mt-2 mb-0.5">
                        <div>
                            <img src="../images/lifebuoy 1.svg">
                        </div>
                        <p class="font-defaultFont text-sm font-normal text-Gray2 ml-1 mt-0.5">Sleeps 3</p>
                    </div>

                    <div class="flex items-center ml-5 mt-2">
                        <div>
                            <img src="../images/like-1 1.svg">
                        </div>
                        <p class="font-defaultFont text-sm font-normal text-Gray2 ml-1 mt-0.5">1 double bed and 1 twin bed
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button @click="$router.push('/checkout')"
                        class="justify-center items-center text-white bg-Blue rounded-md text-sm font-medium font-defaultFont px-3.5 py-2 mt-6"
                        style="width: 360px; height: 44px;">Reserve suite</button>
                </div>
            </div>

            <!-- Card2 -->
            <div class="w-40 h-40 bg-bgColor ml-5 rounded-md" style="width: 416px; height: 432px;">
                <div class="bg-cover bg-center rounded-md" style="height: 200px;">
                    <img class="h-full w-full object-cover rounded-t-md" src="../images/Rectangle 71.svg" alt="Your Image">
                </div>
                <p class="block font-defaultFont text-md font-semibold text-Black3 ml-5 mt-5">Standard twin ben, 1 Queen bed
                </p>
                <div>
                    <div class="flex items-center ml-5 mt-4 mb-0.5">
                        <div>
                            <img src="../images/bag-tick-2 1.svg">
                        </div>
                        <p class="font-defaultFont text-sm font-normal text-Gray2 ml-1 mt-0.5">300 sq ft</p>
                    </div>

                    <div class="flex items-center ml-5 mt-2 mb-0.5">
                        <div>
                            <img src="../images/lifebuoy 1.svg">
                        </div>
                        <p class="font-defaultFont text-sm font-normal text-Gray2 ml-1 mt-0.5">Sleeps 3</p>
                    </div>

                    <div class="flex items-center ml-5 mt-2">
                        <div>
                            <img src="../images/like-1 1.svg">
                        </div>
                        <p class="font-defaultFont text-sm font-normal text-Gray2 ml-1 mt-0.5">1 double bed and 1 twin bed
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button @click="$router.push('/checkout')"
                        class="justify-center items-center text-white bg-Blue rounded-md text-sm font-medium font-defaultFont px-3.5 py-2 mt-6"
                        style="width: 360px; height: 44px;">Reserve suite</button>
                </div>
            </div>
        </div>





</div></template>
        
<script setup>
</script>
  
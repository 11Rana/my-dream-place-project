<template>
    <div class="flex justify-center h-screen">
        <div class="container flex bg-bgColor rounded-md  h-60 w-96">
            <div class="rounded-md flex items-center justify-center">
                <img class="bg-cover " src="../images/Rectangle 32.svg">
            </div>

            <p class="block text-base font-defaultFont font-medium mt-6 ml-5">Lakeside Motel Warefront</p>
            <div class="mt-14 ml-ng5 inline">
                <img class="bg-cover" src="../images/Stars.svg">
            </div>
            <p class="block text-xs text-Gray2 font-defaultFont font-normal ml-5" style="margin-top: 59.3px;">4.5 (1200
                Reviews)</p>

            <div class="mt-28">
                <p class="block text-xs text-Red1 font-defaultFont font-normal ml-ng6">Non refundable
                    <span class="line-through text-Red1 font-defaultFont font-normal ml-m18">$150</span>
                    <span class="text-sm text-Gray1 font-defaultFont font-medium ml-3">$130</span>
                </p>
                <p class="block text-xs text-Gray2 font-defaultFont font-normal mt-3 ml-ng6">Check in: Sunday, March 18,
                    2022
                    <span class="text-xs text-Gray2 font-defaultFont font-light mt-3 ml-m19">Includes taxes and fees</span>
                </p>
                <p class="block text-xs text-Gray2 font-defaultFont font-normal mt-3 ml-ng6">Check out: Tuesday, March 20,
                    2022</p>
                <div>
                    <p class="text-xs text-Gray2 font-defaultFont font-normal mt-3 ml-ng6 mr-56 inline">2 night stay</p>
                    <button @click="$router.push('/productdetails')"
                        class="text-white bg-Blue rounded-md text-xs font-medium font-defaultFont px-3.5 py-2 ml-m20">View
                        trip details</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
</script>
    
<style scoped>
.container {
    width: 1133px;
    height: 240px;
    border: 1px solid #e0e0e0;
}</style>
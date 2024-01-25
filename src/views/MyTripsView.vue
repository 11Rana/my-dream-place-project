<template>
    <MyNavbar textColor="text-Gray1" :logoSrc="require('../images/Logo.svg')"
        :notificationSrc="require('../images/notification 1.svg')" :showLinks="true" :showButton="false"
        :showNotification="true" :showProfile="true" />
    <div class="bg-Gray7 h-full" style="height: 1290px;">


        <div class="bg-Gray7 px-20 pt-0.5">
            <h1 class="font-semibold font-defaultFont text-2xl mb-6 ml-28 mt-10">My trips</h1>
            <MyTrips class="mb-ng7" />
            <MyTrips />
            <Covid class="mt-ng5" />
            <myFooter class="pb-10 mt-ng6" />
        </div>
        <copy-rights />
    </div>
</template>

<script setup>
import MyNavbar from '@/components/MyNavbar.vue';
import MyTrips from '@/components/MyTrips.vue';
import Covid from "@/components/Covid.vue";
import copyRights from "@/components/CopyRights.vue";
import myFooter from "@/components/myFooter.vue";

</script>



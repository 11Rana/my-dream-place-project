<template>
  <MyNavbar textColor="text-Gray1" :logoSrc="require('../images/Logo.svg')"
    :notificationSrc="require('../images/notification 1.svg')" :showLinks="false" :showButton="false"
    :showNotification="true" :showProfile="true" />
  <div class="bg-Gray7 px-20 pt-0.5" style="height: 1660px;">
    <h1 class="font-semibold font-defaultFont text-2xl mb-6 ml-8 mt-10">Secure your reservation</h1>
    <Covid style="margin-top: -4px;" />
    <RoomsCard />
    <LakesideCard />
  </div>
</template>

<script setup>
import MyNavbar from '@/components/MyNavbar.vue';
import Covid from "@/components/Covid.vue";
import LakesideCard from '@/components/LakesideCard.vue';
import RoomsCard from '@/components/RoomsCard.vue';

</script>



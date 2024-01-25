<template>
  <MyNavbar textColor="text-Gray1" :logoSrc="require('../images/Logo.svg')"
    :notificationSrc="require('../images/notification 1.svg')" :showLinks="true" :showButton="false"
    :showNotification="true" :showProfile="true" />
  <div class="w-full h-full bg-Gray7" style="height: 2385px;">


    <div class="w-full bg-gradient-to-b from-grayGradient to-bgColor"
      style="height: 550px; border-bottom: 1px solid #E0E0E0;">
      <div class="px-28">
        <RoomsPictures />
        <OverviewVue />
        <OverviewDetails />
        <AvailableRooms />
      </div>

      <div class="bg-Gray7 h-auto">
        <div class="px-20 mt-48">
          <Covid />
          <myFooter class="mt-ng6 pb-10" />
        </div>
        <copy-rights />
      </div>


    </div>

  </div>
</template>
  
<script setup>
import MyNavbar from '@/components/MyNavbar.vue';
import Covid from "@/components/Covid.vue";
import myFooter from "@/components/myFooter.vue";
import copyRights from "@/components/CopyRights.vue";
import RoomsPictures from '../components/RoomsPictures.vue';
import OverviewVue from '@/components/Overview.vue';
import AvailableRooms from '@/components/AvailableRooms.vue';
import OverviewDetails from '@/components/OverviewDetails.vue';

</script>
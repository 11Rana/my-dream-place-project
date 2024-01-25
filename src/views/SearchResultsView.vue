<template>
  <div class="bg-gradient-to-b from-Gradient1 to-Gradient2" style="width: auto; height: 150px;">
    <MyNavbar textColor="text-bgColor" :logoSrc="require('../images/LogoWhite.svg')"
      :notificationSrc="require('../images/NotificationWhite.svg')" :showLinks="true" :showButton="false"
      :showNotification="true" :showProfile="true" />
  </div>

  <searchresults />
  <div class="px-20" style="padding-right: 80px; padding-left: 75px;">
    <Covid />
    <myFooter class="mt-ng6 pb-10" />
  </div>


  <copyRights />
</template>

<script setup>
import MyNavbar from '@/components/MyNavbar.vue';
import Covid from "@/components/Covid.vue";
import copyRights from "@/components/CopyRights.vue";
import myFooter from "@/components/myFooter.vue";
import searchresults from '@/components/SearchResults.vue'
import { ref } from 'vue';

const searchParams = ref(null);
// const hotels=ref([])

const performSearch = (params) => {
  searchParams.value = params;
};
</script>



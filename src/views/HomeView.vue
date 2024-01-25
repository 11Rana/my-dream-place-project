<template>
  <div>
    <MyNavbar textColor="text-Gray1" :logoSrc="require('../images/Logo.svg')" :showLinks="true" :showButton="true"
      :showNotification="false" :showProfile="false" />
    <div class="h-full px-20">
      <Hero />
      <SearchVue @click="$router.push('/register')" />
      <Covid />
      <Photos1 />

      <tripSec />
      <photos2 />

      <hero2 />
      <ExploreSec />
      <myFooter class="mt-ng6 pb-10" />
    </div>
    <copy-rights />

  </div>
</template>

<script setup>
import MyNavbar from '@/components/MyNavbar.vue';
import Hero from "@/components/HeroVue.vue";
import Covid from "@/components/Covid.vue";
import tripSec from "@/components/InspirationTrips.vue";
import hero2 from "@/components/HeroVue2.vue";
import ExploreSec from "@/components/ExploreSec.vue";
import myFooter from "@/components/myFooter.vue";
import Photos1 from "@/components/PhotosVue1.vue";
import photos2 from "@/components/PhotosVue2.vue";
import SearchVue from "@/components/searchVue.vue";
import copyRights from "@/components/CopyRights.vue";


</script>

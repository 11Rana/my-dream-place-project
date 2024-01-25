<template>
  <div v-if="popupTriggers.timedTrigger"
    class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-PopUp flex justify-center items-center">
    <div class="bg-bgColor p-8 rounded-md items-center text-center justify-center" style="width: 415px; height: 485px;">
      <div class="flex justify-center mb-6">
        <img src="../images/Welcome card.svg" alt="" class="" />
      </div>
      <h2 class="text-Black1 text-lg font-defaultFont font-semibold mb-4">Welcome to My Dream Place</h2>
      <p class="text-Gray2 text-base font-defaultFont font-normal mb-5">
        You can now enjoy your travel experience with easy access to resources and more
      </p>
      <button @click="TogglePopup('timedTrigger')"
        class="text-white bg-Blue rounded-md text-sm font-medium font-defaultFont px-3.5 py-2 mt-10"
        style="width: 352px; height: 44px;">Get Started</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const popupTriggers = ref({
      timedTrigger: false
    });

    const TogglePopup = () => {
      popupTriggers.value = !popupTriggers.value;
    };

    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 500);

    return {
      popupTriggers,
      TogglePopup
    };
  }
}
</script>
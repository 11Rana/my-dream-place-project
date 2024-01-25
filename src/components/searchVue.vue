<template>
  <div class="flex justify-center items-center mt-ng">
    <div class="flex justify-evenly items-center p-0.5 bg-bgColor rounded-lg shadow-lg"
      style="width:890px ; height: 60px;">
      <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
        <div style="width: 18px; height: 18px;">
          <img src="../images/location 2.svg" style="width: 18px; height: 18px;" />
        </div>
        <select
          class="block w-full mt-1 font-defaultFont border-gray-300 rounded-sm p-1 bg-Gray6 items-center text-xs text-Gray2 mb-0.5 outline-none focus:rounded-sm focus:ml-1 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">
          <option class="font-defaultFont bg-Gray6 outline-none text-xs text-Gray2 focus:rounded-sm focus:ml-1" selected
            disabled value="">Where are you going?</option>
          <option class="font-defaultFont bg-Gray6 outline-none text-xs text-Gray2 focus:rounded-sm focus:ml-1">Egypt
          </option>
        </select>
      </div>

      <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
        <div style="width: 18px; height: 18px;">
          <img src="../images/calendar 1.svg" style="width: 18px; height: 18px;" />
        </div>
        <input v-model="arrivalDate"
          class="no-icon-date-input font-defaultFont bg-Gray6 outline-none text-center text-xs text-Gray2 
        w-20 focus:rounded-sm focus:ml-1 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
          type="date" placeholder="Check in date" />
      </div>

      <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
        <div style="width: 18px; height: 18px;">
          <img src="../images/calendar 1.svg" style="width: 18px; height: 18px;" />
        </div>
        <input v-model="departureDate"
          class="no-icon-date-input font-defaultFont bg-Gray6 outline-none text-center text-xs text-Gray2 
        w-20 focus:rounded-sm focus:ml-1 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs" type="date"
          placeholder="Check out date" />
      </div>

      <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
        <div style="width: 18px; height: 18px;">
          <img src="../images/user-square 1.svg" class="w-5 h-5" />
        </div>
        <input v-model="guests"
          class="bg-Gray6 outline-none font-defaultFont text-xs text-Gray2 focus:rounded-sm focus:ml-1 placeholder:text-xs
         placeholder:text-Gray2 pl-1 mt-0.5 w-20 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
          type="number" placeholder="Guests" />
      </div>

      <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
        <div style="width: 18px; height: 18px;">
          <img src="../images/rooms.svg" class="w-5 h-5" />
        </div>
        <input v-model="rooms"
          class="bg-Gray6 outline-none font-defaultFont mt-0.5 text-xs text-Gray2 focus:rounded-sm focus:ml-1 placeholder:text-xs placeholder:text-Gray2 pl-1 w-20 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
          type="number" placeholder="Rooms" />
      </div>
      <button @click="searchHotels"
        class="text-white bg-Blue rounded-md text-sm font-medium font-defaultFont px-3.5 py-2 w-28 h-9">Search</button>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setValue } from '../localStorage';

const router = useRouter();
const arrivalDate = ref("");
const departureDate = ref("");
const guests = ref("");
const rooms = ref("");

function saveValue() {
  setValue('roomsValue', rooms.value);
  setValue('arrivalDateValue', arrivalDate.value);
  setValue('departureDateValue', departureDate.value);
  setValue('guestsValue', guests.value);

}


const searchHotels = () => {
  saveValue();
  router.push({
    name: "searchresults",
    // query: searchParams
  });
}
</script>
  
<style scoped>
.no-icon-date-input::-webkit-calendar-picker-indicator,
.no-icon-date-input::-webkit-inner-spin-button,
.no-icon-date-input::-webkit-clear-button {
  display: none;
}
</style>
<template>
  <div class="">
    <!-- Search Bar  -->
    <div class="flex justify-center items-center mt-ng">
      <div class="flex justify-evenly items-center p-0.5 bg-bgColor rounded-lg shadow-lg"
        style="width:890px ; height: 60px;">

        <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
          <div style="width: 18px; height: 18px;">
            <img src="../images/location 2.svg" style="width: 18px; height: 18px;" />
          </div>
          <select
            class="block w-full mt-1 font-defaultFont border-gray-300 rounded-sm p-1 bg-Gray6 items-center text-xs text-Gray2 mb-0.5 outline-none focus:rounded-sm focus:ml-1 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs">
            <option class="font-defaultFont bg-Gray6 outline-none text-xs text-Gray2 focus:rounded-sm focus:ml-1" disabled
              value="">Where are you going?</option>
            <option class="font-defaultFont bg-Gray6 outline-none text-xs text-Gray2 focus:rounded-sm focus:ml-1"
              selected>Egypt </option>
          </select>
        </div>

        <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
          <div style="width: 18px; height: 18px;">
            <img src="../images/calendar 1.svg" style="width: 18px; height: 18px;" />
          </div>
          <input v-model="arrivalDate"
            class="no-icon-date-input font-defaultFont bg-Gray6 outline-none text-center text-xs text-Gray2 w-20 focus:rounded-sm focus:ml-1 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
            type="date" placeholder="Check in date" />
        </div>

        <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
          <div style="width: 18px; height: 18px;">
            <img src="../images/calendar 1.svg" style="width: 18px; height: 18px;" />
          </div>
          <input v-model="departureDate"
            class="no-icon-date-input font-defaultFont bg-Gray6 outline-none text-center text-xs text-Gray2 w-20 focus:rounded-sm focus:ml-1 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
            type="date" placeholder="Check out date" />
        </div>

        <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">

          <div style="width: 18px; height: 18px;">
            <img src="../images/user-square 1.svg" class="w-5 h-5" />
          </div>
          <input v-model="guests"
            class="bg-Gray6 outline-none font-defaultFont text-xs text-Gray2 focus:rounded-sm focus:ml-1 placeholder:text-xs placeholder:text-Gray2 pl-1 mt-0.5 w-20 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
            type="number" placeholder="Guests" />
        </div>

        <div class="bg-Gray6 flex justify-between items-center p-2 rounded h-9">
          <div style="width: 18px; height: 18px;">
            <img src="../images/rooms.svg" class="w-5 h-5" />
          </div>
          <input v-model="rooms"
            class="bg-Gray6 outline-none font-defaultFont text-xs text-Gray2 focus:rounded-sm focus:ml-1 placeholder:text-xs placeholder:text-Gray2 pl-1 w-20 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs"
            type="number" placeholder="Rooms" />
        </div>
        <button @click="searchHotels"
          class="text-white bg-Blue rounded-md text-sm font-medium font-defaultFont px-3.5 py-2 w-28 h-9">Search</button>
      </div>
    </div>



    <div class="flex mt-6 mx-10">
      <div class="mx-8">

        <!-- Search By name Component  -->
        <div class=" border w-72 h-32 rounded-md ml-m22 mb-5 mt-14 bg-Gray6">
          <p class="font-defaultFont text-sm text-Black1 font-medium pt-6 pb-4" style="padding-left: 15px;">Search by
            property name</p>

          <div class="flex justify-center items-center">
            <div class="bg-bgColor py-4 rounded-md divide-solid flex items-center w-64 h-11 p-4"
              style="border: 1px solid #e0e0e0;">
              <img src="../images/search 1.svg" class="mr-0.5" />
              <input @input="FilterByName"
                class="bg-transparent py-4 rounded-md divide-solid flex items-center w-full h-full p-4 
                  font-defaultFont text-sm text-Gray2 font-normal placeholder:font-defaultFont 
                  placeholder:text-sm placeholder:text-Gray2 placeholder:font-normal outline-transparent
                  focus:outline-transparent focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-sm" type="text"
                placeholder="eg. Beach westpalm" v-model="FilterName" />
            </div>
          </div>
        </div>


        <!-- Filter By Budget -->
        <div class="mb-5 ml-m22">
          <h1 class="font-defaultFont text-md text-Gray1 font-semibold mb-2 ml-4">Filter by</h1>
          <div class="border w-72 h-80 rounded-md bg-bgColor">
            <div class="bg-Gray6 p-4 rounded-t-md divide-solid" style="border-bottom: 1px solid #e0e0e0;">
              <span class="font-defaultFont text-sm text-Black1 font-medium">Your budget per day</span>
            </div>
            <div class="m-3">
              <div class="flex mx-1 my-2">
                <input type="radio" class="mr-1" value="1" v-model="selectedPrice" @change="FilterBudget" />
                <div class="flex justify-center items-center">
                  <label for="" class="mr-28 font-defaultFont text-sm text-Gray1 font-normal">$ 0 - $ 200</label>
                  <span class="pl-8 font-defaultFont text-sm text-Gray1 font-normal">200</span>
                </div>
              </div>

              <div class="flex mx-1 my-2">
                <input type="radio" class="mr-1" value="2" v-model="selectedPrice"
                  @change="FilterBudget(selectedPrice)" />
                <div class="flex justify-center items-center">
                  <label for="" class="mr-28 font-defaultFont text-sm text-Gray1 font-normal">$ 200 - $ 500</label>
                  <span class="font-defaultFont text-sm text-Gray1 font-normal" style="padding-left: 16.5px;">100</span>
                </div>
              </div>

              <div class="flex mx-1 my-2">
                <input type="radio" class="mr-1" value="3" v-model="selectedPrice"
                  @change="FilterBudget(selectedPrice)" />
                <div class="flex justify-center items-center">
                  <label for="" class="mr-24 font-defaultFont text-sm text-Gray1 font-normal">$ 500 - $ 1,000</label>
                  <span class="font-defaultFont text-sm text-Gray1 font-normal" style="padding-left: 28.8px;">15</span>
                </div>
              </div>

              <div class="flex mx-1 my-2">
                <input type="radio" class="mr-1" value="4" v-model="selectedPrice"
                  @change="FilterBudget(selectedPrice)" />
                <div class="flex justify-center items-center">
                  <label for="" class="mr-24 font-defaultFont text-sm text-Gray1 font-normal">$ 1,000 - $ 2,000</label>
                  <span class="font-defaultFont text-sm text-Gray1 font-normal" style="padding-left: 17.2px;">12</span>
                </div>
              </div>

              <div class="flex mx-1 my-2">
                <input type="radio" class="mr-1" value="5" v-model="selectedPrice"
                  @change="FilterBudget(selectedPrice)" />
                <div class="flex justify-between items-center">
                  <label for="" class="mr-20 font-defaultFont text-sm text-Gray1 font-normal">$ 2,000 - $ 5,000</label>
                  <span class="font-defaultFont text-sm text-Gray1 font-normal" style="padding-left: 25.5px;">320</span>
                </div>
              </div>
            </div>

            <div class="m-2">
              <div class="flex items-center">
                <p class="font-defaultFont text-sm text-Gray2 font-normal pl-2 mr-1">Set your own budget</p>
                <button @click="filterMinMax"
                  class="text-white justify-center text-center items-center flex bg-Blue rounded-md text-xs font-medium font-defaultFont px-3.5 py-2 ml-14 h-7 w-16">Filter</button>
              </div>

              <div class="flex items-center my-2">
                <input v-model="min" type="text" placeholder="Min" style="border: 1px solid #e0e0e0;"
                  class="absolute w-28 h-10 rounded-md px-2 py-0.5 mt-16 ml-2 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs" />
                <input v-model="max" type="text" placeholder="Max"
                  style="border: 1px solid #e0e0e0; margin-left:148.5px ;"
                  class="absolute w-28 h-10 rounded-md px-2 py-0.5 mt-16 focus:outline-Blue focus:bg-transparent focus:placeholder:text-Gray2 focus:placeholder:text-xs" />
              </div>
            </div>
          </div>
        </div>

        <!-- Rating -->
        <Rating />
      </div>




      <!-- Results -->
      <div class="w-full">
        <div class="flex justify-between items-center">
          <h1 class="font-semibold font-defaultFont text-Black1 text-2xl mb-6 ml-7" style="margin-top: 49px;">
            Egypt : {{ hotels.length }} Search results found
          </h1>

          <!-- Sort by ID  -->
          <div @click="sortHotels" class="bg-bgColor py-4 rounded-md divide-solid flex items-center w-44 h-12 p-3 mt-14"
            style="border: 1px solid #bdbdbd; margin-right: 97px;">
            <div class="mt-0.5 mr-3">
              <p class="font-defaultFont text-xs text-Gray8 font-semibold">Sort by</p>
              <p class="font-defaultFont text-sm text-Gray1 font-normal">ID</p>
            </div>
            <img src="../images/arrow-down 1.svg" class="ml-20" />
          </div>
        </div>


        <!-- Hotels Card -->
        <div v-for="hotel in hotels" :key="hotel.hotel_id"
          class="container flex my-7 mr-20 rounded-md border border-Gray5 bg-bgColor p-5 ml-8 h-auto"
          style="width: 924px; margin-left: 31.5px;">
          <div class="rounded-md flex items-center justify-center">
            <img :src="hotel.property.photoUrls[0]" alt="" class="rounded-md" style="width: 285px; height: 200px;" />
          </div>
          <div class="pl-4" style="width: 555px; height: 153px;">
            <h2 class="block text-base font-defaultFont font-medium">{{ hotel.property.name }}</h2>
            <div class="flex my-2 items-center">
              <img src="../images/Stars.svg" alt="" class="mr-2" />
              <p class="text-xs text-Gray2 font-defaultFont font-normal ml-5">
                {{ hotel.property.reviewScore }}
                <span>({{ hotel.property.reviewCount }}) Reviews</span>
              </p>
            </div>

            <p class="text-xs text-Gray2 font-defaultFont font-medium mb-1">
              Live a little and celbrate with champagne
            </p>
            <p class="text-xs text-Gray2 font-defaultFont font-normal">
              {{ hotel.accessibilityLabel }}
            </p>
            <button @click="navigateToDetails(hotel.hotel_id)"
              class="absolute h-10 w-36 text-white bg-Blue rounded-md text-xs font-medium font-defaultFont px-3.5 py-2"
              style="margin-top: 20px;">See availability</button>
          </div>
          <div class="h-28 w-40 pt-36">
            <div class="flex items-center pl-16">
              <p class="line-through text-Red1 text-xs font-defaultFont font-normal ">
                ${{ RoundUp(hotel.property.priceBreakdown.grossPrice.value) }}
              </p>

              <p class="text-base text-Gray1 font-defaultFont font-semibold ml-3 text-right">
                ${{ RoundUp(hotel.property.priceBreakdown.excludedPrice.value) }}
              </p>
            </div>
            <p class="text-xs text-Gray2 font-defaultFont font-normal text-right pr-0">Includes taxes and fees</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Rating from "@/components/Rating.vue";
import router from "@/router";
import { getValue, setValue } from "../localStorage.js";

const searchParams = ref({
  arrivalDate: "",
  departureDate: "",
  guests: "",
  rooms: "",
});

const hotels = ref([]);
const arrivalDate = getValue("arrivalDateValue") || ref("");
const departureDate = getValue("departureDateValue") || ref("");
const guests = getValue("guestsValue") || ref("");
const rooms = getValue("roomsValue") || ref("");
const min = ref(0);
const max = ref(0);
const FilterName = ref("");
const selectedPrice = ref(null);

const searchHotels = () => {
  const params = {
    arrivalDate: convertDate(arrivalDate),
    departureDate: convertDate(departureDate),
    guests: guests,
    rooms: rooms
  };
  searchParams.value = params;
};


function filterMinMax() {
  hotels.value = hotels.value.filter((hotel) => {
    const price = hotel.property.priceBreakdown.excludedPrice.value;
    return price > min.value && price < max.value;
  });
}
function FilterBudget(priceLabel) {
  let minPrice, maxPrice;
  switch (priceLabel) {
    case "1":
      minPrice = 0;
      maxPrice = 200;
      break;
    case "2":
      minPrice = 200;
      maxPrice = 500;
      break;
    case "3":
      minPrice = 500;
      maxPrice = 1000;
      break;
    case "4":
      minPrice = 1000;
      maxPrice = 2000;
      break;
    case "5":
      minPrice = 2000;
      maxPrice = 5000;
      break;

    default:
      break;
  }
  hotels.value = hotels.value.filter((hotel) => {
    const price = RoundUp(hotel.property.priceBreakdown.excludedPrice.value);
    return price >= minPrice && price <= maxPrice;
  });
}
function navigateToDetails(HotelId) {
  setValue("SelectedHotel", HotelId);
  setValue("arrivaldate", arrivalDate);
  setValue("departuredate", departureDate);
  router.push('/productdetails')
}

const FilterByName = () => {
  hotels.value = hotels.value.filter((hotel) =>
    hotel.property.name.toLowerCase().includes(FilterName.value.toLowerCase())
  );
};
function sortHotels() {
  hotels.value.sort((a, b) => a.hotel_id - b.hotel_id);
  return hotels.value;
}
function convertDate(date) {
  date = JSON.stringify(date);
  const trimmedDate = date.trim();
  const parts = trimmedDate.split("/");
  const formattedDate = `${parts[2]}-${parts[0]}-${parts[1]}`;
  const convertedDate = formattedDate.substring(11, 21);
  console.log(convertedDate);
  return convertedDate;
}
function RoundUp(val) {
  return Math.ceil(val);
}

onMounted(() => {
  searchHotels();
});

onMounted(async () => {
  watch(searchParams, async (newParams) => {
    if (newParams) {
      const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
        params: {
          dest_id: '-2092174',
          search_type: 'CITY',
          arrival_date: newParams.arrivalDate,
          departure_date: newParams.departureDate,
          adults: newParams.guests,
          children_age: '0,17',
          room_qty: newParams.rooms,
          page_number: '1',
          languagecode: 'en-us',
          currency_code: 'AED'
        },
        headers: {
          'X-RapidAPI-Key': '425f6694b4mshe1a2496a8a62f38p125da8jsna8c5be9046f5',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        hotels.value = response.data.data.hotels;

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  });
});
</script>
  
<style scoped>
.no-icon-date-input::-webkit-calendar-picker-indicator,
.no-icon-date-input::-webkit-inner-spin-button,
.no-icon-date-input::-webkit-clear-button {
  display: none;
}

.container {
  width: 1133px;
  height: 240px;
  border: 1px solid #e0e0e0;
}
</style>
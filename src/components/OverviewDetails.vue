<template>
    <div class="flex mb-10">
        <div class="mt-10">
            <h1 class="font-semibold font-defaultFont text-Black1 text-3xl mb-3">Lakeside Motel Warefront</h1>
            <div class="flex items-center mb-3">
                <img src="../images/Stars.svg">
                <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3">4.5 (1200 Reviews)</p>
            </div>

            <div class="flex items-center mb-8">
                <img src="../images/location 1.svg">
                <p class="font-defaultFont font-normal text-sm text-Gray1 ml-3">Lorem ipsum road, Tantruim-2322, Melbourne,
                    Australia</p>
            </div>

            <div class="bg-bgColor rounded-md pb-6" style="width: 843px; height: auto;">
                <p class="font-defaultFont font-semibold text-lg text-Black1 ml-8 pt-6">Overview</p>
                <p class="font-defaultFont font-normal text-base text-Gray2 ml-8 pt-5 mb-11" style="width: 740px;">
                    {{ hotelDes.description }}
                </p>

                <hr class="border-Gray5 mt-5">

                <p class="font-defaultFont font-semibold text-lg text-Black1 ml-8 pt-6">Top facilities</p>
                <div class="flex items-center ml-8 mt-6">
                    <div class="flex items-center">
                        <img src="../images/home-wifi 1.svg">
                        <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Free wifi</p>
                    </div>

                    <div class="flex items-center ml-72 absolute">
                        <img src="../images/bag-tick-2 2.svg">
                        <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Business Services</p>
                    </div>
                </div>

                <div class="flex items-center ml-8 mt-3">
                    <div class="flex items-center">
                        <img src="../images/wind 1.svg">
                        <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Air Conditioning</p>
                    </div>

                    <div class="flex items-center ml-72 absolute">
                        <img src="../images/lifebuoy 2.svg">
                        <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Swimming pool</p>
                    </div>
                </div>

                <div class="flex items-center ml-8 mt-3">
                    <div class="flex items-center">
                        <img src="../images/car 1.svg">
                        <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Parking available</p>
                    </div>

                    <div class="flex items-center ml-72 absolute">
                        <img src="../images/like-1 2.svg">
                        <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Top rated in area</p>
                    </div>
                </div>

            </div>

        </div>


        <div class="mt-12">
            <img src="../images/Rectangle 65.svg" class="ml-7">
            <p class="font-defaultFont font-semibold text-lg text-Black1 ml-8 pt-9">Explore the area</p>


            <div class="flex items-center mt-5">
                <img src="../images/bxs-plane-alt 2.svg" class="ml-7">
                <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Hotel Penselvenyia</p>
                <p class="font-defaultFont font-normal text-sm text-Gray2 absolute mt-0.5" style="margin-left: 361px;">2 min
                    drive</p>
            </div>
            <div class="flex items-center mt-3">
                <img src="../images/bxs-map 1.svg" class="ml-7">
                <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Travis Bakery store house</p>
                <p class="font-defaultFont font-normal text-sm text-Gray2 absolute mt-0.5" style="margin-left: 353px;">10
                    min drive</p>
            </div>
            <div class="flex items-center mt-3">
                <img src="../images/bxs-map 1.svg" class="ml-7">
                <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Olivia Johnson Garden</p>
                <p class="font-defaultFont font-normal text-sm text-Gray2 absolute mt-0.5" style="margin-left: 353px;">15
                    min drive</p>
            </div>
            <div class="flex items-center mt-3">
                <img src="../images/bxs-map 1.svg" class="ml-7">
                <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Norman Opera Circus</p>
                <p class="font-defaultFont font-normal text-sm text-Gray2 absolute mt-0.5" style="margin-left: 353px;">18
                    min drive</p>
            </div>
            <div class="flex items-center mt-3">
                <img src="../images/bxs-map 1.svg" class="ml-7">
                <p class="font-defaultFont font-normal text-sm text-Gray2 ml-3 mt-0.5">Rockdeset hotel</p>
                <p class="font-defaultFont font-normal text-sm text-Gray2 absolute mt-0.5" style="margin-left: 353px;">32
                    min drive</p>
            </div>

        </div>


    </div>
</template>
<script setup>
import { getValue } from "../localStorage.js";
import axios from "axios";
import { onMounted, ref } from "vue";

const hotelDes = ref([]);

const hotelId = getValue("SelectedHotel") || ref("");

onMounted(async () => {
    if (hotelDes) {
        const options = {
            method: "GET",
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo',
            params: {
                hotel_id: hotelId,
                languagecode: "en-us",
            },
            headers: {
                'X-RapidAPI-Key': '425f6694b4mshe1a2496a8a62f38p125da8jsna8c5be9046f5',
                'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            },
        };

        try {
            const response = await axios.request(options);
            hotelDes.value = response.data.data[0];
            console.log(hotelDes.value);
        } catch (error) {
            console.error(error);
        }
    }
});
</script>
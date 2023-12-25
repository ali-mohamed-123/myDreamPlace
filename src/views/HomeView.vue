<template>
  <!-- <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"
  /> -->
  <!-- <nav class="flex items-center bg-white py-6 px-0">
    <div class="flex-initial">
      <a href="#" class="text-lg font-bold text-gray-800">
        <img class="inline-block" src="../assets/images/logo1.svg" alt="" />
        my Dream Place</a
      >
    </div>
    <div class="flex flex-auto justify-center gap-10 mr-[90px]">
      <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
      <a href="#" class="text-gray-800 hover:text-gray-600">Discover</a>
      <a href="#" class="text-gray-800 hover:text-gray-600">Activities</a>
      <a href="#" class="text-gray-800 hover:text-gray-600">About</a>
      <a href="#" class="text-gray-800 hover:text-gray-600">Contact</a>
    </div>
    <div v-if="!isAhuthintication" class="flex-initial">
      <router-link to="/login">
        <a
          href="#"
          class="text-base rounded-md ml-8 bg-blue-500 text-white w-[82px] h-[40px] py-[8px] px-[16px]"
          >Login</a
        ></router-link
      >
    </div>
    <div v-else class="relative">
      <div class="w-[44px] h-[44px] rounded-[44px]">
        <img src="../assets/images/photo15.png" />
      </div>
      <div class="w-[24px] h-[24px] absolute top-[10px] right-[60px]">
        <img src="../assets/images/logo9.svg" />
      </div>
    </div>
  </nav> -->
  <div class="relative">
    <div class="box-decoration-clone text-center">
      <img src="../assets/images/photo1.png" alt="main Image" class="w-full" />
      <div
        class="absolute bottom-5 left-0 w-full h-full flex items-center justify-center"
      >
        <span class="text-white text-2xl font-bold"
          >Enjoy Your Dream Vacation</span
        >
        <div
          class="absolute top-16 left-0 w-full h-full flex items-center justify-center text-white"
        >
          Plan and book our perfect trip with expert advice, travel tips,
          destination<br />
          information and inspiration from us
        </div>
      </div>
    </div>

    <div
      class="absolute -bottom-6 ml-[45px] search-inputs-container rounded-[8px] bg-white"
    >
      <div class="flex justify-between">
        <div class="relative">
          <select
            class="w-[230px] pt-[13px] pr-[15px] pb-[18px] pl-[35px] text-black text-center bg-gray2 mr-[8px] rounded placeholder-gray3"
            v-model="destinationValue"
          >
            <option>where are you going?</option>
            <option
              v-for="destination in destinations"
              :key="destination"
              :value="destination.dest_id"
            >
              {{ destination.city_name }}
            </option>
          </select>

          <img
            class="absolute bottom-4 left-2"
            src="../assets/images/logo10.svg"
          />
        </div>
        <div class="relative">
          <input
            class="w-[170px] pt-[11px] pr-[11px] pb-[12px] pl-[30px] text-center bg-gray2 mr-[8px] rounded placeholder-black"
            type="date"
            placeholder="Check in date"
            v-model="checkinValue"
          />
          <img
            class="absolute bottom-4 left-2"
            src="../assets/images/logo11.svg"
          />
        </div>
        <div class="relative">
          <input
            class="w-[170px] pt-[11px] pr-[11px] pb-[12px] pl-[30px] text-center bg-gray2 mr-[8px] rounded placeholder-black"
            type="date"
            placeholder="Check out date"
            v-model="checkoutValue"
          />
          <img
            class="absolute bottom-4 left-2"
            src="../assets/images/logo11.svg"
          />
        </div>
        <div class="relative">
          <input
            class="w-[158px] pt-[11px] pr-[11px] pb-[12px] pl-[12px] text-center bg-gray2 mr-[8px] rounded placeholder-black"
            type="number"
            placeholder="Guests"
            v-model="guestsValue"
          />
          <img
            class="absolute bottom-4 left-2"
            src="../assets/images/logo12.svg"
          />
        </div>
        <div class="relative">
          <input
            class="w-[157px] pt-[11px] pr-[11px] pb-[12px] pl-[12px] text-center bg-gray2 mr-[8px] rounded placeholder-black"
            type="number"
            placeholder="Rooms"
            v-model="roomsValue"
          />

          <img
            class="absolute bottom-3 left-2"
            src="../assets/images/logo7.svg"
          />
        </div>
        <button
          @click="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  </div>

  <div
    class="flex bg-amber-100 rounded-lg flex-row justify-startjustify-start p-3 mt-[50px]"
  >
    <img class="ml-[8px]" src="../assets/images/logo6.svg" />
    <div class="mt-1 ml-4 text-base">
      Check the latest COVID-19 restrictions before you travel. Learn more
    </div>
  </div>
  <div class="mt-[40px] text-2xl font-bold">Enjoy your dream vacation</div>
  <div class="mt-[12px] text-base">
    Plan and book our perfect trip with expert advice, travel tips, destination
    information<br />
    and inspiration from us
  </div>
  <div class="flex gap-6">
    <div
      v-for="item in items"
      :key="item.name"
      class="w-[295px] h-[220px] rounded-lg mt-[25px] relative"
    >
      <img :src="item.image" />
      <div class="mt-[14px]">
        <div class="font-bold text-lg">{{ item.name }}</div>
        <div class="description"><br />{{ item.description }}</div>
      </div>
    </div>
  </div>
  <div class="w-[504px] h-[32px] text-2xl font-semibold mt-[90px]">
    Get inspiration for your next trip
  </div>
  <div class="flex gap-6 relative">
    <div
      v-for="item in items2"
      :key="item.unique"
      class="w-[400px] h-[280px] rounded-lg mt-[25px]"
    >
      <img :src="item.image2" />
      <div
        class="font-semibold absolute second-1-Description text-lg w-[360px]"
      >
        {{ item.name2 }}
      </div>
      <div class="second-2-Description">{{ item.description2 }}</div>
    </div>
  </div>

  <div class="w-[504px] h-[32px] text-2xl font-semibold mt-[30px]">
    Popular hotels
  </div>

  <div class="flex gap-6">
    <div
      v-for="item in items3"
      :key="item.unique2"
      class="w-[295px] h-[300px] rounded-lg mt-[25px] relative"
    >
      <img :src="item.image3" />
      <div class="mt-[14px]">
        <div class="font-bold text-lg">{{ item.name3 }}</div>
        <div class="description"><br />{{ item.description3 }}</div>
      </div>
    </div>
  </div>

  <div class="relative w-[1159px] h-[280px] rounded-[8px] mt-[100px] bg-white">
    <img class="h-full bg-no-repeat" src="../assets/images/photo13.png" />
    <div class="absolute ml-[400px] bottom-0 contrast-150 opacity-100 top-0">
      <img class="h-full" src="../assets/images/photo14.png" />
    </div>
    <div
      class="w-[504px] h-[32px] text-2xl font-semibold bottom-[120px] absolute text-white ml-[69px] mb-[70px]"
    >
      Download the mobile application for bonus<br />
      coupons and travel codes
    </div>
    <button
      class="text-base rounded-md ml-8 bg-primary text-white py-[12px] px-[18px] absolute bottom-[75px] ml-[69px] mt-[70px]"
      type="submit"
    >
      Download mobile app
    </button>
  </div>
  <div class="w-[504px] h-[32px] text-2xl font-semibold mt-[45px] ml-[350px]">
    Explore the world with My Dream place
  </div>
  <div class="text-primary w-[820px] mt-[16px] ml-[440px]">
    Discover new places and experiences
  </div>
  <!-- start of the footer -->

  <!-- <footer
    class="mt-[70px] text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left"
  >
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="">
          <h6
            class="mb-4 flex items-center justify-center font-semibold md:justify-start ml-[-20px] text-[18px]"
          >
            <a href="#">
              <img
                class="inline-block"
                src="../assets/images/logo1.svg"
                alt=""
              />
              my Dream Place</a
            >
          </h6>
          <p class="ml-[8px] text-sm">
            Your next goto companion for<br />
            travel
          </p>
        </div>

        <div>
          <h6 class="mb-4 flex justify-center font-semibold md:justify-start">
            Company
          </h6>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >About</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Jobs</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Newsroom</a
            >
          </p>
          <p>
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Advertising</a
            >
          </p>
          <p class="mt-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Contact us</a
            >
          </p>
        </div>

        <div>
          <h6
            class="mb-4 flex justify-center font-semibold md:justify-start ml-[-110px] text-base"
          >
            Explore
          </h6>
          <p class="mb-4 ml-[-110px]">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Australia</a
            >
          </p>
          <p class="mb-4 ml-[-110px]">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >New Zealand</a
            >
          </p>
          <p class="mb-4 ml-[-110px]">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >United States America (USA)</a
            >
          </p>
          <p class="mb-4 ml-[-110px]">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Greece</a
            >
          </p>
          <p class="mb-4 ml-[-110px]">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Maldives</a
            >
          </p>
          <p class="mb-4 ml-[-110px]">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200 text-sm"
              >Singapore</a
            >
          </p>
          <p class="mb-4 ml-[-110px]">
            <a
              href="#!"
              class="text-neutral-600 dark:text-neutral-200 text-primary text-sm"
              >See more</a
            >
          </p>
        </div>

        <div>
          <h6
            class="mb-4 flex justify-center font-semibold md:justify-start ml-[-160px] text-base"
          >
            Terms and Policies
          </h6>
          <p class="mb-4">
            <a
              href="#!"
              class="text-neutral-600 dark:text-neutral-200 ml-[-160px] text-sm"
              >Privacy Policy</a
            >
          </p>
          <p class="mb-4">
            <a
              href="#!"
              class="text-neutral-600 dark:text-neutral-200 ml-[-160px] text-sm"
              >Terms of use</a
            >
          </p>
          <p class="mb-4">
            <a
              href="#!"
              class="text-neutral-600 dark:text-neutral-200 ml-[-160px] text-sm"
              >Acessibility</a
            >
          </p>
          <p class="mb-4">
            <a
              href="#!"
              class="text-neutral-600 dark:text-neutral-200 ml-[-160px] text-sm"
              >Reward system Policy</a
            >
          </p>
        </div>
        <div class="ml-[930px] absolute text-sm">
          <h6
            class="mb-4 flex justify-center font-semibold md:justify-start bottom-[300px] text-base"
          >
            Help
          </h6>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
              >Support</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
              >Cancel your bookings</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
              >Use Coupon</a
            >
          </p>
          <p>
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
              >Refund Policies</a
            >
          </p>
          <p class="mt-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
              >International Travel Documents</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="flex bg-gray2 flex-row justify-startjustify-start p-3 h-[44px]">
      <div class="ml-[800px] text-sm">© my Dream Place 2022</div>
    </div>
  </footer> -->
  <!-- end of the footer -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import image2 from "@/assets/images/photo2.png";
import image3 from "@/assets/images/photo3.png";
import image4 from "@/assets/images/photo4.png";
import image5 from "@/assets/images/photo5.png";
import image6 from "@/assets/images/photo6.png";
import image7 from "@/assets/images/photo7.png";
import image8 from "@/assets/images/photo8.png";
import image9 from "@/assets/images/photo9.png";
import image10 from "@/assets/images/photo10.png";
import image11 from "@/assets/images/photo11.png";
import image12 from "@/assets/images/photo12.png";
import { useRouter } from "vue-router";
import axios from "axios";
import { appStore } from "../stores/counter";
import { list } from "postcss";
const router = useRouter();
const store = appStore();
const { getDestinations, searchHotels } = store;

const submit = () => {
  if (
    !!destinationValue.value &&
    !!checkinValue.value &&
    !!checkoutValue.value &&
    !!guestsValue.value &&
    !!roomsValue.value
  ) {
    localStorage.setItem(
      "searchQuery",
      JSON.stringify({
        dest_id: destinationValue.value,
        search_type: "CITY",
        arrival_date: checkinValue.value,
        departure_date: checkoutValue.value,
        adults: guestsValue.value,
        room_qty: roomsValue.value,
      })
    );
    router.push({ name: "list" });
  } else {
    alert("please fill all inputs");
  }
};

const token = ref("");
const destinationValue = ref("");
const checkinValue = ref("");
const checkoutValue = ref("");
const guestsValue = ref("");
const roomsValue = ref("");
const items = [
  {
    name: "Australia",
    description: "2246 properties",
    image: image2,
  },
  {
    name: "Japan",
    description: "1278 properties",
    image: image3,
  },
  {
    name: "New Zealand",
    description: "480 properties",
    image: image4,
  },
  {
    name: "Greece",
    description: "320 properties",
    image: image5,
  },
];
const destinations = ref([]);

const items2 = [
  {
    name2: "Sydeny’s 10 most fashionable 5 star hotels",
    description2:
      "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    image2: image6,
  },
  {
    name2: "Top cities for Vegan Travellers",
    description2:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    image2: image7,
  },
  {
    name2: "World’s top destinations during and post covid timeline",
    description2:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    image2: image8,
  },
];

const items3 = [
  {
    name3: "Lakeside Motel Warefront",
    description3: "2246 properties",
    image3: image9,
  },
  {
    name3: "Recce Graham resort",
    description3: "1278 properties",
    image3: image10,
  },
  {
    name3: "Fireside Dinners",
    description3: "480 properties",
    image3: image11,
  },
  {
    name3: "Oculous Inn Stay",
    description3: "320 properties",
    image3: image12,
  },
];
const isAhuthintication = () => {
  token.value = localStorage.getItem("token");
  if (token.value) {
    return true;
  } else {
    return false;
  }
};
onMounted(() => {
  isAhuthintication();
  getDestinations().then((response) => {
    // console.log(response.data.data);
    destinations.value = response.data.data.filter(
      (item) => item.city_name != ""
    );
  });
});
</script>
<style>
.search-inputs-container {
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
  padding: 8px;
}
.description {
  margin-top: -20px;
  font-size: 14px;
}
.second-1-Description {
  margin-top: -125px;
  color: white;
  margin-left: 25px;
}
.second-2-Description {
  margin-top: -70px;
  color: white;
  margin-left: 25px;
  font-size: 15px;
}
</style>

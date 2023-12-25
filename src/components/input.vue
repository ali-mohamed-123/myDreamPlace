<template>
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
</template>
<script setup>
const store = appStore();
import { onMounted, ref } from "vue";
import { appStore } from "../stores/counter";
const destinations = ref([]);
const destinationValue = ref("");
const checkinValue = ref("");
const checkoutValue = ref("");
const guestsValue = ref("");
const roomsValue = ref("");
const token = ref("");
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

onMounted(() => {
  const searchQuery = JSON.parse(localStorage.getItem("searchQuery"));
  if (searchQuery) {
    destinationValue.value = searchQuery.dest_id;
    checkinValue.value = searchQuery.arrival_date;
    checkoutValue.value = searchQuery.departure_date;
    guestsValue.value = searchQuery.adults;
    roomsValue.value = searchQuery.room_qty;
  }
  isAhuthintication();
  getDestinations().then((response) => {
    console.log(response?.data?.data);
    destinations.value = response?.data?.data.filter(
      (item) => item.city_name != ""
    );
  });
});
const isAhuthintication = () => {
  token.value = localStorage.getItem("token");
  if (token.value) {
    return true;
  } else {
    return false;
  }
};
</script>

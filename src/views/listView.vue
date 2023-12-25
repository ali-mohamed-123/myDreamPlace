<template>
  <!-- <linkClass class="bg-primary" /> -->

  <inputView class="inputs" />

  <div class="flex flex-row mt-[220px] gap-x-[26px] relative mb-[600px]">
    <div class="w-[275px] h-[120px] rounded-[6px] bg-gray2 relative top-2">
      <div class="ml-[20px] mt-[25px] text-[16px]">
        <div>Search by property name</div>
      </div>
      <div class="rounded-[4px] ml-[20px] mt-[15px] text-[14px] relative">
        <input
          class="pr-[10px] py-[10px] pl-[30px]"
          placeholder="eg. Beach westpalm"
          type="text"
        />
        <div>
          <img
            class="absolute mb-[130px] top-3 left-1"
            src="../assets/images/logo13.svg"
          />
        </div>
      </div>
      <div class="ml-[20px] mt-[35px] mb-[18px] font-semibold text-[18px]">
        Filter by
      </div>
      <div class="w-[275px] h-[400px] rounded-[6px] border-[1px] border-black">
        <div class="bg-gray2 px-[20px] py-[14px] fonr-semibold">
          Your budget per day
        </div>
        <div class="ml-[20px] mt-[20px]">
          <input type="checkbox" name="checkbox1" />
          <label class="ml-[8px]">$ 0 - $ 200</label><br />

          <input type="checkbox" name="checkbox2" class="mt-[14px]" />
          <label class="ml-[8px]">$ 200 - $ 500</label><br />

          <input type="checkbox" name="checkbox3" class="mt-[14px]" />
          <label class="ml-[8px]">$ 500 - $ 1,000</label><br />

          <input type="checkbox" name="checkbox4" class="mt-[14px]" />
          <label class="ml-[8px]">$ 1,000 - $ 2,000</label><br />

          <input type="checkbox" name="checkbox5" class="mt-[14px]" />
          <label class="ml-[8px]">$ 2,000 - $ 5,000</label><br />
        </div>
        <div>
          <div class="mt-[20px] ml-[20px]">Set your own budget</div>
          <img
            class="ml-[220px] relative bottom-5"
            src="../assets/images/logo15.svg"
          />
        </div>
        <div
          class="border-[1px] border-dashed border-black w-[227px] h-[85px] ml-[25px] relative bottom-2"
        >
          <div
            class="w-[100px] h-[41px] rounded-[4px] border-[1px] border-black relative top-5 ml-[10px] text-[14px]"
          >
            <div class="ml-[10px] mt-[8px]">Min budget</div>
          </div>
          <div
            class="w-[100px] h-[39px] rounded-[4px] border-[1px] border-black ml-[117px] relative bottom-5 text-[14px]"
          >
            <div class="ml-[8px] mt-[6px]">Max budget</div>
            <div
              class="relative right-28 text-[12px] w-[810px] mt-[15px] ml-[7px] tracking-wider"
            >
              Press Enter to filter
            </div>
          </div>
        </div>
        <div
          class="mt-[30px] w-[275px] h-[170px] rounded-[6px] border-[1px] border-black"
        >
          <div class="pl-[18px] py-[13px] font-medium text-[16px] bg-gray2">
            Rating
          </div>
          <div class="ml-[18px] text-[14px] mt-[20px]">
            Show only ratings more than
          </div>
          <div class="flex justify-items-center">
            <div
              class="ml-[10px] mt-[10px] border-[1px] border-black px-[10px] py-[10px]"
            >
              1<img class="inline-block" src="../assets/images/logo16.svg" />
            </div>
            <div
              class="ml-[0px] mt-[10px] border-[1px] border-black px-[10px] py-[10px]"
            >
              2 <img class="inline-block" src="../assets/images/logo16.svg" />
            </div>
            <div
              class="ml-[0px] mt-[10px] border-[1px] border-black px-[10px] py-[10px]"
            >
              3 <img class="inline-block" src="../assets/images/logo16.svg" />
            </div>
            <div
              class="ml-[0px] mt-[10px] border-[1px] border-black px-[10px] py-[10px]"
            >
              4 <img class="inline-block" src="../assets/images/logo16.svg" />
            </div>
            <div
              class="ml-[0px] mt-[10px] border-[1px] border-black px-[10px] py-[10px]"
            >
              5<img class="inline-block" src="../assets/images/logo16.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-[275px] h-[170px] rounded-[6px]"></div>
    </div>

    <div class="relative">
      <div class="text-2xl relative top-2">
        Cairo : 2,582 search results found
      </div>
      <div
        class="w-[220px] bg-gray2 ml-[660px] h-[50px] rounded-[6px] sortByInput relative bottom-6 border-[1px] border-black"
      >
        <div class="text-[12px] ml-[12px] relative top-2">
          Sort by <br />Recommended
        </div>
        <div class="ml-[180px] relative bottom-6">
          <select>
            <option></option>
          </select>
        </div>
      </div>

      <div
        v-for="hotel in hotels.data?.hotels"
        :key="hotel.property?.id"
        class="w-[880px] h-[240px] rounded-[5px] border-[1px] border-black mb-[38px]"
      >
        <img
          class="w-[285px] h-[220px] ml-[20px] pt-[22px]"
          v-if="hotel.property?.photoUrls"
          :src="hotel.property.photoUrls[0]"
        />
        <img
          class="w-[285px] h-[200px] ml-[20px] pt-[22px]"
          v-else
          src="../assets/images/photo1.png"
        />
        <div class="absolute ml-[330px] relative bottom-[170px]">
          {{ hotel.property?.name }}
        </div>
        <div class="text-xs ml-[330px] relative top-[-115px]">
          {{ hotel.accessibilityLabel }}
        </div>
        <div
          class="rounded-[6px] bg-primary w-[137px] h-[44px] relative bottom-[105px] left-[330px] text-white"
        >
          <button class="ml-[16px] mt-[10px]">See availability</button>
        </div>
        <div class="ml-[790px] relative top-[145px] text-[20px] font-semibold">
          {{ hotel.property.priceBreakdown.grossPrice?.value }}$
        </div>

        <div class="absolute ml-[410px] relative bottom-[265px]">
          4.5 (1200 Reviews)
        </div>
      </div>
    </div>
  </div>

  <covid class="covid" />
</template>
<script setup>
import headerView from "../components/header.vue";
import inputView from "../components/input.vue";
import covid from "../components/covid.vue";

import footerView from "../components/footer.vue";
import { onMounted, ref } from "vue";
import { appStore } from "../stores/counter";
const store = appStore();
const { searchHotels } = store;
const searchQuery = ref({});
const hotels = ref([]);

onMounted(async () => {
  searchQuery.value = JSON.parse(localStorage.getItem("searchQuery"));
  hotels.value = await searchHotels(searchQuery.value);
  console.log(hotels.value.data.hotels);
});
</script>
<style>
.inputs {
  margin-bottom: 430px;
}
</style>

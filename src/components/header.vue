<template>
  <nav
    class="flex items-center py-6 px-0 px-[50px]"
    :class="props.isHotelsHeader ? 'bg-primary2 text-white' : ''"
  >
    <div class="flex-initial">
      <a
        href="#"
        class="text-lg font-bold text-gray-800"
        :class="props.isHotelsHeader ? 'bg-primary2 text-white' : ''"
      >
        <!-- <img
          :class="props.isHotelsHeader ? 'text-[white]' : ''"
          class="inline-block"
          src="../assets/images/logo1.svg"
        /> -->
        <svg
          class="inline-block bg-primary2 text-[red]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#292D32" />
          <g clip-path="url(#clip0_0_1)">
            <rect
              width="1440"
              height="2948"
              transform="translate(-100 -22)"
              :fill="props.isHotelsHeader ? '#144E9D' : 'white'"
            />
            <rect
              x="-100"
              y="-22"
              width="1440"
              height="68"
              :fill="props.isHotelsHeader ? '#144E9D' : 'white'"
            />
            <path
              d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
              :fill="props.isHotelsHeader ? 'white' : '#2F80ED'"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="1440"
                height="2948"
                fill="white"
                transform="translate(-100 -22)"
              />
            </clipPath>
          </defs>
        </svg>

        my Dream Place</a
      >
    </div>
    <div class="flex flex-auto justify-center gap-10 mr-[90px]">
      <a href="#" class="hover:text-gray-600">Home</a>
      <a href="#" class="hover:text-gray-600">Discover</a>
      <a href="#" class="hover:text-gray-600">Activities</a>
      <a href="#" class="hover:text-gray-600">About</a>
      <a href="#" class="hover:text-gray-600">Contact</a>
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
  </nav>
</template>
<script setup>
import { onMounted, ref } from "vue";
const token = ref("");

const props = defineProps({
  isHotelsHeader: {
    type: Boolean,
    default: false,
  },
  isHotelsPhotos: {
    type: Boolean,
    default: false,
  },
});

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
});
</script>
<style></style>

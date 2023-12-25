<template>
  <div class="mx-[50px] mt-[33px]">
    <div class="flex-initial">
      <a href="#" class="text-lg font-bold text-gray-800">
        <img class="inline-block" src="../assets/images/logo1.svg" alt="" />
        my Dream Place</a
      >
    </div>
    <div
      class="w-[1200px] h-8 text-center text-neutral-900 text-3xl font-semibold mt-[50px]"
    >
      Sign in<br />
    </div>
    <form @submit.prevent="handleLogin">
      <div class="ml-[410px] mt-[50px]">
        <p>Email address</p>

        <input
          required
          type="email"
          v-model="form.email"
          class="w-96 h-11 px-3 pt-2.5 pb-3 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex"
        />
      </div>
      <div class="ml-[410px] mt-[30px] relative">
        <div>Password</div>

        <input
          required
          type="password"
          v-model="form.password"
          class="w-96 h-11 px-3 pt-2.5 pb-3 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex"
        />
        <img
          class="absolute top-[35px] right-[400px]"
          src="../assets/images/logo8.svg"
        />
      </div>
      <button
        type="submit"
        class="text-white w-96 h-11 px-3 pt-2.5 pb-3 bg-primary rounded gap-2.5 inline-flex ml-[410px] mt-[30px] justify-center"
      >
        Sign in
      </button>
      <div class="flex items-center mt-[20px] ml-[480px]">
        <span>Don't have an account?</span>
        <p class="text-blue-500 cursor-pointer ml-1">Register</p>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  email: "",
  password: "",
});
const handleLogin = () => {
  console.log(form.value);
  const token = btoa(JSON.stringify(form.value));
  console.log(token);
  localStorage.setItem("token", token);
  router.push({ name: "home" });
};
</script>

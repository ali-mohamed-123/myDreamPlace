<template>
  <HeaderView :isHotelsHeader="active" />
  <div class="mx-[50px]">
    <router-view />
  </div>
  <footerView />
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import HeaderView from "../components/header.vue";
import footerView from "../components/footer.vue";
const route = useRoute();
const active = ref(route.fullPath.includes("list") ? true : false);
</script>

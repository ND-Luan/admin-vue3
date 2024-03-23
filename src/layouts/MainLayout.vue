<template>
  <v-layout>
    <SlideBar></SlideBar>
    <Appbar></Appbar>
    <v-main class="app-main">
      <router-view :key="key"></router-view>
    </v-main>
  </v-layout>
</template>
<script setup>
import { computed } from "vue";
import Appbar from "./Appbar.vue";
import SlideBar from "./SlideBar.vue";
import { useAppStore } from "../stores/AppStore";
import { useRoute } from "vue-router";
const store = useAppStore();
const route = useRoute();

let key = computed(() => route.path);
</script>
<style lang="css" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

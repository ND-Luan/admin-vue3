<template>
  <v-app>
   
    <MainLayout></MainLayout>
  </v-app>
</template>

<script setup>
import { useAppStore } from "./stores/AppStore";
import MainLayout from "./layouts/MainLayout.vue";
// import { RouterLink, RouterView } from "vue-router";
const counter = useAppStore();
// or using an action instead
</script>

<template>
  <v-app>
    <router-view></router-view>
    <MainLayout></MainLayout>
  </v-app>
</template>
<script setup>
import MainLayout from "./layouts/MainLayout.vue";
</script>

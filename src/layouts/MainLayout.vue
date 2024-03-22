<template>
  <v-layout v-if="store.isLogin">
    <SlideBar></SlideBar>
    <Appbar></Appbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
  <v-layout v-else>
    <LoginPage></LoginPage>
  </v-layout>
</template>
<script setup>
import Appbar from "./Appbar.vue";
import SlideBar from "./SlideBar.vue";
import { LoginPage } from "../pages";
import { useAppStore } from "../stores/AppStore";
const store = useAppStore();


</script>
<style lang=""></style>

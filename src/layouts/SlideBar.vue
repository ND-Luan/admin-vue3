<template lang="">
  <v-navigation-drawer :rail="store.isCollapse" rail-width="60">
    <div class=" flex items-center">
      <v-img
        src="https://cdn.fui.vn/filedata/iot-eorder/zen-tea-logo.jpg"
        width="100"
        contain
      ></v-img>
    </div>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <router-link to="/home">
        <v-list-item
          prepend-icon="mdi-folder"
          title="Home"
          value="home"
        ></v-list-item>
      </router-link>
      <router-link to="/about">
        <v-list-item
          prepend-icon="mdi-folder"
          title="About"
          value="about"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { useAppStore } from "../stores/AppStore";
const store = useAppStore();
</script>
<style lang=""></style>

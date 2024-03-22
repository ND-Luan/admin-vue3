<template lang="">
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-btn icon small @click="store.isCollapse = !store.isCollapse">
        <v-icon>mdi-arrow-collapse-left</v-icon>
      </v-btn>
    </template>
    <v-app-bar-title>Application Bar</v-app-bar-title>
  </v-app-bar>
</template>
<script setup>
import { useAppStore } from "../stores/AppStore";
const store = useAppStore();
</script>
<style lang=""></style>

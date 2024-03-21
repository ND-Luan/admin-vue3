<template lang="">
  <div>
    <SlideBar></SlideBar>
    <Appbar></Appbar>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </div>
</template>
<script>
import Appbar from "./Appbar.vue";
import SlideBar from "./SlideBar.vue";
export default {
  components: {
    Appbar,
    SlideBar,
  },
};
</script>
<style lang=""></style>

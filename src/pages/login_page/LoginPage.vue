<template lang="">
  <div class="h-screen w-screen flex items-center justify-center">
    <v-card width="400">
      <v-card-title>Đăng nhập</v-card-title>
      <v-card-text>
        <v-text-field label="Tài khoản"></v-text-field>
        <v-text-field label="Mật khẩu"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="handleLogin">Đăng nhập</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script async setup>
import { useAppStore } from "../../stores/AppStore";
import { useRouter } from "vue-router";
const store = useAppStore();
const router = useRouter();
const handleLogin = () => {
  store.isLogin = true;
  router.replace("/home");
};
</script>
<style lang=""></style>

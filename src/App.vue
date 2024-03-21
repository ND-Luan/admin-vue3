<template>
  <v-app>
    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          subtitle="john@google.com"
          title="John Leider"
        >
          <template v-slot:append>
            <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-list :lines="false" density="compact" nav>
        <RouterLink to="/">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-folder"></v-icon>
            </template>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </RouterLink>
        <RouterLink to="/about">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-folder"></v-icon>
            </template>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <RouterView></RouterView>
    </v-main> -->
    <v-container>
      <v-row>
        <v-col>
          <router-link to="/" replace>Home</router-link>
          <router-link to="/about" replace>about</router-link>
        </v-col>
        <v-col>
          <v-btn @click="counter.increment()">{{ counter }}</v-btn>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { useCounterStore } from "./stores/AppStore";
// import { RouterLink, RouterView } from "vue-router";
const counter = useCounterStore();
// or using an action instead
</script>

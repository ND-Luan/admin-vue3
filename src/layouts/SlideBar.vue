<template lang="">
  <v-navigation-drawer>
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

    <v-list :lines="false" density="compact" nav three-line>
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
</template>
<script>
export default {};
</script>
<style lang=""></style>

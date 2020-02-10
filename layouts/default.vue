<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-spacer></v-spacer>
      <v-btn text icon @click="$vuetify.theme.dark=!$vuetify.theme.dark">
        <v-icon>brightness_2</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      };
    }
  };
</script>

<template>
  <v-app-bar color="primary">
    <v-col cols="1">
      <v-img contain src="../assets/img/logo.jpg"></v-img>
    </v-col>
    <v-col cols="4">
        <div class="display-1 white--text">Sedatram</div>
    </v-col>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header"
});
</script>
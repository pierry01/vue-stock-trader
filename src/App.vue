<template>
  <v-app>
    <Header />

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  components: { Header },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

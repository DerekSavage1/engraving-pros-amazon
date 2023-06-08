<template>
  <div id="app">
    <MobileNavigation class="fixed-top" />
    <MobileFooter class="fixed-bot" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MobileFooter from "./components/MobileFooter.vue";
import MobileNavigation from "./components/MobileNavigation.vue";

@Options({
  components: {
    MobileFooter,
    MobileNavigation,
  },
})
export default class App extends Vue {}
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div id="app">
    <MobileNavigation class="fixed-top" />
    <MobileCTA></MobileCTA>
    <MobileFooter class="fixed-bot" color="var(--secondary-200)" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MobileFooter from "./components/MobileFooter.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import MobileCTA from "./components/MobileCTA.vue";

@Options({
  components: {
    MobileFooter,
    MobileNavigation,
    MobileCTA,
  },
})
export default class App extends Vue {}
</script>

<style>
body,
html {
  padding-top: 48px;
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

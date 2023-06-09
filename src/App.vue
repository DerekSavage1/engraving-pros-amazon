<template>
  <div id="app">
    <MobileNavigation class="fixed-top" />
    <div class="mobileContent">
      <MobileCTA></MobileCTA>
      <review-card></review-card>
      <review-card></review-card>
      <review-card></review-card>
      <mobile-contact-us></mobile-contact-us>
    </div>
  </div>
  <MobileFooter class="fixed-bot" color="var(--secondary-200)" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MobileFooter from "./components/MobileFooter.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import MobileCTA from "./components/MobileCTA.vue";
import ReviewCard from "./components/ReviewCard.vue";
import MobileContactUs from "./components/MobileContactUs.vue";

@Options({
  components: {
    MobileFooter,
    MobileNavigation,
    MobileCTA,
    ReviewCard,
    MobileContactUs,
  },
})
export default class App extends Vue {}
</script>

<style>
body,
html {
  padding: 0px;
  padding-top: 48px;
  margin: 0px;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mobileContent {
  display: flex;
  flex-direction: column;
  padding: 0px 16px 0px 16px;
  gap: 48px;
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>

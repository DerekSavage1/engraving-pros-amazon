<template>
  <div id="app">
    <MobileNavigation class="fixed-top" />
    <div class="content-wrapper">
      <div class="content">
        <MobileCTA></MobileCTA>
        <div class="review-cards">
          <review-card
            class="review-card"
            name="AZ Decaturga"
            review="Engraving Pros provided an excellent engraving services with utmost accuracy!!! They have variety of beautiful gift items - presentable, heirloom quality and well priced. Staff are friendly, courteous and extremely helpful..."
            date="May 2022"
          ></review-card>
          <review-card
            class="review-card"
            name="Debs D."
            review="I just became the coolest babysitter ever by giving a boy a personalized pocket knife. I had to call around to find a place and the team at Engraving Pros was great over the phone and in person. They were quick and did a fantastic job..."
            date="June 2022"
          ></review-card>
          <review-card
            class="review-card"
            name="Tim Mcavoy"
            review="Same day service. Great customer service. Fair pricing for excellent work. Highly recommend."
            date="October 2022"
          ></review-card>
        </div>
        <mobile-contact-us></mobile-contact-us>
      </div>
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

<style lang="scss">
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

/* phone */
.content {
  display: flex;
  flex-direction: column;
  padding: 64px 16px 64px 16px;
  gap: 48px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.review-card {
  flex: 1;
}

.review-cards {
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
}

/* tablet small */
@media (min-width: #{$tablet-small}) {
  .content {
    padding: 24px 32px 24px 32px;
    gap: 32px;
  }
}

/* tablet large */
@media (min-width: #{$tablet-large}) {
  .content {
    gap: 24px;
  }
  .content-wrapper {
    padding: 0;
    max-width: 1128px;
    margin: 0 auto; /* Add this line to center the content-wrapper */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

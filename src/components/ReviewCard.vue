<template>
  <div class="container M3-elevation-light">
    <div class="name web-H6">AZ Decaturga</div>
    <div class="stars">
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
    </div>
    <div class="mobile-paragraph-large">
      Engraving Pros provided an excellent engraving services with utmost
      accuracy!!! They have variety of beautiful gift items - presentable,
      heirloom quality and well priced. Staff are friendly, courteous and
      extremely helpful...
    </div>
    <div class="Date mobile-paragraph-small neutral-250">May 2022</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  gap: 10px;
  border-radius: 15px;
  background-color: white;
}

.stars {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
}
</style>

<script lang="ts">
import ReviewStar from "./ReviewStar.vue";

export default {
  name: "ReviewCard",
  components: {
    ReviewStar,
  },
};
</script>

<template>
  <div class="container M3-elevation-light">
    <div class="name web-H6">{{ name }}</div>
    <div class="stars">
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
    </div>
    <div class="mobile-paragraph-large">
      {{ review }}
    </div>
    <div class="Date mobile-paragraph-small neutral-250">{{ date }}</div>
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
  props: {
    name: String,
    review: String,
    date: String,
  },
};
</script>

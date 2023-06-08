<template>
  <div id="container">
    <div id="logo">
      <logo-selection
        width="214px"
        height="18px"
        color="var(--secondary-100)"
        condensed="false"
      />
    </div>
    <div class="navbar mobile-H6">
      <div>Home</div>
      <div>Pricing</div>
      <div>Samples</div>
    </div>
    <div class="navbar mobile-H6">
      <div>Fonts</div>
      <div>About</div>
    </div>
    <div class="line-segment"></div>
    <div class="copyright">
      © 2022 Engraving Pros. <br />
      All rights reserved.
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: var(--secondary-200);
  border-top: 5pt solid var(--primary-200);
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  gap: 10px;
  color: var(--secondary-100);
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: auto;
}

.navbar {
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;
  justify-content: center;
}

.line-segment {
  height: 3pt;
  background-color: var(--secondary-100);
  width: auto;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>

<script lang="ts">
import LogoSelection from "@/assets/LogoSelection.vue";
export default {
  components: {
    LogoSelection,
  },
};
</script>

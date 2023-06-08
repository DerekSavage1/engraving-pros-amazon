<template class="component">
  <div id="container">
    <div id="logo-hamburger-group">
      <LogoSelection
        width="220"
        height="68"
        color="var(--primary-200)"
        condensed="true"
      />
    </div>
    <div id="hamburger">
      <img src="@/assets/Hamburger.svg" />
    </div>
  </div>
</template>

<style scoped>
#container {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  height: 128px;
  width: auto;
  padding-left: 15px;
  padding-right: 15px;
}

#hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
}

#logo-hamburger-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
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

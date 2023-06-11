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

<style scoped lang="scss">
#container {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 124px;
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  gap: 10px;
  color: white;
  z-index: 9999;
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

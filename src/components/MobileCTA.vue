<template>
  <div class="container">
    <div class="CTA">
      <div class="web-display-small secondary-200">
        Done right. <br />Done quick.
      </div>
      <div class="web-display-large-semibold secondary-200">
        Come to <br />
        the Pros
      </div>
      <div class="button mobile-H6">Visit Us</div>
    </div>
    <div class="picture-with-frame">
      <div class="rectangle"></div>
      <div class="photo"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: auto;
  height: 760px;
}

.CTA {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: auto;
  height: 332px;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 110px;
  height: 44px;
  background-color: var(--secondary-200);
  color: white;
}

.picture-with-frame {
  position: relative;
  min-height: 300px;
  width: stretch;
}

.rectangle {
  height: stretch;
  left: 14px;
  position: absolute;
  top: 19px;
  transform: rotate(-4.68deg);
  width: stretch;
  background: var(--primary-200);
}

.photo {
  background-image: url(https://engravingpros.com/img/frame-1@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: stretch;
  left: 14px;
  position: absolute;
  top: 22px;
  width: stretch;
}
</style>

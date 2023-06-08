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
      <div class="button mobile-H6">Call Us</div>
    </div>
    <div class="picture-with-frame"><div class="rectangle"></div></div>
  </div>
</template>

<style scoped>
.container {
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 16px;
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
  width: auto;
  height: 404px;
}

.rectangle {
  height: 376px;
  width: 303px;

  left: 0%;
  right: 11.59%;
  top: 7.48%;
  bottom: -0.56%;

  /* Secondary/Secondary 200(Main) */

  background: var(--primary-200);
  transform: matrix(1, -0.1, 0.11, 0.99, 0, 0);
}
</style>

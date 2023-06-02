<template>
  <div id="container">
    <div id="logo">Engraving Pros</div>
    <div class="navbar">
      <div class="nav">hi</div>
      <div class="nav">hello</div>
      <div class="nav">hola</div>
    </div>
    <div class="navbar">
      <div class="nav">hello</div>
      <div class="nav">hola</div>
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
  background-color: grey;
  border-top: 5pt solid yellow;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  gap: 10px;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  height: 46px;
  width: auto;
}

.navbar {
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;
  justify-content: center;
}
.nav {
  background-color: aquamarine;
}

.line-segment {
  height: 3pt;
  background-color: black;
  width: auto;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>

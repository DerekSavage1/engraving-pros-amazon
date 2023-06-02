<template>
  <div id="app">
    <Homepage_Footer class="fixed-bot" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Homepage_Footer from "./components/Homepage_Footer.vue";

@Options({
  components: {
    HelloWorld,
    Homepage_Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fixed-bot {
  margin-top: auto;
}
</style>

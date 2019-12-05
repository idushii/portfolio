<template>
  <div id="app">
    <MyMenu />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MyMenu from "./components/MyMenu.vue";

@Component({
  components: {MyMenu}
})
export default class App extends Vue {
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      //@ts-ignore
      var instances = M.Sidenav.init(elems, {});
    });
  }
}
</script>

<style lang="scss">
.brand-logo {
  margin-left: 1rem;
}

#slide-out {
  padding-top: 2rem;
}
</style>

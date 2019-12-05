<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper indigo darken-1">
        <router-link to="/" class="brand-logo">ИП Ильинов Николай</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Портфолио</router-link>
          </li>
          <li>
            <router-link to="/About">Резюме</router-link>
          </li>
          <li>
            <router-link to="/Contacts">Контакты</router-link>
          </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
        <router-link to="/">Портфолио</router-link>
      </li>
      <li>
        <router-link to="/About">Резюме</router-link>
      </li>
      <li>
        <router-link to="/Contacts">Контакты</router-link>
      </li>
    </ul>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
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

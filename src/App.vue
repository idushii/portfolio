<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper indigo darken-1">
        <a href="#" class="brand-logo">ИП Ильинов Николай</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Портфолио</router-link>
          </li>
          <li>
            <router-link to="/about">Резюме</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
export default class App extends Vue {}
</script>

<style lang="scss">
.brand-logo {
  margin-left: 1rem;
}
</style>

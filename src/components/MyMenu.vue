<template>
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
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyMenu extends Vue {
  MenuInstance: any;
  mounted() {
    let MenuInstance = this.MenuInstance;
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      //@ts-ignore
      MenuInstance = M.Sidenav.init(elems, {});

      document.querySelectorAll(".sidenav a").forEach(link => {
        //@ts-ignore
        link.onclick = function() {
          if (link.classList.contains("router-link-active")) {
            MenuInstance[0].close();
          }
        };
      });
    });
  }
}
</script>

<style lang="scss" scoped>
</style>

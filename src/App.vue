<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">ИП Ильинов Николай</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Портфолио</router-link></li>
          <li><router-link to="/about">Резюме</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.brand-logo {
  margin-left: 1rem;
}
</style>

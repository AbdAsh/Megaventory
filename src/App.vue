<template>
  <nav
    class="navbar"
    style="display: flex; flex-direction: column; align-items: center"
  >
    <div class="navbar-brand">
      <router-link to="/">
        <img
          alt="Mega logo"
          src="https://www.reviewrumble.com/wp-content/uploads/2019/10/megaventory-logo.png"
        />
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/">Insert Product</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

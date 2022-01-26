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
        <router-link class="navbar-item" to="/products">Products</router-link>
        <router-link class="navbar-item" to="/clients">Clients</router-link>
        <router-link class="navbar-item" to="/discounts">Discounts</router-link>
        <router-link class="navbar-item" to="/taxes">Taxes</router-link>
        <router-link class="navbar-item" to="/inventories">
          Inventories
        </router-link>
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

.gg-spinner {
  margin: 0 50%;
  transform: scale(var(--ggs, 1));
}

.gg-spinner,
.gg-spinner::after,
.gg-spinner::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
}

.gg-spinner::after,
.gg-spinner::before {
  content: "";
  position: absolute;
  border-radius: 100px;
}

.gg-spinner::before {
  animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
  border: 3px solid transparent;
  border-top-color: currentColor;
}

.gg-spinner::after {
  border: 3px solid;
  opacity: 0.2;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>

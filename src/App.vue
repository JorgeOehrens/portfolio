<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">

      <HelloWorld msg="Jorge Oehrens" />

      <nav>
        <div class="grid grid-cols-4 gap-4 mt-10">

          <RouterLink to="/experiencia" class="text-center">Experiencia</RouterLink>
          <RouterLink to="/tecnologias" class="text-center">Tecnologías</RouterLink>
          <RouterLink to="/proyectos" class="text-center">Proyectos</RouterLink>
          <a href="https://www.jorgeoehrens.com/CV-JORGEOEHRENS.pdf" class="text-center" target="_blank">CV</a>

        </div>
        <div class="grid grid-cols-3 gap-3 mt-10 ">
          <div><a href="https://github.com/jorgeoehrens" target="_blank"><img alt="Git logo" class="logo p-2 " src="/git.svg" width="80" height="80" /> </a></div>
          <div><a href="https://www.linkedin.com/in/jorge-oehrens/" target="_blank"> <img alt="Linkedin logo" class="logo p-2" src="/linkedin.svg" width="80" height="80" /></a></div>
          <div><a href="https://wa.link/vc4z1l" target="_blank"><img alt="Whatssap logo" class="logo p-2" src="/wtsp.svg" width="80" height="80" /></a></div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <h3>
      Desarrollador de Software
    </h3>

  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.greetings{
  width: 100%;

}
.greetings h1,
.greetings h3 {
  text-align: center;

}

@media (min-width: 1024px) {
  .greetings h1{
    text-align: center;
    font-size: 4.5rem;


  }
  .greetings h3 {
    text-align: center;
    font-size: 2.5rem;

  }
}
</style>

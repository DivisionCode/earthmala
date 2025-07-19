<template>
  <div class="main">
    <nav >
      <RouterLink class="routerLink" to="/" >Home</RouterLink>
      <RouterLink class="routerLink" to="/products" >Products</RouterLink>
      <RouterLink class="routerLink" to="/about" >About</RouterLink>
    </nav>
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="css" scoped>
nav {
   display: flex;
   flex-direction:row;
   justify-content: center;
   text-align: center;
   gap: 10em;
   margin-top: 0.5em;
   margin-bottom: 0.5em;
   letter-spacing: 0.1em;
   font-weight: 300;
}
.routerLink {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-decoration: none;
  margin-right: 0.5em;
  margin-left: 0.5em;
  font-size: 1em;
  color: black;
}
.routerLink:hover {
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  letter-spacing: 0.25em;
}
</style>
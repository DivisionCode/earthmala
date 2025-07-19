<template>
  <div class="background-image-blur">
    <img class="blurred-img" src="../assets/bg.png">
  </div>
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
.background-image-blur {
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  overflow: hidden;
}
.blurred-img {
  width: 700px;      
  height: auto;
  filter: blur(1.5px);  
  object-fit: contain;
  opacity: 0.6;
}

nav {
   display: flex;
   flex-direction:row;
   justify-content: center;
   text-align: center;
   gap: 10em;
   margin-top: 0.5em;
   margin-bottom: 0.5em;
   letter-spacing: 0.1em;
   font-weight: 200;
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

@media (max-width: 768px) {
   .blurred-img {
    width: 90vw; 
    filter: blur(1px); 
  }

    nav {
    flex-direction: row;
    gap: 1em;
  }
}
</style>
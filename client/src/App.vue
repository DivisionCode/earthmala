<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- <nav class="flex gap-4 p-4 bg-white shadow">
      <RouterLink to="/" class="hover:underline">Home</RouterLink>
      <RouterLink to="/about" class="hover:underline">About</RouterLink>
      <RouterLink to="/products" class="hover:underline">Products</RouterLink>
    </nav> -->
    <router-view/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>


<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <nav class="flex gap-6 p-4 bg-white shadow-md">
      <RouterLink to="/" class="font-medium hover:text-indigo-600">Home</RouterLink>
      <RouterLink to="/products" class="font-medium hover:text-indigo-600">Products</RouterLink>
      <RouterLink to="/about" class="font-medium hover:text-indigo-600">About</RouterLink>
    </nav>
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
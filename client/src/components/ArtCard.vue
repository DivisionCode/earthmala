<template>
  <div class="bg-white shadow-md rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
    @click="$emit('view', {title , image, description, price})">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-indigo-700 mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
      <p class="text-green-600 font-semibold text-sm">{{ price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  price: [String, Number]
});
</script>
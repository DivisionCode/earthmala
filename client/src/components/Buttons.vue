<template>
  <button
    class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
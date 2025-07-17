<template>
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click.self="$emit('close')">
            <div class="bg-white max-w-md w-full rounded-xl shadow-xl p-6 relative">
            <button
                class="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                @click="$emit('close')"
            >
                ✕
            </button>
            <img :src="art.image" class="rounded mb-4 w-full h-60 object-cover" />
            <h2 class="text-xl font-bold text-indigo-700 mb-2">{{ art.title }}</h2>
            <p class="text-gray-700 mb-2">{{ art.description }}</p>
            <p class="text-green-600 font-semibold">₹{{ art.price }}</p>
            </div>
    </div>
</template>

<script setup>
defineProps ({
    art: Object,
});
</script>
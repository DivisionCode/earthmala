<template>
    <DefaultLayout>
    <h1 class="text-3xl font-bold text-indigo-700 mb-6">Mandala Gallery</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ArtCard
        v-for="(art, index) in artworks"
        :key="index"
        :title="art.title"
        :image="art.image"
        :description="art.description"
        :price="art.price"
        @view = "openModal"
      />
    </div>

    <ArtModal v-if="selectedArt" :art="selectedArt" @close="selectedArt = null" ></ArtModal>

    </DefaultLayout>

</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ArtCard from '@/components/ArtCard.vue';
import ArtModal from '../components/ArtModal.vue';
import { ref } from 'vue';

// Dummy Data (you can replace this later with real data from backend)
const artworks = [
  {
    title: 'Sacred Geometry 01',
    image: new URL('@/assets/vue.svg', import.meta.url).href,
    description: 'A vibrant mandala inspired by spiritual balance.',
    price: 120
  },
  {
    title: 'Dot Mandala Sunrise',
      image: new URL('@/assets/vue.svg', import.meta.url).href,
    description: 'Dot mandala representing energy and light.',
    price: 120
  },
  {
    title: 'Healing Circles',
      image: new URL('@/assets/vue.svg', import.meta.url).href,
    description: 'Designed to center the mind and soul.',
    price: 120
  },
  // Add more if you want
];

const selectedArt = ref(null);

function openModal(art) {
  selectedArt.value = art;
}
</script>
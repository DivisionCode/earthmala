<template>
  <DefaultLayout>
    <div class="product-page">
      <h1 class="heading">Category: {{ route.query.category }}</h1>

      <div v-if="store.loading" class="loading">Loading...</div>

      <div v-else-if="filteredArtworks.length === 0" class="empty">
        No artworks found for this category.
      </div>

      <div class="gallery">
        <div class="card" v-for="art in filteredArtworks" :key="art._id">
          <img :src="art.image" alt="Artwork Image" />
          <h2>{{ art.title }}</h2>
          <p>{{ art.description }}</p>
          <p class="price">₹{{ art.price }}</p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
// import ArtCard from '@/components/ArtCard.vue';
// import ArtModal from '../components/ArtModal.vue';
import { ref,computed, onMounted } from 'vue';
import { useArtworkStore } from '@/stores/artworkstore';

const selectedArt = ref(null);
const route = useRoute();
const store = useArtworkStore()

const category = computed(() => route.query.category?.toLowerCase());
console.log(category);

const filteredArtworks = computed(() => {
  if (!store.artworks) return []
  return store.artworks.filter(art => 
    art.category?.toLowerCase() === category.value
  );
})

onMounted(async () => {
  if(!store.artworks.length) {
  store.fetchArtworks()
  }
});

function openModal(art) {
  selectedArt.value = art;
}
</script>

<style lang="css" scoped>
div {
  justify-self: center;
  font-size: 1.5em;
  font-weight: 200;
  color: black;
  z-index: 1;
}
</style>
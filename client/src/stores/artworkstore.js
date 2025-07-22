import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useArtworkStore = defineStore('artworkStore', () => {
  const artworks = ref([]);
  const loading = ref(false);

  async function fetchArtworks() {
    if (artworks.value.length > 0) return; // 
    loading.value = true;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/artworks`);
      const data = await res.json();

      artworks.value = data;
    } catch (err) {
      console.error('Failed to fetch artworks:', err);
    } finally {
      loading.value = false;
    }
  }

  return { artworks, loading, fetchArtworks };
});
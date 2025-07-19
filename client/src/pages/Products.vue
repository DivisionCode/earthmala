<template>
    <DefaultLayout>
      <div>
        <p>
          Launching Soon ...
        </p>
      </div>
    <!-- <h1>Mandala Gallery</h1>

    <div>
      <ArtCard
        v-for="(art, index) in artworks"
        :key="index"
        v-bind="art"
        @view = "openModal"
      />
    </div>

    <ArtModal v-if="selectedArt" :art="selectedArt" @close="selectedArt = null" ></ArtModal> -->

    </DefaultLayout>

</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
// import ArtCard from '@/components/ArtCard.vue';
// import ArtModal from '../components/ArtModal.vue';
// import { ref, onMounted } from 'vue';

// const artworks = ref([]);
// const selectedArt = ref(null);

// onMounted(async () => {
//   try {
//     const res = await fetch(`${import.meta.env.VITE_API_URL}/api/artworks`);
//     const data = await res.json();

//     artworks.value = data.map(item => ({
//       _id: item._id,
//       ...item.artwork
//     }));
//   } catch(err) {
//     console.error('Failed to fetch artworks:', err);
//   }
// });

// function openModal(art) {
//   selectedArt.value = art;
// }
</script>

<style lang="css" scoped>
div {
  justify-self: center;
  font-size: 5em;
  font-weight: 200;
  color: black;
  z-index: 1;
}
</style>
<template>
  <section id="projects">
    <p class="section__text__p1">Look At My</p>
    <h1 class="title">Photo Gallery</h1>
    <PhotoCarousel />
  </section>
</template>

<script>
import PhotoCarousel from "./PhotoCarousel.vue";

export default {
  components: {
    PhotoCarousel,
  },
};
</script>

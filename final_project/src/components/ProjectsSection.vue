<template>
  <section id="projects">
    <p class="section__text__p1">Look At My</p>
    <h1 class="title">Photo Gallery</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <photo-carousel></photo-carousel>
          </div>
          <h2 class="experience-sub-title project-title">MY FAVORITE PICTURES</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoCarousel from './PhotoCarousel.vue'; // Assuming you have a PhotoCarousel component

export default {
  components: {
    PhotoCarousel
  }
}
</script>
<template>
  <div>
    <img :src="images[currentImage]" class="carousel-image" />
    <button @click="prevImage">❮</button>
    <button @click="nextImage">❯</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["@/assets/images/1.png", "@/assets/images/2.png"],
      currentImage: 0,
    };
  },
  methods: {
    prevImage() {
      this.currentImage = (this.currentImage + this.images.length - 1) % this.images.length;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
  },
};
</script>

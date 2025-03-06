<template>
  <section id="projects">
    <p class="section__text__p1">Look At My</p>
    <h1 class="title">Photo Gallery</h1>

    <div class="accordian">
      <ul>
        <li v-for="(image, index) in images" :key="index">
          <div class="image_title">
            <a href="#" @click.prevent="openImage(index)">{{ image.title }}</a>
          </div>
          <a href="#" @click.prevent="openImage(index)">
            <img :src="image.src" alt="Gallery Image" class="hover-effect"/>
          </a>
        </li>
      </ul>
    </div>

    <!-- Full-Screen Image Lightbox -->
    <div v-if="fullScreenImage !== null" class="full-screen-overlay">
      <span class="close-btn" @click="closeImage">×</span>
      <img :src="images[fullScreenImage].src" class="full-screen-img" />
      <button v-if="fullScreenImage > 0" class="prev-btn" @click="prevImage">‹</button>
      <button v-if="fullScreenImage < images.length - 1" class="next-btn" @click="nextImage">›</button>
    </div>
        <p class="gallery-description">
      Each of these photos holds a special memory—whether it's a breathtaking destination, a creative project, or a fun moment with friends. Explore and relive these cherished moments with me!
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullScreenImage: null,
      images: [
        { title: "Sagada", src: "/images/1.png" },
        { title: "Diorama", src: "/images/2.png" },
        { title: "Me", src: "/images/3.png" },
        { title: "Us Shocked", src: "/images/4.png" },
        { title: "BEE", src: "/images/5.png" }
      ]
    };
  },
  methods: {
    openImage(index) {
      this.fullScreenImage = index;
    },
    closeImage() {
      this.fullScreenImage = null;
    },
    prevImage() {
      if (this.fullScreenImage > 0) {
        this.fullScreenImage--;
      }
    },
    nextImage() {
      if (this.fullScreenImage < this.images.length - 1) {
        this.fullScreenImage++;
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Section Description */
.gallery-description {
  text-align: center;
  font-size: 18px;
  margin: 10px auto;
  max-width: 700px;
  color: #666;
}

/* Accordian Gallery */
.accordian {
  width: 95vw;
  max-width: 860px;
  height: auto;
  overflow-x: auto;
  margin: 20px auto;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
  white-space: nowrap;
}

.accordian ul {
  width: auto;
  display: inline-block;
}

.accordian li {
  position: relative;
  display: inline-block;
  width: 160px;
  border-left: 1px solid #888;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
}

.accordian ul:hover li {
  width: 40px;
}

.accordian ul li:hover {
  width: 640px;
}

.accordian li img {
  display: block;
  transition: transform 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.05);
}

/* Image Title */
.image_title {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.image_title a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 20px;
  font-size: 16px;
}

/* Full-Screen Image Lightbox */
.full-screen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.full-screen-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}

/* Navigation Buttons */
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.prev-btn:hover,
.next-btn:hover {
  color: #ccc;
}
</style>

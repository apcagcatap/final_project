<template>
  <section id="projects">
    <p class="section__text__p1">Look At My</p>
    <h1 class="title">Photo Gallery</h1>

    <div class="accordian">
      <ul>
        <li v-for="(image, index) in images" :key="index">
          <div class="image_title">
            <a href="#">{{ image.title }}</a>
          </div>
          <a href="#" @click.prevent="openImage(image.src)">
            <img :src="image.src" alt="Movie Image" />
          </a>
        </li>
      </ul>
    </div>


    <div v-if="fullScreenImage" class="full-screen-overlay">
      <span class="close-btn" @click="closeImage">×</span>
      <img :src="fullScreenImage" class="full-screen-img" />
    </div>

            
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullScreenImage: null,
      images: [
        { title: "KungFu Panda", src: "http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" },
        { title: "Toy Story 2", src: "http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" },
        { title: "Wall-E", src: "http://thecodeplayer.com/uploads/media/00kih8g.jpg" },
        { title: "Up", src: "http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" },
        { title: "Cars 2", src: "http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" }
      ]
    };
  },
  methods: {
    openImage(src) {
      this.fullScreenImage = src;
    },
    closeImage() {
      this.fullScreenImage = null;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.accordian {
  width: 95vw;
  max-width: 860px;
  height: auto;
  overflow-x: auto; /* Enables horizontal scrollbar */
  overflow-y: hidden; /* disable vertical scrolling */
  margin: 20px auto;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
  white-space: nowrap; /* Prevents wrapping */
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

/* Reduce width of un-hovered elements */
.accordian ul:hover li {
  width: 40px;
}

.accordian ul li:hover {
  width: 640px;
}

.accordian li img {
  display: block;
}

.image_title {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 640px;
}

.image_title a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 20px;
  font-size: 16px;
}

/* Full-Screen Image Styles */
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
</style>

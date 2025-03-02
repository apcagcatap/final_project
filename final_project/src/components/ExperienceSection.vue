<template>
  <section id="experience">
    <br>
    <p class="section__text__p1">Explore More</p>
    <h1 class="title">Information About Me</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Hobbies and Interests</h2>
          <div class="article-container">
            <article v-for="(hobby, index) in hobbies" :key="index">
              <img :src="hobby.image" alt="Experience icon" class="icon" />
              <div>
                <h3>{{ hobby.title }}</h3>
                <p>{{ hobby.description }}</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">More Information</h2>
          <div class="article-container">
            <article v-for="(info, index) in moreInfo" :key="index">
              <div>
                <h3>{{ info.title }}</h3>
                <p>{{ info.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '@/assets/images/cam.png';
import img2 from '@/assets/images/vb.png';
import img3 from '@/assets/images/read.png';
import img4 from '@/assets/images/games.png';
import img5 from '@/assets/images/crafts.png';

export default {
  data() {
    return {
      hobbies: [
        { title: "Photography", description: "Nature, landscapes, portraits, etc...", image: img1 },
        { title: "Volleyball", description: "Bench Warmer or Waterboy", image: img2 },
        { title: "Reading", description: "Manhwas and Mangas", image: img3 },
        { title: "Computer Games", description: "ANY", image: img4 },
        { title: "Arts and Crafts", description: "Handmade Flowers, Letters, etc...", image: img5 },
      ],
      moreInfo: [
        { title: "IT Experience", description: "I had no prior experience with IT" },
        { title: "Goals", description: "My Goal is to be rich enough that no one from my family would work." },
        { title: "Dreams", description: "I dream of being able to donate to everyone and to have a big house for my family." },
      ],
    };
  },
};
</script>
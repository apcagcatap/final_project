<template>
  <section id="experience">
    <p class="section__text__p1">Explore More</p>
    <h1 class="title">Information About Me</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Hobbies and Interests</h2>
          <div class="article-container">
            <article v-for="hobby in hobbies" :key="hobby.name">
              <img :src="hobby.icon" class="icon" />
              <div>
                <h3>{{ hobby.name }}</h3>
                <p>{{ hobby.description }}</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">More Information</h2>
          <div class="article-container">
            <article v-for="info in moreInfo" :key="info.title">
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
export default {
  data() {
    return {
      hobbies: [
        { name: "Photography", description: "Nature, landscapes, portraits, etc...", icon: "@/assets/images/cam.png" },
        { name: "Volleyball", description: "Bench Warmer or Waterboy", icon: "@/assets/images/vb.png" },
        { name: "Reading", description: "Manhwas and Mangas", icon: "@/assets/images/read.png" },
        { name: "Computer Games", description: "ANY", icon: "@/assets/images/games.png" },
        { name: "Arts and Crafts", description: "Handmade Flowers, Letters, etc...", icon: "@/assets/images/crafts.png" },
      ],
      moreInfo: [
        { title: "IT Experience", description: "I had no prior experience with IT" },
        { title: "Goals", description: "My goal is to be rich enough that no one from my family would have to work." },
        { title: "Dreams", description: "I dream of being able to afford to donate to everyone and have a big house for my family." },
      ],
    };
  },
};
</script>

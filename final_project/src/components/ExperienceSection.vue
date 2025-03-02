<template>
  <section id="experience">
    <p class="section__text__p1">Explore More</p>
    <h1 class="title">Information About Me</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Hobbies and Interests</h2>
          <div class="article-container">
            <article v-for="hobby in hobbies" :key="hobby.title">
              <img :src="hobby.icon" alt="Experience icon" class="icon" />
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

      ],
      moreInfo: [
        { title: 'IT Experience', description: 'I had no prior experience with IT' },
        { title: 'Goals', description: 'My Goal is To be rich enough that no one from my family would work.' },
        { title: 'Dreams', description: 'There is one dream that I will never let go, that is to be able to afford to give to donate to everyone. (and to have a big house for my family)' }
      ]
    }
  }
}
</script>
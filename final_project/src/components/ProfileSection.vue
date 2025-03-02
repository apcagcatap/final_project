<template>
  <section id="profile">
    <div class="section__pic-container">
      <img src="@/assets/images/profile.png" alt="Antonne Miguelle Catap" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">Antonne Miguelle Catap</h1>
      <p class="section__text__p2">An Aspiring Software Developer</p>
      <p class="section__text__p3">from BSCS - SS231</p>
      <div id="socials-container">
        <img src="@/assets/images/linkedin.png" class="icon" @click="goTo('linkedin')" />
        <img src="@/assets/images/github.png" class="icon" @click="goTo('github')" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goTo(platform) {
      const urls = {
        linkedin: "https://www.linkedin.com/in/antonne-miguelle-catap-4a5946288/",
        github: "https://github.com/apcagcatap",
      };
      window.open(urls[platform], "_blank");
    },
  },
};
</script>

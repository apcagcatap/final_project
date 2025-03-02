<template>
  <section id="profile">
    <div class="section__pic-container">
      <img src="@/assets/images/skating.png" alt="ANTONNE MIGUELLE CATAP's profile picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">Antonne Miguelle Catap</h1>
      <p class="section__text__p2">An Aspiring Software Developer</p>
      <p class="section__text__p3">from BSCS - SS231</p>
      <div id="socials-container">
        <img
          src="@/assets/images/linkedin.png"
          alt="My LinkedIn profile"
          class="icon"
          @click="openLink('https://www.linkedin.com/in/antonne-miguelle-catap-4a5946288/')"
        />
        <img
          src="@/assets/images/github.png"
          alt="My Github profile"
          class="icon"
          @click="openLink('https://github.com/apcagcatap')"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openLink(url) {
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
/* Add styles if necessary */
</style>

<template>
  <section id="profile">
    <div class="section__pic-container">
      <img
      src="/images/skating.png" alt="ANTONNE MIGUELLE CATAP's profile picture">
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">Antonne Miguelle Catap</h1>
      <p class="section__text__p2">An Aspiring Software Developer</p>
      <p class="section__text__p3">from BSCS - SS231</p>
      <div id="socials-container">
        <img
        src="/images/linkedin.png"
        class="icon"
        @click="goToLinkedIn"
        >
        <img
        src="/images/github.png"
        class="icon"
        @click="goToLinkedIn"
        >
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style>

</style>
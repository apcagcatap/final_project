<template>
  <section id="profile">
    <div class="section__pic-container">
      <img
      src="/images/skating.png">
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
#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
}

.section__text__p2 {
  font-size: 1.75rem;
}

.section__text__p3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}
</style>
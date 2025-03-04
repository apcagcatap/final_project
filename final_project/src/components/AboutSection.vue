<template>
  <section id="about">
    <p class="section__text__p1">Let Me Introduce</p>
    <h1 class="title">Myself</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img
          src="/images/logo.png"
          class="about-pic">
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src="/images/achieve.png"
              alt="Experience icon"
              class="icon">
            <h3>Achievements</h3>
            <p>
              Graduated Senior highschool with honors in 2022-2023<br />
              Moved up from 1st year to 2nd year college with honors in 2023-2024
            </p>
          </div>
          <div class="details-container">
              <img
                src="/images/educ.png"
                alt="Education icon"
                class="icon">
            <h3>Education</h3>
            <p>
              South Mansfield College<br />
              Southernside Montessori School<br />
              Muntinlupa Science Highschool<br />
              Asia Pacific College
            </p>
          </div>
        </div>

        <div class="text-container">
          <p>
            Hi, I’m Antonne Miguelle Catap, from BSCS-SS231. With a passion for innovation, I thrive on connecting
            ideas with people. When I’m not studying, you can find me capturing every moment with my camera.
            This site is a reflection of my journey, skills, and the things that inspire me. Let’s connect!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style>

#about {
  position: relative;
}

.about-containers {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.about-details-container {
  justify-content: center;
  flex-direction: column;
}

.about-containers,
.about-details-container {
  display: flex;
}

.about-pic {
  border-radius: 2rem;
}

.arrow {
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}

.section-container {
  gap: 4rem;
  height: 80%;
}

.section__pic-container {
  height: 400px;
  width: 400px;
  margin: auto 0;
}

</style>

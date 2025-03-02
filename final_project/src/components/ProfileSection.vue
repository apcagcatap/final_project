<template>
     <section id="profile">
      <div class="section__pic-container">
                <v-img
          src="./public/images/skating.png"
        ></v-img>
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Antonne Miguelle Catap</h1>
        <p class="section__text__p2">An Aspiring Software Developer</p>
        <p class="section__text__p3">from BSCS - SS231</p>
        <div id="socials-container">
          <v-img
          src="./public/images/linkedin.png"
            class="icon"
            @click="goToLinkedIn"
          />
          ></v-img>
          <v-img
          src="./public/images/github.png"
            class="icon"
            @click="goToLinkedIn"
          />
          ></v-img>
        </div>
      </div>
    </section>
</template>

<script>
</script>
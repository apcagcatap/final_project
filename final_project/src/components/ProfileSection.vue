<template>
     <section id="profile">
      <div class="section__pic-container">
        <img :src="require('@/components/images/skating.png')" alt="Antonne Miguelle Catap's profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Antonne Miguelle Catap</h1>
        <p class="section__text__p2">An Aspiring Software Developer</p>
        <p class="section__text__p3">from BSCS - SS231</p>
        <div id="socials-container">
          <img
            :src="linkedinImg"
            alt="My LinkedIn profile"
            class="icon"
            @click="goToLinkedIn"
          />
          <img
            :src="githubImg"
            alt="My Github profile"
            class="icon"
            @click="goToGitHub"
          />
        </div>
      </div>
    </section>
</template>

<script>
import linkedinImg from '@/components/images/linkedin.png';
import githubImg from '@/components/images/github.png';

export default {
  data() {
    return {
      linkedinImg,
      githubImg,
    };
  },
  methods: {
    goToLinkedIn() {
      window.location.href = 'https://www.linkedin.com/in/antonne-miguelle-catap-4a5946288/';
    },
    goToGitHub() {
      window.location.href = 'https://github.com/apcagcatap';
    },
  },
};
</script>
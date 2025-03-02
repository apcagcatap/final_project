<template>
  <nav>
    <div class="logo">Antonne Miguelle Catap</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Information</a></li>
      <li><a href="#projects">Photo Gallery</a></li>
      <li><a href="#contact">Comments</a></li>
    </ul>
    <div class="hamburger-menu">
      <div class="hamburger-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links" v-show="menuOpen">
        <li><a href="#about" @click="toggleMenu">About</a></li>
        <li><a href="#experience" @click="toggleMenu">Experience</a></li>
        <li><a href="#projects" @click="toggleMenu">Photo Gallery</a></li>
        <li><a href="#contact" @click="toggleMenu">Comments</a></li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

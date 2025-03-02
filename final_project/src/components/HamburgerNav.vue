<template>
  <nav id="hamburger-nav">
    <div class="logo">Antonne Miguelle Catap</div>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="hamburger-icon" :class="{ open: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links" :class="{ open: isMenuOpen }">
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
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
<template>
    <nav id="hamburger-nav">
      <div class="logo">Antonne Miguelle Catap</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Photo Gallery</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Comments</a></li>
      
        </div>
      </div>
    </nav>
</template>

<script>
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
</script>
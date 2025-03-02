<template>
  <div id="app">
    <desktop-nav />
    <hamburger-nav />
    <profile-section />
    <about-section />
    <experience-section />
    <projects-section />
    <contact-section />
    <footer-section />
  </div>
</template>

<script>
import DesktopNav from './components/DesktopNav.vue';
import HamburgerNav from './components/HamburgerNav.vue';
import ProfileSection from './components/ProfileSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    DesktopNav,
    HamburgerNav,
    ProfileSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>
@import './css/mystyle.css';
@import './css/mediaqueries.css';
</style>
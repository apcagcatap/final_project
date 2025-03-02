<template>
  <div id="app">
    <NavBar />
    <ProfileSection />
    <AboutSection />
    <ExperienceSection />
    <PhotoGallery />
    <ContactSection />
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ProfileSection from "./components/ProfileSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    NavBar,
    ProfileSection,
    AboutSection,
    ExperienceSection,
    PhotoGallery,
    ContactSection,
    FooterComponent,
  },
};
</script>


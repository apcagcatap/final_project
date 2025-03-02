import { createApp } from 'vue'

import App from './App.vue'
import NavBar from "./components/NavBar.vue";
import ProfileSection from "./components/ProfileSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

const app = createApp(App)

app.component('NavBar', NavBar)
app.component('ProfileSection', ProfileSection)
app.component('AboutSection', AboutSection)
app.component('ExperienceSection', ExperienceSection)
app.component('PhotoGallery', PhotoGallery)
app.component('ContactSection', ContactSection)
app.component('FooterComponent', FooterComponent)

app.mount('#app')
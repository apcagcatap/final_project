import { createApp } from 'vue'

import App from './App.vue'
import Preloader from './components/Preloader.vue';
import DesktopNav from './components/DesktopNav.vue';
import HamburgerNav from './components/HamburgerNav.vue';
import ProfileSection from './components/ProfileSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

const app = createApp(App)

app.component('DesktopNav', DesktopNav)
app.component('Preloader', Preloader)
app.component('HamburgerNav', HamburgerNav)
app.component('ProfileSection', ProfileSection)
app.component('AboutSection', AboutSection)
app.component('ExperienceSection', ExperienceSection)
app.component('ProjectsSection', ProjectsSection)
app.component('ContactSection', ContactSection)
app.component('FooterSection', FooterSection)

app.mount('#app')
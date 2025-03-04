<template>
  <transition name="fade">
    <div v-if="showPreloader" class="preloader">
      <div class="logo"></div>
      <p>{{ words[index] }}</p>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];
const index = ref(0);
let timeoutId;
let removeTimeout;
const showPreloader = ref(true);

onMounted(() => {
  scheduleNextWord();
  removeTimeout = setTimeout(() => {
    showPreloader.value = false;
  }, 2000);
});

onUnmounted(() => {
  clearTimeout(timeoutId);
  clearTimeout(removeTimeout);
});

const scheduleNextWord = () => {
  if (index.value === words.length - 1) {
    index.value = 0;
  }
  timeoutId = setTimeout(() => {
    index.value++;
    scheduleNextWord();
  }, 200);
};
</script>

<style scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: gray;
  z-index: 9999;
}

.preloader p {
  font: 600 1.5rem 'Your Font 2';
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
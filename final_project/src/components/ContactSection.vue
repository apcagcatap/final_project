<template>
  <div class="feedback-page">
    <div class="feedback-container">
      <div class="feedback-content">
        <div class="feedback-form">
          <h2>Hopefully you like this simple webpage of mine ^^</h2>
          <h2>If you do not mind, I would like to know your name!</h2>
          <form @submit.prevent="submitFeedback">
            <label>
              Name:
              <input v-model="name" type="text" required />
            </label>

            <label>
              Section:
              <input v-model="section" type="text" required />
            </label>

            <label>
              Message (Optional):
              <textarea v-model="message"></textarea>
            </label>

            <button type="submit" :disabled="loading">
              {{ loading ? "Submitting..." : "Submit" }}
            </button>
          </form>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </div>
        <div class="feedback-image">
          <img :src="imageUrl" alt="Feedback Illustration" />
        </div>
      </div>

      <!-- Honorable Mentions Section -->
      <div class="mentions-container">
        <div class="mentions-title">Honorable Mentions :0</div>
        <div class="mentions-subtitle">Thank you for the support!!!</div>
        
        <div v-if="review_form.length === 0" class="no-mentions">
          No mentions yet. Be the first to leave your mark!
        </div>

        <div v-for="(mention, index) in review_form" :key="index" class="mention-card">
          <div class="mention-header">
            <div class="mention-name">{{ mention.name }}</div>
            <div class="mention-section">{{ mention.section }}</div>
          </div>
          <div v-if="mention.message" class="mention-message">{{ mention.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global Font */
* {
  font-family: 'Jersey 10', sans-serif;
  box-sizing: border-box;
}

/* Background */
.feedback-page {
  margin: 0;
  min-height: 100vh;
  background: url('/images/grid.png') center/cover fixed no-repeat;
  padding: 20px;
  box-sizing: border-box;
}

.feedback-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.feedback-content {
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 450px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.feedback-form {
  width: 70%;
  z-index: 2;
}

.feedback-form h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #340B3C;
}

.feedback-image {
  position: absolute;
  bottom: 0;
  right: 1.5rem;
  width: 25%;
  z-index: 1;
}

.feedback-image img {
  width: 90%;
  height: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 2rem;
  color: #6B2855;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  font-size: 1em;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  width: 162px;
  padding: 12px 24px;
  background: #DB99C7;
  color: #6B2855;
  border: none;
  border-radius: 10px;
  font-size: 2em;
  cursor: pointer;
  transition: 0.3s;
}

button:hover:not(:disabled) {
  background: #6B2855;
  color: white;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Honorable Mentions Section */
.mentions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.mentions-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #663366;
}

.mentions-subtitle {
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  color: #9b549b;
  margin-bottom: 15px;
}

.no-mentions {
  text-align: center;
  font-size: 1.2em;
  color: gray;
}

/* Individual Mention Cards */
.mention-card {
  width: 100%;
  max-width: 100%;
  padding: 12px;
  background: white;
  border-left: 6px solid #721884;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 5px;
  word-wrap: break-word;
}

.mention-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5rem;
  color: #663366;
}

.mention-name {
  color: #9374C0;
}

.mention-section {
  color: #7C4D9E;
  font-style: italic;
}

.mention-message {
  font-size: 1rem;
  color: #333;
  padding: 5px 0;
  border-top: 1px solid #e6e6e6;
  margin-top: 5px;
  font-style: italic;
}

.success-message {
  color: #97347a;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
}
</style>

<script setup>
import { ref } from 'vue'

const name = ref('')
const section = ref('')
const message = ref('')
const loading = ref(false)
const successMessage = ref('')
const review_form = ref([])
const imageUrl = '/images/feedback.png'

const submitFeedback = () => {
  loading.value = true

  setTimeout(() => {
    review_form.value.push({
      name: name.value,
      section: section.value,
      message: message.value
    })

    successMessage.value = 'Thank you for your feedback!'
    name.value = ''
    section.value = ''
    message.value = ''
    loading.value = false
  }, 1000)
}
</script>
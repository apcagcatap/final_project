<template>
      <section id="feedback" class="feedback-section">
      <p class="section__text__p1">Do You Have Any</p>
      <h1 class="title">Comments?</h1>
      <div class="feedback-container">
        <div class="feedback-columns">
          <div class="feedback-input-column">
            <h2>Give Us Your Feedback</h2>
            <form @submit.prevent="submitFeedback" class="feedback-form">
              <label for="name">Your Name:</label>
              <input
                type="text"
                id="name"
                v-model="feedback.name"
                placeholder="Enter your name"
                class="feedback-input"
              />
              <label for="feedback">Your Feedback:</label>
              <textarea
                id="feedback"
                v-model="feedback.feedback"
                placeholder="Enter your feedback"
                class="feedback-textarea"
              ></textarea>
              <button type="submit" class="feedback-button">Submit Feedback</button>
              <p v-if="successMessage" class="success-message">
                {{ successMessage }}
              </p>
              <p v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </p>
            </form>
          </div>
          <div class="feedback-output-column">
            <h3>User Feedback</h3>
            <div v-if="feedbacks.length" class="feedback-output">
              <div v-for="item in feedbacks" :key="item.id" class="feedback-item">
                <p><strong>{{ item.name }}:</strong> {{ item.feedback }}</p>
              </div>
            </div>
            <p v-else>No feedback yet.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { supabase } from '../lib/supabaseClient';
  
  export default {
    data() {
      return {
        feedback: {
          name: '',
          feedback: '',
        },
        successMessage: '',
        errorMessage: '',
        feedbacks: [],
      };
    },
    async mounted() {
      await this.getFeedbacks();
      this.subscribeToFeedbacks();
    },
    methods: {
      async submitFeedback() {
        try {
          const { error } = await supabase.from('feedbackform').insert([this.feedback]);
          if (error) {
            throw error;
          }
          this.successMessage = 'Feedback submitted successfully!';
          this.errorMessage = '';
          this.feedback = { name: '', feedback: '' };
          await this.getFeedbacks();
        } catch (error) {
          console.error('Error submitting feedback:', error, error.message, error.details);
          this.errorMessage = 'Error submitting feedback. Please try again.';
          this.successMessage = '';
        }
      },
      async getFeedbacks() {
        try {
          const { data, error } = await supabase
            .from('feedbackform')
            .select('*')
            .order('id', { ascending: false });
          if (error) {
            throw error;
          }
          this.feedbacks = data;
        } catch (error) {
          console.error('Error fetching feedbacks:', error, error.message, error.details);
        }
      },
      subscribeToFeedbacks() {
        supabase
          .channel('any')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'feedbackform' }, async (payload) => {
            await this.getFeedbacks();
          })
          .subscribe();
      },
    },
  };
  </script>
  
  <style scoped>
  .feedback-section {
    padding: 80px 20px;
    background-color: white;
    text-align: center;
  }
  
  .feedback-container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
  }
  
  .feedback-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  .feedback-input-column,
  .feedback-output-column {
    text-align: left;
  }
  
  .feedback-form {
    display: flex;
    flex-direction: column;
  }
  
  .feedback-form label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .feedback-input,
  .feedback-textarea,
  .feedback-button {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 20px;
    border: 1px solid #2b2b2b;
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  
  .feedback-textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  .feedback-button {
    background-color: #007bff;
    color: rgb(222, 222, 222);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .feedback-button:hover {
    background-color: #0a5bb1;
  }
  
  .success-message,
  .error-message {
    margin-top: 10px;
    font-weight: 500;
  }
  
  .success-message {
    color: green;
  }
  
  .error-message {
    color: red;
  }
  
  .feedback-output {
    margin-top: 20px;
  }
  
.feedback-item {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 8px rgba(3, 3, 3, 0.1);
  margin-bottom: 15px;
  outline: 2px solid black;
}
  
  /* Responsive adjustments */
  @media (max-width: 900px) {
    .feedback-columns {
      grid-template-columns: 1fr;
    }
  }
  </style>
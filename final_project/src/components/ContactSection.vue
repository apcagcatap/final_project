<template>
    </section>
    <section id="contact">
      <p class="section__text__p1">Do You Have Any</p>
      <h1 class="title">Comments?</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <div id="app">
            <guestbook-form></guestbook-form>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
Vue.component('guestbook-form', {
    data: function() {
      return {
        name: '',
        email: '',
        message: '',
        entries: []
      };
    },
    methods: {
      submitForm: function() {
        if (this.name && this.email && this.message) {
          this.entries.push({ name: this.name, email: this.email, message: this.message });
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          alert('Please fill in all fields.');
        }
      }
    },
    template: `
      <div class="form-container">
        <h3>Guestbook / Survey / Comments</h3>
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required><br><br>

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required><br><br>

          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea><br><br>

          <button type="submit">Submit</button>
        </form>

        <h4>Guestbook Entries</h4>
        <ul>
          <li v-for="(entry, index) in entries" :key="index">
            <strong>{{ entry.name }} ({{ entry.email }})</strong><br>
            <p>{{ entry.message }}</p>
          </li>
        </ul>
      </div>
    `
  });

  // Vue instance
  new Vue({
    el: '#app',
  });
</script>
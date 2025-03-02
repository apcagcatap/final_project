<template>
  <div class="guestbook-form">
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <textarea v-model="comment" placeholder="Your Comment" required></textarea>
      <button type="submit">Submit</button>
    </form>
    <div class="comments-section">
      <h3>Comments</h3>
      <ul>
        <li v-for="(entry, index) in comments" :key="index">
          <strong>{{ entry.name }}</strong>: {{ entry.comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      comments: [],
    };
  },
  methods: {
    submitComment() {
      if (this.name && this.comment) {
        this.comments.push({ name: this.name, comment: this.comment });
        this.name = "";
        this.comment = "";
      }
    },
  },
};
</script>

<style scoped>
.guestbook-form {
  text-align: center;
  max-width: 500px;
  margin: auto;
}

input,
textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}

.comments-section {
  margin-top: 20px;
  text-align: left;
}

.comments-section ul {
  list-style: none;
  padding: 0;
}
</style>

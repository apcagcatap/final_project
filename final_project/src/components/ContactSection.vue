<template>
  <section id="contact">
    <p class="section__text__p1">Do You Have Any</p>
    <h1 class="title">Comments?</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <guestbook-form></guestbook-form>
      </div>
    </div>
  </section>
</template>

<script>
import GuestbookForm from './GuestbookForm.vue'; // Assuming you have a GuestbookForm component

export default {
  components: {
    GuestbookForm
  }
}
</script>
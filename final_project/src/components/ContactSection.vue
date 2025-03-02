<template>
  <section id="contact">
    <p class="section__text__p1">Do You Have Any</p>
    <h1 class="title">Comments?</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <GuestbookForm />
      </div>
    </div>
  </section>
</template>

<script>
import GuestbookForm from "@/components/GuestbookForm.vue";

export default {
  components: {
    GuestbookForm,
  },
};
</script>

<style scoped>
/* Add any specific styles for the contact section */
</style>

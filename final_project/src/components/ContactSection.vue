<script setup>
import { ref, onMounted } from '.lib/supabaseClient'
import { supabase } from '.lib/supabaseClient'

const review_form = ref([])

async function getreview_form() {
  const { data, error } = await supabase.from('review_form').select()
  if (error) {
    console.error('Error fetching review_form:', error)
    return;
  }
  review_form.value = data;
  console.log("Supabase data:", data);
  console.log("review_form.value:", review_form.value);
}

onMounted(() => {
  getreview_form()
})
</script>

<template>
  <ul>
    <li v-for="review in review_form" :key="review.id">{{ review.name }}</li>
  </ul>
</template>
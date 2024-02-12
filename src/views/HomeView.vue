<script setup lang="ts">
import ButtonVue from '@/components/Button.vue';
import DropdownVue from '@/components/Dropdown.vue';
import ResponsesVue from '@/components/Responses.vue';
</script>

<template>
  <main class="container d-flex justify-content-center flex-column gap-3">
    <section class="card">
      <div class="w-auto card-body d-flex gap-2 justify-content-center flex-wrap">
        <DropdownVue />
        <ButtonVue />
      </div>
    </section>
    <section class="d-flex gap-2 justify-content-center">
      <ResponsesVue />
    </section>
  </main>
</template>

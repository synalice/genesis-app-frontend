<script setup lang="ts">
import ButtonVue from '@/components/Button.vue';
import DropdownVue from '@/components/Dropdown.vue';
</script>

<template>
  <main>
    Привет, Мир!
    <div class="d-flex gap-2">
      <DropdownVue />
      <ButtonVue />
    </div>
  </main>
</template>

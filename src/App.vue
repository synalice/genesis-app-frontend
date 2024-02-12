<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="container d-flex justify-content-center my-3 text-center">
    <div class="card">
      <h3 class="card-body">
        Тестовое задание к вакансии Full stack JS-developer (Генезис)
      </h3>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.container {
  max-width: 720px;
}
</style>
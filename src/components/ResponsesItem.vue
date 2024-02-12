<script setup lang="ts">
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">
        <slot name="entityName"></slot>
      </div>
      <slot name="id"></slot>
    </div>
  </li>
</template>
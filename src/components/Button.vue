<script setup lang="ts">
import { useDropdownEntities } from '@/stores/dropdown-entities';
import { storeToRefs } from 'pinia';

const { selectedEntity } = storeToRefs(useDropdownEntities())
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
    :disabled="selectedEntity.hideButton"
  >
    Создать
  </button>
</template>
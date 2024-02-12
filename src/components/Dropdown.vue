<script setup lang="ts">
import { useDropdownEntities } from '@/stores/dropdown-entities';
import { storeToRefs } from 'pinia';

const { entities, selectedEntity } = storeToRefs(useDropdownEntities())
</script>

<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
    >
      {{ selectedEntity.name }}
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="entity in entities"
        @click="selectedEntity=entity"
        class="dropdown-item"
      >
        {{ entity.name }}
      </li>
    </ul>
  </div>
</template>

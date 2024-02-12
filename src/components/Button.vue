<script setup lang="ts">
import { useDropdownEntities } from '@/stores/dropdown-entities';
import { storeToRefs } from 'pinia';
import { inject } from 'vue';

const { selectedEntity } = storeToRefs(useDropdownEntities())

async function createEntity() {
  const apiBaseUrl: string | undefined = inject('apiBaseUrl')

  if (apiBaseUrl === undefined || selectedEntity.value.apiRoute === undefined) {
    console.error("API route is undefined!");
    return
  }

  const res = await fetch(apiBaseUrl + selectedEntity.value.apiRoute, {
    method: "POST"
  })
}
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
    :disabled="selectedEntity.hideButton"
    @click="createEntity()"
  >
    Создать
  </button>
</template>
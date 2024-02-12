<script setup lang="ts">
import { useDropdownEntities } from '@/stores/dropdown-entities';
import { useResponses } from '@/stores/responses';
import { storeToRefs } from 'pinia';
import { inject, ref } from 'vue';

const { selectedEntity } = storeToRefs(useDropdownEntities())
const { responses } = storeToRefs(useResponses())

const apiBaseUrl: string | undefined = inject('apiBaseUrl')
const loading = ref(false)

async function createEntity() {
  if (apiBaseUrl === undefined || selectedEntity.value.apiRoute === undefined) {
    console.error("API route is undefined!");
    console.info("apiBaseUrl:", apiBaseUrl)
    console.info("apiRoute:", selectedEntity.value.apiRoute)
    return
  }

  loading.value = true
  const res = await fetch(apiBaseUrl + selectedEntity.value.apiRoute, {
    method: "POST"
  })
  loading.value = false

  if (!res.ok) {
    console.error("Error while calling the server! Status:", res.status);
    return
  }

  const responseJSON = await res.json()

  responses.value.push({
    entityName: selectedEntity.value.name,
    id: responseJSON.id
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
    <span v-if="loading"
      class="spinner-border spinner-border-sm"
      aria-hidden="true"
    ></span>
    <template v-else>
      Создать
    </template>
  </button>
</template>
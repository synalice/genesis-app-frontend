<script setup lang="ts">
import { useResponses } from '@/stores/responses';
import { storeToRefs } from 'pinia';
import ResponsesItemVue from './ResponsesItem.vue';
import ResponsesEmptyItemVue from './ResponsesEmptyItem.vue';

const { responses } = storeToRefs(useResponses())
</script>

<template>
  <ol
    class="list-group w-100"
    :class="{ 'list-group-numbered': responses.length !== 0 }"
  >
    <ResponsesEmptyItemVue v-if="responses.length === 0" />
    <template v-else>
      <ResponsesItemVue v-for="response in responses">
        <template #entityName>
          {{ response.entityName }}
        </template>
        <template #id>
          ID: {{ response.id }}
        </template>
      </ResponsesItemVue>
    </template>
  </ol>
</template>

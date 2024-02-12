<script setup lang="ts">
import { useResponses } from '@/stores/responses';
import { storeToRefs } from 'pinia';

const { responses } = storeToRefs(useResponses())
</script>

<template>
  <div>
    <div v-if="responses.length === 0">
      Пусто
    </div>
    <template v-else>
      <div v-for="response in responses">
        {{ response }}
      </div>
    </template>
  </div>
</template>
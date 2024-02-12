import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface Response {
  entityName: string
  id: number
}

export const useResponses = defineStore('responses', () => {
  const responses: Ref<Response[]> = ref([])
  return { responses }
})

import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface DropdownEntity {
  name: string
  hideButton: boolean
}

export const useDropdownEntities = defineStore('dropdown-entities', () => {
  const entities: Ref<DropdownEntity[]> = ref([
    { name: 'Не выбрано', hideButton: true },
    { name: 'Сделка', hideButton: false },
    { name: 'Контакт', hideButton: false },
    { name: 'Компания', hideButton: false }
  ])

  const selectedEntity = ref(entities.value[0])

  return { entities, selectedEntity }
})

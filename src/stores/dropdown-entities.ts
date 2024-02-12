import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface DropdownEntity {
  name: string
  hideButton?: boolean
  apiRoute?: string
}

export const useDropdownEntities = defineStore('dropdown-entities', () => {
  const entities: Ref<DropdownEntity[]> = ref([
    { name: 'Не выбрано', hideButton: true },
    { name: 'Сделка', apiRoute: '/new-lead' },
    { name: 'Контакт', apiRoute: '/new-contact' },
    { name: 'Компания', apiRoute: '/new-company' }
  ])

  const selectedEntity = ref(entities.value[0])

  return { entities, selectedEntity }
})

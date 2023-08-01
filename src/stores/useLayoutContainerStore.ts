import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useLayoutContainerStore = defineStore('useLayoutContainerStore', () => {
  const containerState = reactive({
    isDesignMode: true,
    showNewCardDialog: false
  })
  const changeDesignMode = (b: boolean) => {
    containerState.isDesignMode = b
  }
  return {
    containerState,
    changeDesignMode
  }
})

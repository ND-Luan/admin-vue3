import { defineStore } from 'pinia'
export const useAppStore = defineStore('AppStore', {
    state: () => {
      return { count: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      increment() {
        this.count++
      },
    },
  })
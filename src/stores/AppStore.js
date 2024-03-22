import { defineStore } from 'pinia'
export const useAppStore = defineStore('AppStore', {
    state: () => {
      return { 
        isCollapse: false,
        isLogin: false
      }
    },
    actions: {
      checkToken: () => {
        return true 
      }
    },
  })
import { defineStore } from 'pinia';

export const useCadStore = defineStore('character', {
  state: () => {
    return {
      completeBody: {
        character: "",
        body: "",
        face: "",
        name: "",
      },
      items: [
        {label: 'Type',to: '/step1'},
        {label: 'Face',to: '/step1'},
        {label: 'Body',to: '/step1'},
      ]
    }
  }
})
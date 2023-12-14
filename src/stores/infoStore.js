import { defineStore } from 'pinia';

export const useCadStore = defineStore('character', {
  state: () => {
    return {
      completeBody: {
        body: "",
        face: "",
        legs: "",
        name: "",
      },
      items: [
        {label: 'Body',to: '/step1'},
        {label: 'Face',to: '/step2'},
        {label: 'Legs',to: '/step3'},
      ]
    }
  }
})
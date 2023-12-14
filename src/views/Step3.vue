<template>
  <div>
    <section>
      <div class="mb-20">
        <Steps :model="cadStore.items" :readonly="true" aria-label="Form Steps"/>
      </div>
      <nav class="flex justify-between items-center">
        <h1 class="text-xl text-slate-600 font-bold">Select your leg's pet</h1>
        <button @click="checkStatus" :class="{'uiDisabled': !isAvail}" class="bg-amber-500 disabled:bg-amber-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Next</button>
      </nav>
    </section>
    <section>
      <div class="grid grid-cols-3 mt-10 gap-4">
        <figure v-for="(item,index) in details" class="w-full">
          <div @click="selectItem(item) , !selectItem" :key="index" :class="{'border-amber-200 border-4 bg-amber-50': isSelected === item.legs}" class="hover:bg-amber-50 hover:border-amber-200 cursor-pointer py-10 border  text-center w-full rounded-lg">{{item.legs}}</div>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
import { useCadStore } from '../stores/infoStore'

export default {
  data() {
    return {
      isAvail: false,
      cadStore: useCadStore(),
      isSelected: null,
      details: [
        {legs:'Pollito', img:'this is an image'},
        {legs:'Perro', img:'this is an image'},
        {legs:'Gato', img:'this is an image'},
        {legs:'Ave', img:'this is an image'},
        {legs:'Oso', img:'this is an image'},
        {legs:'Pato', img:'this is an image'},
      ],
    }
  },
  methods: {
    checkStatus(e) {
      e.preventDefault();
      this.$router.push('/finalStep');
    },
    selectItem(item) {
      this.isSelected = item.legs
      this.isAvail = true;
      this.cadStore.completeBody.legs = item.legs
    }
  },
}
</script>
<template>
  <div>
    <section>
      <div class="mb-20">
        <Steps :activeStep="1" :model="cadStore.items" :readonly="false"/>
      </div>
      <nav class="flex justify-between items-center">
        <h1 class="text-xl text-slate-600 font-bold">Select your body's Pet</h1>
        <button @click="checkStatus" :class="{'uiDisabled': !isAvail}" class="bg-amber-500 disabled:bg-amber-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Next</button>
      </nav>
    </section>
    <section>
      <div class="grid grid-cols-3 mt-10 gap-4">
        <figure v-for="(item,index) in details" class="w-full">
          <div @click="selectItem(item)" :key="index" :class="{'border-amber-200 border-4 bg-amber-50': isSelected === item.body}" class="hover:bg-amber-50 hover:border-amber-200 cursor-pointer py-10 border  text-center w-full rounded-lg">{{item.body}}</div>
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
        {body:'Unicornio', img:'this is an image'},
        {body:'Dinosaur', img:'this is an image'},
        {body:'Mantis', img:'this is an image'},
        {body:'Capybara', img:'this is an image'},
        {body:'Spider', img:'this is an image'},
        {body:'Axolotl', img:'this is an image'},
      ],
    }
  },
  methods: {
    checkStatus(e) {
      e.preventDefault();
      this.$router.push('/step3');
    },
    selectItem(item) {
      this.isSelected = item.body
      this.isAvail = true;
      this.cadStore.completeBody.body = item.body
    }
  }
}
</script>
<template>
  <div>
    <section>
      <div class="mb-20">
        <Steps :model="cadStore.items" :readonly="true" aria-label="Form Steps"/>
      </div>
      <nav class="flex justify-between items-center">
        <h1 class="text-xl text-slate-600 font-bold">Select your pet Face</h1>
        <button @click="checkStatus" :class="{'uiDisabled': !isAvail}" class="bg-amber-500 disabled:bg-amber-500/50 px-10 py-1 rounded-lg text-lg font-semibold">Next</button>
      </nav>
    </section>
    <section>
      <div class="grid grid-cols-3 mt-10 gap-4">
        <figure v-for="(item,index) in details" class="w-full">
          <div @click="selectItem(item)" :key="index" :class="{'border-amber-200 border-4 bg-amber-50': isSelected === item.face}" class="hover:bg-amber-50 hover:border-amber-200 cursor-pointer py-10 border  text-center w-full rounded-lg">{{item.face}}</div>
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
        {face:'Pollito', img:'this is an image'},
        {face:'Perro', img:'this is an image'},
        {face:'Gato', img:'this is an image'},
        {face:'Ave', img:'this is an image'},
        {face:'Oso', img:'this is an image'},
        {face:'Pato', img:'this is an image'},
      ],
    }
  },
  methods: {
    checkStatus(e) {
      e.preventDefault();
      console.log('activated');
      this.$router.push('/step2');
    },
    selectItem(item) {
      this.isSelected = item.face
      this.isAvail = true;
      this.cadStore.completeBody.character = item.face
    }
  },
  components: {
  }
}
</script>
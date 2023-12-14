<script setup>
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useCadStore } from '../stores/infoStore'
import { useQuery } from "@tanstack/vue-query";
import { RouterLink } from 'vue-router';
import {ref} from 'vue'
import confetti from 'canvas-confetti'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLEAPI_KEY)
const cadStore = useCadStore()
const showLoader = ref(false)

const {data, isError } = useQuery({
  queryKey: ['generateNames'],
  queryFn: getAiNames,
  refetchOnWindowFocus: false,
  refetchOnReconnect: 'always'
})

async function getAiNames() {
  if (cadStore.completeBody.body !== '' && cadStore.completeBody.face !== '' && cadStore.completeBody.legs !== '') {
    showLoader.value = true
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const prompt = `Genera 12 Nombres de criaturas creativas, puedes mezclar letras, a partir de: ${cadStore.completeBody.face} + ${cadStore.completeBody.body} + ${cadStore.completeBody.legs}`;
      const result = await model.generateContent(prompt);
      const response = result.response.candidates[0].content.parts[0].text.split('\n');
      cadStore.completeBody.name = response
      confetti();
      return Promise.resolve(response); // Use Promise.resolve to explicitly resolve the promise
    } catch (error) {
      console.error(error);
    } finally {
      showLoader.value = false
    }
  }
}

</script>
<template>
  <div class="mb-10">
    <h1 class="text-3xl text-slate-700 font-semibold">Enjoy your Names!</h1>
    <h2 class="text-xl text-slate-500">Generated with Google AI - Gemini Pro</h2>
  </div>
  <div v-if="showLoader" class="grid grid-cols-3 gap-3">
    <Skeleton height="10" v-for="item in 12" class="h-14 w-16"></Skeleton>
  </div>
  <section v-else-if="isError">
    <div class="py-4 bg-red-100 border border-red-200 px-5 mb-10 rounded-lg">
      We had an error Generating the names. Pleasy try again Later.
    </div>
    <router-link class="bg-amber-500 px-10 text-amber-950 font-semibold py-3 rounded-lg hover:bg-amber-400 transition-colors duration-300" to="/">Vuelve a Comenzar</router-link>
  </section>
  <div v-else-if="data">
    <div class="grid grid-cols-3 gap-x-6 gap-y-3">
      <div class="h-14 py-3 px-5 border border-slate-200 rounded-lg bg-slate-100" v-for="item in cadStore.completeBody.name" :key="item.name">
        {{ item }}
      </div>
    </div>
    <button @click="getAiNames()" class="bg-amber-500 px-10 text-amber-950 font-semibold py-3 rounded-lg mt-10 hover:bg-amber-400 transition-colors duration-300">Generate Again</button>
</div>
</template>
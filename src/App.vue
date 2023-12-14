<script>
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {};
    },
    methods: {},
    components: { RouterLink }
}
</script>

<template>
  <div class="wrapper flex flex-col justify-between h-screen py-10 px-10 lg:px-0">
    <section>
      <nav class="flex justify-between mb-20">
        <router-link to="/"><img src="/images/SVG/mainColor.svg" width="120" alt="logoMultiStep"></router-link>
        <ul class="flex justify-between gap-x-5">
          <RouterLink class="hover:border-black hover:border-b" to="/about">About</RouterLink>
          <a class="hover:border-black hover:border-b" href="https://github.com/Sergioaorozco/petgen_ai" target="_blank">Github</a>
        </ul>
      </nav>
      <router-view></router-view>
    </section>
    <footer class="flex justify-between items-center mt-10 border-t border-t-slate-200">
      <router-link to="/"><img src="/images/SVG/mainBlack.svg" width="70" alt="logoMultiStep"></router-link>
      <a class="py-2 hover:border-black hover:border-b" href="https://sergiorozco.com/" target="_blank">Developed by <strong>Sorozco</strong></a>
    </footer>
  </div>
</template>

<style scoped>
</style>

<template>
    <div class="navbar bg-gray-950 text-white">
  <div class="flex-none">
    <v-menu>
      <template v-slot:activator="{ props }">
    <button v-bind="props" class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>
            <router-link :to="`${item.link}`">
              {{ item.title }}
            </router-link>
          
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">{{ props.name }} </a>
  </div>
  <div class="flex-none">
    <button @click="props.optn" class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>




</template>

<script setup>
import { defineProps, ref } from 'vue';
 const props = defineProps({name:'', optn:''})

 const  items = ref( [
        { title: '🏠 Home', link:'/' },
        { title: '🔎 Search', link: '/search' },
        { title: '🍱 Categories', link:'/categories' },
        { title: '👤 Profiles', link:'/profiles' },
      ])


</script>

<style lang="scss" scoped>

</style>
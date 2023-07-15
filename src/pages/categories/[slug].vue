<template>
    <div v-motion-slide-left>
        <!-- <navbar name="cash"/> -->
        <navbar :name="route.params.slug" :optn="()=>{ searchVisible = !searchVisible}"/>

        <div v-motion-slide-left v-if="searchVisible" class="flex flex-col w-full px-4 pb-6 bg-gray-950 ">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="🔎 Search"
          class="px-4 py-2 woo text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
        />
        </div>


        <div v-for="app in apps" :key="app._id" >
            <v-lazy
  :min-height="10"
  :options="{'threshold':0.5}"
  transition="fade-transition"
>
<div @click="router.push(`/apps/${app.name}`)" class="flex bg-gray-100 dark:bg-slate-950 flex flex-row justify-start p-5 my-3 shadow-sm mx-5 rounded-lg">
  <img width="75" class="rounded-lg"
  loading="lazy" :src="CreateURL(app.icon)" alt="" srcset="">
  <div class="flex flex-col ml-4 mt-3">
    <p  > {{ app.name }}</p>
    <p class="text-sm mt-1" > {{ mainstore.categories.filter(x => x._id === app.category._ref)[0].title }}</p>
  </div>

  <div style="position: absolute; left: 76%; " class=" justify-end ">
        <span class="text-xl">⭐</span>
        <span class="mt-1 text-sm">3.2</span>
    </div>

</div>
</v-lazy>
</div>
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import {useRoute, useRouter} from 'vue-router'
import {useMainstore} from '@/stores/mainstore'
import {CreateURL} from '@/utils.js'
import {ref, watch} from 'vue'


const route = useRoute()
const router = useRouter()
const mainstore= useMainstore()
const searchTerm = ref()
const searchVisible = ref(false)

const specific = (mainstore.apps.filter( x=> x.category._ref === mainstore.categories.filter(x=> x.title === route.params.slug)[0]._id))
const apps = ref(mainstore.apps.filter( x=> x.category._ref === mainstore.categories.filter(x=> x.title === route.params.slug)[0]._id))
//console.log( mainstore.categories.filter(x=> x.title === route.params.slug)[0])

watch( searchTerm, ()=>{
  apps.value =  specific.filter((app) =>
      app.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
})

</script>

<style scoped>

</style>
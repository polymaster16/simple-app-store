<template>
<div v-motion-roll-top class="text-gray-900 dark:text-gray-50  pb-20 "
:style="`background: radial-gradient(ellipse at top, ${zeapp.color}, transparent),
 radial-gradient(ellipse at bottom, transparent, transparent);`">
    <Navbar :name="zeapp.name"/>

    <img loading="lazy" :src="CreateURL(zeapp.maiimage, 640,360)" alt="" srcset="">
 <div class="mx-5 my-5 flex flex-col gap-2">

    <div class=" bg-gray-100 dark:bg-slate-950 flex flex-row justify-start p-5 my-3 shadow-sm  rounded-lg">
  <img width="75" class="rounded-lg"
  loading="lazy" :src="CreateURL(zeapp.icon)" alt="" srcset="">
  <div class="flex flex-col ml-4 mt-3">
    <p  > {{ zeapp.name }}</p>
    <p class="text-sm mt-1" > {{ mainstore.categories.filter(x => x._id === zeapp.category._ref)[0].title }}</p>
  </div>
    </div>
<div>
    <p class="font-bold">Description: </p> <p class="mx-2 font-thin text-sm"> {{ zeapp.description }}</p>
</div>
<div>
    <strong class="font-bold">Rating: </strong> <span> 3 stars</span>
</div>
 <button class="btn  text-gray-950 dark:text-white mt-5">📩 Download Now</button>

 <div class="mt-8">
    <strong class="font-bold ">Other actions: </strong> 
</div>

</div>


</div>
</template>

<script setup>
import Navbar from '../../components/navbar.vue';
import {useMainstore} from '@/stores/mainstore'
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {CreateURL} from '@/utils'

const mainstore = useMainstore()
const zeapp = ref()

const route = useRoute()
const router = useRouter()

onBeforeMount(()=>{

    zeapp.value = mainstore.apps.filter( x=> x.name === route.params.slug)[0]
    console.log(zeapp.value)

})

</script>

<style  scoped>

</style>
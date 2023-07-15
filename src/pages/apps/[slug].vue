<template>
<div v-motion-roll-top class="text-gray-900 dark:text-gray-50  pb-20 "
:style="`background: radial-gradient(ellipse at top, ${zeapp.color}, transparent),
 radial-gradient(ellipse at bottom, transparent, transparent);`">
    <Navbar :name="zeapp.name"/>

    <img loading="lazy" :src="CreateURL(zeapp.maiimage, 640,360)" alt="" srcset="">
 <div class="mx-5 my-5 flex flex-col gap-2">

    <div style="margin-top: -30px" class=" bg-gray-100 dark:bg-slate-950 flex flex-row justify-start p-5 mb-3 shadow-sm  rounded-lg">
  <img width="75" class="rouded-lg"
  loading="lazy" :src="CreateURL(zeapp.icon)" alt="" srcset="">
  <div class="flex flex-col ml-4 mt-3">
    <p  > {{ zeapp.name }}</p>
    <p class="text-sm mt-1" > {{ mainstore.categories.filter(x => x._id === zeapp.category._ref)[0].title }}</p>
  </div>
    </div>

    <div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="collapse-title font-bold">
    Description
  </div>
  <div class="collapse-content"> 
    <p class="mx-2 font-thin text-sm"> {{ zeapp.description }}</p>
 </div>
</div>

 <a class="btn text-gray-950 dark:text-white mt-2"
  :href="convertToUrl(zeapp.apk.asset._ref)">
    📩 Download Now</a>


    <p class="font-bold mt-8">Other actions: </p> 
<div class="flex flex-row justify-center gap-4 mt-1">
    <button class="btn">Share</button>
    <button class="btn">Reviews</button>
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

const convertToUrl = (file) => {
     // const fileName = 'file-9891d0384347ae70aaabbe08663a163c2b4408ae-apk'; // Replace with your input string

      const parts = file.split('-');
      const fileId = parts[1];
      const extension = parts[2];

      const url = `https://cdn.sanity.io/files/ehfgybl4/production/${fileId}.${extension}`;
      return url;
    };

onBeforeMount(()=>{

    zeapp.value = mainstore.apps.filter( x=> x.name === route.params.slug)[0]
    console.log(zeapp.value)

     console.log(convertToUrl(zeapp.value.apk.asset._ref))

    // https://cdn.sanity.io/files/ehfgybl4/production/9891d0384347ae70aaabbe08663a163c2b4408ae.apk

})

</script>

<style  scoped>

</style>
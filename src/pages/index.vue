<template>
  <div v-motion-slide-left>
    <div class="navbar bg-gray-950 text-white">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Home </a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>

<div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Discover</span>  
</div>

<Carousel  class="mx-5 mt-4 " :items-to-show="isMobile? 3 : 8" :wrap-around="true">
    <Slide v-for="category in mainstore.categories" :key="category.title">
      <div style="width: fit-content;" class="bg-gray-200 text-gray-950 dark:text-gray-50 dark:bg-gray-950
 hover:bg-gray-800 hover:text-gray-50 dark:hover:bg-gray-500 py-2 px-3 rounded-lg " size="large" >
          <span class="text-sm">{{ category.title.slice(0,10) }}..</span>
        </div>
    </Slide>
  </Carousel>

  <div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Featured</span>  
</div>


<Carousel   class="mx-5 lg:mx-5 mt-4 " :items-to-show="isMobile? 1.1 : 2.7" :wrap-around="true">
    <Slide v-for="app in mainstore.apps.slice(0,5)" :key="app.name">
        <div :style="`background: radial-gradient(circle at center, ${app.color}, rgba(255, 255, 255, 0));`"
        class="card w-96 bg-gray-200 dark:bg-gray-950 shadow-xl mx-2">
  <figure><img :src="CreateURL(app.maiimage)" alt="app image" class="imnx" /></figure>
  <div class="mt-4 mx-6 mb-5">
    <div class="flex flex-row justify-start gap-3">
    <div class="rounded-xl w-12">
      <img :src="CreateURL(app.icon)" loading="lazy" />
    </div>
    <h2 class="font-bold text-lg text-gray-900 dark:text-gray-50">{{ app.name }}</h2>
  </div>
    <div class="card-actions justify-end ">
        <span class="text-2xl">⭐</span>
        <span class="mt-1">3.2</span>
    </div>
  </div>
</div>
    </Slide>
    <template #addons>
      <Navigation />
    </template> 
 </Carousel>

<!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-5 mt-3">
<div v-for="i in (isMobile? 3 : 6)" :key="i"
 class="card w-46 bg-base-100 shadow-xl image-full">
  <figure><img src="https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Event</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn ">Take part</button>
    </div>
  </div>
</div> -->

<!-- </div> -->

<div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Popular apps</span>  
</div>

<div v-for="app in mainstore.apps.slice(0,5)" :key="app._id" >
<div class="flex bg-gray-100 dark:bg-slate-950 flex flex-row justify-start p-5 my-3 shadow-sm mx-5 rounded-lg">
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
</div>





<div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Publishers</span>  
</div>

<div class="avatar-group -space-x-2 mx-5 mt-3 ">
  <div v-for="publisher in (isMobile? mainstore.publishers :  mainstore.publishers)" :key="publisher.name" class="avatar">
    <div class="w-12">
      <img :src="CreateURL(publisher.image)" loading="lazy" />
    </div>
  </div>
 
  <div class="avatar placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>

<div
 class="card w-46 bg-base-100 shadow-xl image-full mx-5 mt-6 mb-20">
  <figure><img src="https://img.freepik.com/premium-photo/3d-rendering-bunch-square-badges-with-whatsapp-logo-green-background_284880-352.jpg" alt="Shoes" /></figure>
  <div class="card-body text-white">
    <h2 class="card-title">Join our whatsapp</h2>
    <p>Join our whatsapp group in other to receive regular updated concerning new and trending apps, including events .</p>
    <div class="card-actions justify-end">
      <button class="btn ">Join now</button>
    </div>
  </div>


</div>

</div>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref, onMounted } from 'vue';
import {useMainstore} from '@/stores/mainstore'
import {CreateURL} from '@/utils.js'



const isMobile = ref(false);
const mainstore = useMainstore()

const checkScreenSize = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  isMobile.value = mediaQuery.matches;
};

onMounted(() => {
  checkScreenSize(); // Initial check
  window.addEventListener('resize', checkScreenSize);

});



</script>

<style scoped>
.imnx{
    width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
.mmm{
  margin-top: -10px;
}
</style>
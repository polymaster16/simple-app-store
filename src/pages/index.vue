<template>
  <div v-motion-slide-left>
<div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Discover</span>  
</div>

<Carousel  class="mx-5 mt-4 " :items-to-show="isMobile? 3 : 8" :wrap-around="true">
    <Slide v-for="category in mainstore.categories" :key="category.title">
      <div style="width: fit-content;" class="bg-gray-200 text-gray-950 dark:text-gray-50 dark:bg-gray-950
 hover:bg-gray-800 hover:text-gray-50 dark:hover:bg-gray-500 py-2 px-3 rounded-3xl " size="large" >
          <span class="text-sm">{{ category.title.slice(0,10) }}..</span>
        </div>
    </Slide>
  </Carousel>

  <div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Featured</span>  
</div>


<Carousel   class="mx-5 lg:mx-5 mt-4 " :items-to-show="isMobile? 1.3 : 3.5" :wrap-around="true">
    <Slide v-for="app in mainstore.apps.slice(0,5)" :key="app.name">
        <div class="card w-96 bg-gray-200 dark:bg-gray-950 shadow-xl mx-2">
  <figure><img :src="CreateURL(app.maiimage)" alt="app image" class="imnx" /></figure>
  <div class="mt-2 mx-6 mb-5">
    <h2 class="card-title">{{ app.name }}</h2>
    <p class="text-left text-sm">If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
        <span class="text-2xl">⭐</span>
        <span class="mt-1">3.2</span>
    </div>
    <div v-if="false" class="card-actions justify-start mmm">
      <i class="text-xs ">
       By Publisher
       </i>
    </div>
  </div>
</div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>

  <div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Events</span>  
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-5 mt-3">
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
</div>

</div>

<div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Publishers</span>  
</div>

<div class="avatar-group -space-x-2 mx-5 mt-3 mb-40">
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
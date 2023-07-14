<template>

    <div v-motion-slide-left class="flex flex-col items-center justify-center">
      <div class="flex flex-col w-full px-4 py-4 bg-gray-950 ">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="🔎 Search"
          class="px-4 py-2 woo text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
        />
   
<div  style="overflow-x: scroll; margin-bottom: -25px;" class=" mt-4 flex flex-row justify-start gap-2 " :items-to-show="isMobile? 2 : 8" :wrap-around="true">
    <div  v-for="category in mainstore.categories" :key="category.title">
      <div style="width: 150px;" class="bg-gray-200 text-gray-950 dark:text-gray-50 dark:bg-gray-800
 hover:bg-gray-800 hover:text-gray-50 dark:hover:bg-gray-500 py-2 px-3 rounded-lg " size="large" >
          <span class="text-sm">{{ category.title }}</span>
        </div>
    </div>
  </div>
      </div>


      <div class="container mt-4 ">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4">
          <div
            v-for="app in filteredApps"
            :key="app.id"
            class="p-4  rounded-md shadow-md imx"
            @click="router.push(`/apps/${app.name}`)"
          >
            <img :src="CreateURL(app.icon)" alt="App Icon" class="w-49 h-16 mb-4" />
            <h2 class="text-lg font-semibold">{{ app.name }}</h2>
            <p class="text-gray-500">{{ mainstore.categories.filter(x => x._id === app.category._ref)[0].title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import { ref, computed, onMounted } from 'vue';
  import {useMainstore} from '@/stores/mainstore'
import {CreateURL} from '@/utils.js'
  import { useRouter } from 'vue-router';

  const router = useRouter()
const mainstore = useMainstore()

  const apps = ref([
    {
      id: 1,
      name: 'App 1',
      category: 'Productivity',
      icon: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Clear-App-Icon.jpg',
    },
    {
      id: 2,
      name: 'App 2',
      category: 'Communication',
      icon: 'https://images-platform.99static.com/Hrj0IDVBktRdEibybcXiOLqpgtE=/102x102:921x921/500x500/top/smart/99designs-contests-attachments/91/91476/attachment_91476002',
    },
    {
      id: 3,
      name: 'App 3',
      category: 'Education',
      icon: 'https://cdn-icons-png.flaticon.com/512/1754/1754228.png',
    },
    {
      id: 4,
      name: 'App 4',
      category: 'Sports',
      icon: 'https://icon-library.com/images/sports-app-icon/sports-app-icon-15.jpg',
    },
    {
      id: 5,
      name: 'App 5',
      category: 'Nutrition',
      icon: 'https://cdn.dribbble.com/users/2601726/screenshots/11898736/day_005.png',
    },
    // Add more app objects as needed
  ]);
  
  const searchTerm = ref('');
  
  const filteredApps = computed(() => {
    return mainstore.apps.filter((app) =>
      app.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  const isMobile = ref(false);

const checkScreenSize = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  isMobile.value = mediaQuery.matches;
};

onMounted(() => {
  checkScreenSize(); // Initial check
  window.addEventListener('resize', checkScreenSize);
});


  </script>
  
  <style>
  .ov{
    overflow-x: scroll;
  }
  .container {
  }
  .imx{
    width:100%;
     @apply bg-gray-100 bg-opacity-90 dark:bg-opacity-10;
  }
  .woo{
    width: 100%;
  }
  </style>
  
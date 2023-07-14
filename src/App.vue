<script setup>
import { RouterView } from 'vue-router'
import sidebar from '@/components/sidebar.vue';
import { ref, onMounted, onBeforeMount } from 'vue';
import {useMainstore} from '@/stores/mainstore'

const isMobile = ref(false);
const sideBarVisible = ref(false)

const mainstore = useMainstore()
const loading = ref(true)

const checkScreenSize = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  isMobile.value = mediaQuery.matches;
  sideBarVisible.value = !isMobile.value
};

onMounted(() => {
  checkScreenSize(); // Initial check
  window.addEventListener('resize', checkScreenSize);
});

async function fetchAll(){
await mainstore.fetchApps()
await mainstore.fetchCategories()
await mainstore.fetchPublishers()
loading.value = false

}

onBeforeMount(()=>{
  fetchAll();
})




</script>

<template>
  <div v-if="!loading">
  <div class="flex flex-row justify-start fontx">
  <sidebar v-if="sideBarVisible"/>
  <div class="ov ">
  <RouterView />
</div>
</div>

<div class="flex flex-row justify-center">
<div class=" ovn flex flex-row justify-center p-4 gap-7 rounded-3xl bg-gray-950 text-white"> 
  <router-link to="/">
    <v-icon scale="1.35" name="io-home"></v-icon>
  </router-link>
  <router-link to="/search">
    <v-icon scale="1.6" name="fa-searchengin"></v-icon>

  </router-link>
  <div @click="sideBarVisible = !sideBarVisible">
    <v-icon scale="1.4" name="hi-solid-menu-alt-3"></v-icon>
  </div>
   </div>
  </div>
</div>

<div v-else class="loader">
  <div class="flex flex-row justify-center">
  <img width="80" src="@/assets/preloader.gif" alt="" srcset="">
</div>
</div>



</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.loader{
  height: 100vh;
  @apply flex flex-col justify-center
}

.ovn{
  position: fixed; 
  z-index: 150;
  top: 90vh;
}
.bgx{
    background-position: center;
    background-attachment: fixed;
    background-image: url('https://cdn.pixabay.com/animation/2023/03/05/12/04/12-04-53-685_512.gif');
    background-size: cover;
    width: 100%;
    height: 200vh;
}

.fontx{
  font-family: 'Poppins';
  letter-spacing: 0.5px;
}
.ov{
  width:100%;
  text-size-adjust: initial;
  overflow-x: hidden;
  margin-left: 18%;
}

@media (max-width: 768px) {
  /* Styles for screens with a maximum width of 768 pixels (e.g., mobile devices) */
  .ov{
  width:100%;
  text-size-adjust: initial;
  overflow-x: hidden;
  margin-left: 0%;

}

}
</style>

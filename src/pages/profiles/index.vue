<template>
    <div v-motion-slide-left>
      <div class=" flex flex-row justify-start mb-4">
  <span class='font-bold  text-2xl ml-6 mt-6'> Profiles</span>  
</div>

<div class="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-4 mx-4">
<div  v-for="i in 10" class="bg-white dark:bg-black rounded-lg shadow-xl">
      <img
      src="https://static.startuptalky.com/2022/01/Google-Play-Business-Model-StartupTalky.jpg" alt="Profile Image" class="iml" />
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">John Doe</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">This is the description of john doe over here buff</p>
        <div class="flex items-center justify-end mt-4">
          <button class="btn btn-md bg-gray-950 text-gray-50">👁️ View</button>
        </div>
      </div>
    </div>
</div></div>
</template>

<script setup>

</script>

<style  scoped>
.bg-primary {
  background-color: white;
}
.iml{
    width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.dark .bg-primary {
  background-color: black;
}
</style>
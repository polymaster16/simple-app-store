<template>
    <div v-motion-slide-left>
  <div class=" flex flex-row justify-start">
  <span class='font-bold  text-2xl ml-6 mt-6'> Categories</span>  
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-4 mt-3">
<div v-for="category in categories" 
class="card w-97 bg-gray-200 bg-opacity-90 dark:bg-opacity-10  shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{{ category.name }}</h2>
    <p>{{ category.description }}</p>
    <div class="card-actions justify-end">
        <v-btn icon>👁️</v-btn>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script setup>

const categories = [
  {
    id: 1,
    name: 'Games',
    description: 'Explore and play exciting games',
    color: 'red',
  },
  {
    id: 2,
    name: 'Productivity',
    description: 'Boost your efficiency and get things done',
    color: 'green',
  },
  {
    id: 3,
    name: 'Entertainment',
    description: 'Discover and enjoy entertaining content',
    color: 'blue',
  },
  {
    id: 4,
    name: 'Education',
    description: 'Learn and expand your knowledge',
    color: 'purple',
  },
  {
    id: 5,
    name: 'Health & Fitness',
    description: 'Improve your health and stay fit',
    color: 'yellow',
  },
];


</script>

<style scoped>

</style>
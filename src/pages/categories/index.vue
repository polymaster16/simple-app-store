<template>
    <div v-motion-slide-left>
      <navbar name="All Categories"/>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-4 mt-5 mb-9">
<RouterLink v-for="category in mainstore.categories" :to="`/categories/${category.title}`"
class="card w-97 bg-gray-200 bg-opacity-90 dark:bg-opacity-10  shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{{ category.title }}</h2>
    <p>{{ category.description }}</p>
    <div class="card-actions justify-end">
        <v-btn icon>👁️</v-btn>
    </div>
  </div>
</RouterLink>
</div>
</div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import {useMainstore} from '@/stores/mainstore'

const mainstore = useMainstore()
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
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { client } from '../client'

export const useMainstore = defineStore('mainstore', () => {
  const apps = ref(0)
  const categories = ref(0)
  const publishers = ref(0)

  const fetchApps= async()=>{
    try {
        apps.value  = 
        await client.fetch('*[_type == "anapp"]');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
          console.log(apps.value)
      } catch (error) {
        console.log(error, 'fetching apps')
      }
  }
  const fetchCategories = async()=>{
    try {
        categories.value  = 
        await client.fetch('*[_type == "category"]');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
          console.log(categories.value)
      } catch (error) {
        console.log(error, 'fetching categories')
      }
  }
  const fetchPublishers = async()=>{
    try {
        publishers.value  = 
        await client.fetch('*[_type == "publisher"]');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
          console.log(publishers.value)
      } catch (error) {
        console.log(error, 'fetching apps')
      }
  }
  

  return { apps, categories, publishers, fetchApps, fetchCategories, fetchPublishers }
})

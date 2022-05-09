<template>
  <div>
    <h1>Pagination</h1>
    <b-pagination v-model="currentPage" :total-rows="rows" 
     :per-page="perPage" 
    :current-page="currentPage" small></b-pagination>
    <button @click="fun()">click</button> 
 <b-table striped hover :items="res" :fields="fields" 
 :per-page="perPage" :current-page="currentPage"></b-table>
      
     
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "AXios",

  data() {
    return {
        perPage: 3,
        currentPage: 1,
        res:"",

    }
  },

  methods: {
   async fun() {
      let response=await axios.get("https://jsonplaceholder.typicode.com/todos")
        this.res= await response.data;

      //  let response=await fetch("https://jsonplaceholder.typicode.com/todos")
      // this.res= await response.json()
    }
  },
  computed: {
      rows() {
        return this.res.length;
      }
    }
};
</script>
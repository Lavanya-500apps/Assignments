<template>
    <div>
  
      
    <b-tabs >
      <b-tab title="Tab 1" @click="fun()" active>
       
          <b-table striped hover :items="text" :fields="fields"> </b-table>
        
      </b-tab>
      <b-tab title="Tab 2" @click="fun1()" active>
       
          <b-table striped hover :items="text" :fields="fields"> </b-table>
        
      </b-tab>
      
    </b-tabs>
  
</div>
</template>

<script>
import axios from "axios"
export default {
  name:"taBS",
  data() {
    return{
       
      fields: ["userId", "id", "title", "completed"],
       text:" ",
    }
  },
  methods: {
    async fun() {
      let response=await fetch("https://jsonplaceholder.typicode.com/todos")
      this.text=await response.json()
     
        
    },
    async fun1() {
      let response=await axios.get("https://jsonplaceholder.typicode.com/todos")
      this.text=await response.data
     
        
    },
  },

};
</script>

<style>

</style>
<template>
    <div>
  
      
    <b-tabs >
      <b-tab title="Tab 1" @click="fun()" active>
       
          <b-table striped hover :items="text" :fields="fields"> </b-table>
        
      </b-tab>
      
    </b-tabs>
  
</div>
</template>

<script>
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
  },

};
</script>

<style>

</style>
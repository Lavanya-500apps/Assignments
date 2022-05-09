<template>
    <div>
  
      
    <b-tabs >
      <b-tab title="Tab 1" @click="fun()" active>
       
          <b-table striped hover :items="text" :fields="fields"> </b-table>
        
      </b-tab>
      <b-tab title="Tab 2" @click="fun()" >
       
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
       // text: this.data,
      //fields: ["userId", "id", "title", "completed"],
       text:" ",
    }
  },
  methods: {
    async fun() {
      let response=await fetch("https://jsonplaceholder.typicode.com/todos")
      this.text=await response.json()
     
        //.then((response) => response.json())

        //.then((data) => (this.text = data));
    },
  },

};
</script>

<style>

</style>
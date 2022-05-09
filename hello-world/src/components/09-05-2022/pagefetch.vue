<template>
  <div>
<b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
     <b-tabs>
      <b-tab title="Tab 1" @click="func()" active>
<b-table :items="res" :fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
      </b-tab>
     </b-tabs>
      
  </div>
</template>

<script>
export default {
name:"FEtch",
data(){
    return{
perPage:3,
currentPage:1,
res:" ",

    }
},
methods:{
async func(){
    let response=await fetch("https://jsonplaceholder.typicode.com/todos")
    this.res= await response.json()
}
},
computed:{
    rows(){
       return this.res.length; 
    }
}
};
</script>

<style>

</style>
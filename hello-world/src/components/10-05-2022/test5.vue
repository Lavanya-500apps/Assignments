<template>
  <div>
    
    productname:
    <b-form-input
      v-model="value"
      type="text"
      id="demo1"
      placeholder="Enter productname"
    ></b-form-input
    ><br />
    productprice:
    <b-form-input
      v-model="value"
      type="number"
      id="demo2"
      placeholder="Enter price"
    ></b-form-input
    ><br />
    productcategory:
    <b-form-input
      v-model="value"
      type="text"
      id="demo3"
      placeholder="Enter productcategory"
    ></b-form-input
    ><br />
    <button @click="fun()">click</button>
    <b-table :items="products" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
     name: 'TEst5',
  data() {
    return {
        
        products:[{
        productname:"", 
        productprice:"", 
        productcategory:""
        }],
        fields:[]
    }
  },
  methods:{
      fun(){

        this.products.push({

         productname: document.getElementById("demo1").value,

         productprice: document.getElementById("demo2").value,

        productcategory: document.getElementById("demo3").value,
       
         });
           
          }
      }
  

};
</script>

<style>
</style>
<template>
  <div>
      <h2>props</h2>
      <h2>name:{{name}}</h2>
      <h2>age:{{age}}</h2>
      <h2>phone:{{phone}}</h2>
       <h2>name:{{company}}</h2>
       <h2>array:{{array}}</h2>
       <button>click</button>
       <p>{{res}}</p>
  </div>
</template>

<script>
export default {
    name:"PRops",
    props:{
      name:String,
      age:Number,
      phone:{
          default:5678,
          type:Number
      },
      company:{
        default:"mantra",
        type:String
      },
      array:{
        type:Array
      }
      
    }
    
    

};
</script>

<style>

</style>
<template>
  <div>
      <h2>props</h2>
      <h2>name:{{name}}</h2>
      <h2>age:{{age}}</h2>
      <h2>phone:{{phone}}</h2>
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
      }

    }

}
</script>

<style>

</style>
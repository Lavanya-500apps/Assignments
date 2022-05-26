<template>
  <div>
    <h1><u>props:</u></h1>
   <h1> <b>name:</b>{{ name }}</h1>
   <h1><b>age: </b>{{ age }}</h1>
    <h1><b>phone:</b> {{ number }}</h1>
   <h1> <b>books: </b>{{books}}</h1>
   <h2 id="child"></h2>
   <button @click="change_name()"><b>emit</b></button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    name: String,
    age: Number,
    number: {
      default: 57678789,
      type: Number,
    },
    books:Object
  },
  methods:{
    change_name(){
      this.$emit('change',{id:"1199",age:25});
     
    },
    ref_child(){
      let array=[1,2,3];
      //document.write(array);
      document.getElementById("child").innerHTML="child component array"+" "+array;
    }
  }
};
</script>

<style></style>

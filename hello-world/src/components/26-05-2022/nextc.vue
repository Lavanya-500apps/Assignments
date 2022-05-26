<template>
  <div>
    <h1><u>Props</u></h1>
    <h1><b>name:</b>{{ name }}</h1>
    <h1><b>age: </b>{{ age }}</h1>
    <h1><b>phone:</b> {{ number }}</h1>
    <h1><b>books: </b>{{ books }}</h1>
    <h2 id="child"></h2>
    <button @click="change_name()"><b>emit</b></button>
    <b-table striped hover sticky-header bordered :items="items" :fields="fields"></b-table>
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
    books: Object,
  },
  data(){
    return{
      items:[]
    }
  },
  methods: {
    change_name() {
      this.$emit("change", { id: "1199", age: 25 });
    },
    ref_child() {
      let array = [1, 2, 3];
      document.getElementById("child").innerHTML =
        "child component array" + " " + array;
    },
   async table_data(){
        let response=await fetch("https://jsonplaceholder.typicode.com/todos")
        this.items= await response.json();
    },
  },
};
</script>

<style></style>

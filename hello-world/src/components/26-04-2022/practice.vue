<template>
  <div>
    <h1>Hello</h1>
    <p>{{ array }}</p>
    <p>{{ value }}</p>
    <p>{{ data }}</p>
    <p>{{ values }}</p>
    {{A}}
    <p id="demo"></p>
    <button @click="f1()">filter</button>
    <button @click="f2()">find</button>
    <button @click="f3()">map</button>
    <button @click="f4()">foreach</button>
  </div>
</template>

<script>
export default {
  name: "MEthods",
  data() {
    return {
      table_data: [
        { name: "Agile CRM", description: " A company of excellence" },

        { name: "mantra technologies", description: "500apps" },

        { name: "500apps Python", description: "Backend built using python" },

        { name: "500apps infinity", description: "Builtusing vue JS" },
      ],

      A: [4, 7, 6, 9, 6, 3],

      array: [],
      value: [],
      data: [],
      values: [],
    };
  },
  methods: {
    f1() {
      this.array = this.table_data.filter((arr) => arr.name == "Agile CRM");
      return this.array.name;
    },

    f2() {
      this.value = this.A.find((val) => val == 6);
      return this.value.val;
    },

    f3() {
      this.data = this.A.map((arr) => arr + 2);
      //this.data = this.A.map((arr) => arr == 4);
      //displaying true or false
      return this.data.arr;
    },

    f4() {
      this.values = this.A.forEach((arr) => 
        
        document.write(arr)
      
      
      )},
  },
};
</script>

<style>
</style>
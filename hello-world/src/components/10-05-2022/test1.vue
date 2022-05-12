<template>
  <div>
    <p>checking type of object is string</p>
    <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
  name: "TEst1",
  data() {
    return {
      data: [{ name: "lavanya", id: 1199, company: "mantra" }],
      str: "hello",
      str1: 21,
    };
  },
  methods: {
    fun() {
      if (typeof this.data["name"] === "string") {
        //if(typeof this.str==='string')
        //if(typeof this.str1==='string')
        document.write("it is a string");
        console.log("it is  a string");
      } else {
        document.write("it is not a string");
        console.log("it is not a string");
      }
    },
  },
};
</script>

<style>
</style>
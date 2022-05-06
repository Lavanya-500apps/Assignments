<template>
  <div>
    <h1>computed propertIES</h1>

    <button v-on:click="a++">Add to A</button>

    <button v-on:click="b++">Add to B</button>

    <p>A-{{ a }}</p>

    <p>B-{{ b }}</p>

    <p>Age+A ={{ addToA() }}</p>

    <p>Age+B ={{ addToB() }}</p>
  </div>
</template>


<script>
export default {
  name: "comPUted",

  data() {
    return {
      age: 20,

      a: 0,

      b: 0,
    };
  },

  methods: {
    addToA() {
      console.log("addToA");

      return this.a + this.age;
    },

    addToB() {
      console.log("addToB");

      return this.b + this.age;
    },
  },
};
</script>

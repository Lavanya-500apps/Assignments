<template>
  <div>
    <h1>computed properties</h1>

    <button v-on:click="a++">Add to A</button>

    <button v-on:click="b++">Add to B</button>

    <p>A-{{ a }}</p>

    <p>B-{{ b }}</p>

    <!-- <p>Age+A ={{ addToA() }}</p>

    <p>Age+B ={{ addToB() }}</p> -->
  </div>
</template>

<script>
export default {
  name: "COmputed",

  data() {
    return {
      age: 20,

      a: 0,

      b: 0,
    };
  },

  computed: {
    addToA() {
      alert("addToA");

      return this.a + this.age;
    },

    addToB() {
      alert("addToB");

      return this.b + this.age;
    },
  },
};
</script>

<template>
  <div>
    <h1>Using Es6 map function Display the array of id's for all Users.</h1>
    <p>{{ array }}</p>
    <button @click="f1()">map</button>
  </div>
</template>

<script>
export default {
  name: "MEthods",
  data() {
    return {
      users: [ { id: 20, name: 'Captain Piett' }, 
      { id: 24, name: 'General Veers' },
       { id: 56, name: 'Admiral Ozzel' }, 
      { id: 88, name: 'Commander Jerjerrod' } ],
      array: [],
     
    };
  },
  methods: {
    f1() {
      this.array = this.users.map((arr) => arr.id);
      return this.array.id;
    },

      },
};
</script>


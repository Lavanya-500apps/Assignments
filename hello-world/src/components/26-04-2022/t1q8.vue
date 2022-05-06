<template>
  <div>
    <h1>Filter the below data and display the data with the name "General veers"</h1>
    <p>{{ array }}</p>
    <button @click="f1()">filter</button>
  </div>
</template>

<script>
export default {
  name: "MEthods",
  data() {
    return {
      officers: [ { id: 20, name: 'Captain Piett' }, 
      { id: 24, name: 'General Veers' },
       { id: 56, name: 'Admiral Ozzel' }, 
      { id: 88, name: 'Commander Jerjerrod' } ],
      array: [],
     
    };
  },
  methods: {
    f1() {
      this.array = this.officers.filter((arr) => arr.name == "General Veers");
      return this.array.name;
    },

      },
};
</script>


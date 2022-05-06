<template>
  <div>

      <p>Using Set to display unique values</p>
      <p id="demo"></p>
      
      <button @click="unique()">click</button>
  </div>
</template>

<script>
export default {
    name: "SEts",
    data() {
        return{
            //numbers:[1,1,2,2,2,3,4,3,2],
        }
    },
    methods: {
        unique() {
            //this.numbers=[...new Set(this.numbers)]
            //console.log(this.numbers);
         var numbers=[...new Set([1,1,2,2,2,3,4,3,2])]
            //document.write(numbers);
            //console.log(numbers);
            document.getElementById("demo").innerHTML=numbers;
         }, 

    }

};
</script>

<style>

</style>
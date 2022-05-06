<template>
  <div>
      <p>Using Set to display unique values</p>
      <p>{{text}}</p>
      <button @click="unique()">click</button>
  </div>
</template>

<script>
export default {
    name: "SEts",
    data() {
        return{
            text:[],
           //numbers:[1,1,2,2,2,3,4,3,2],

        }
    },
    methods: {
        unique() {
           //this.numbers=[...new Set(this.numbers)]
            //console.log(this.numbers);
         var numbers = new Set([1,1,2,2,2,3,4,3,2]);
         numbers.forEach((value)=>{
         this.text +=value;
       }),

      console.log(this.text);

        }, 

    }

};
</script>

<style>

</style>
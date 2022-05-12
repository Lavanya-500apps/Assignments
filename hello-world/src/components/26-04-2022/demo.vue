<template>
  <div>
<h1>heading tags</h1>
<p>paragraphs</p>
<p>{{value}}</p>
<button type="button" @click="f1()">click</button>

      </div>
</template>

<script>
export default {
    name:"DEmo",
    data() {
        return{
            array: [1,2,3,4,5],
            value:[],
        };
    },
    methods:
    {
      f1() {
          this.value=this.array.forEach((arr)=>
          console.log(arr))

      },

    },

};
</script>

<style>

</style>
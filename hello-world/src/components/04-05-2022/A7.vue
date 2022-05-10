<template>
  <div>
      <p>remove duplicate items from an array</p>
      
      <button @click="removeduplicates()">click</button>
  </div>
</template>

<script>
export default {
    name:"duplicaTES",
    data(){
        return{
            nums: [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6],
           
        }
    },
    methods:
    {
        removeduplicates() {
            document.write("array: "+this.nums+"<br>"),
             document.write("array without duplicates: "+[...new Set(this.nums)])
             
        }
    }

};
</script>

<style>

</style>
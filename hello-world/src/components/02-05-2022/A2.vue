<template>
  <div>
      <p>using reduce to double the elements</p>
     
      <button @click="reduce()">click</button>

  </div>
</template>

<script>
export default {
    name: "REduce",
    data() {
        return{
            double:[],
        }
        },
   methods: {
       reduce() {
           var a=[1,2,3,4,5];
          a.reduce((b,c) => {
              this.double=c*2;
              console.log(this.double);
          },[]);
       }
   }

};
</script>

<style>

</style>
<template>
  <div>
      <h2>vue</h2>
    <button @click="f1()">click</button>
          </div>
</template>

<script>
export default {
    name:"NEw",
    data(){
        return{
            a:[1,2,3,4,5,6,8]
        }
    },
    methods:{
        f1(){
          console.log(this.a)
        }
        
    }


}
</script>

<style>

</style>
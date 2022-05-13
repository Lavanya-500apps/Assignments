<template>
  <div>
      <h2>vue</h2>
      <h2>{{a}}</h2>

    <button @click="f1()">click</button>
          </div>
</template>

<script>
export default {
    name:"NEw",
    data(){
        return{
            a:[1,2,3,4,5,6,8],
            res:[]
        }
    },
    methods:{
        f1(){
         this.res=this.a.pop();
         return this.res;
        }
        
    }


}
</script>

<style>

</style>
<template>
  <div>
      <cprops :name="name" :age="age" :array="array" :res="res"></cprops>

  </div>
</template>

<script>
import cprops from './cprops.vue'
export default {
    name:"parentPROPs",
    components:{
        cprops
    },
    data(){
    return{
        name:"lavanya",
        age:24,
        array:[1,2,3],
        res:[]
    }
  },
  methods:{
      fun(){
          this.res=this.array.pop();
          
      }
  }
};
</script>

<style>

</style>
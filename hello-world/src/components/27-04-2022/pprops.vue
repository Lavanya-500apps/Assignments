<template>
  <div>
      <cprops :name="name" :age="age" :array="array" ></cprops>

  </div>
</template>

<script>
import cprops from './cprops.vue'
export default {
    name:"ParentProps",
    components:{
        cprops
    },
    data(){
    return{
        name:"lavanya",
        age:24,
        array:[1,2,3],
      
    }
  },
  
};
</script>

<style>

</style>
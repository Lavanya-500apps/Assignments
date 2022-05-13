<template>
  <div>
  <cref ref="name" >{{name}}</cref>
 <button @click="f1()">click</button> 
  </div>
</template>

<script>
import cref from './cref'
export default {
    name:"parentreFS",
    components:{
        cref
    },
    methods:{
        f1(){
            this.$refs.name.fun();
      document.write("parent component");
    
        },
    }

};
</script>

<style>

</style>
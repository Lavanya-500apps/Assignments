<template>
  <div>
  <cemit @action="emitfun"/>
  <h2>name:{{name}}</h2>
  </div>
</template>

<script>
import cemit from './cemit'
export default {
    name:"parentEMIt",
    components:{
        cemit
    },
    data(){
        return{
            name:"your name"
        };
    },
    methods:{
        emitfun(change){
            this.name=change.name;
        },
    }


};
</script>

<style>

</style>
<template>
  <div>
      <pagefetch/>
      <h2>$emit</h2>
      <button @click="fun()">click</button>
  </div>
</template>

<script>
import pagefetch from "./pagefetch"
export default {
    name:"EMit",
    mixin:[pagefetch],
    components:{
        pagefetch,
    },
    data(){
        return{

        }
    },
    methods: {
       fun() {
           this.$emit('change',{perpage:5});

       },

    },

}
</script>

<style>

</style>
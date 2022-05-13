<template>
  <div>
      <h2>$emit</h2>
      <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
    name:"EMit",
    data(){
        return{

        }
    },
    methods: {
       fun() {
           this.$emit('action',{name:"lavanya"});

       },

    },

}
</script>

<style>

</style>
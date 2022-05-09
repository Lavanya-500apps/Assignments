<template>
  <div>
      <p>hi</p>
  </div>
</template>

<script>
export default {
name:"crEateD",
data(){
    return{

    }
},
mounted(){
    console.log("mounted")
},
beforeCreate(){
    console.log("beforecreated")
},
created(){
    console.log("created")
},
beforeMount(){
    console.log("bmounted")
}
}
</script>

<style>

</style>
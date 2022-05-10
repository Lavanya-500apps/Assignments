<template>
  <div>
      <p>life cycle methods</p>
  </div>
</template>

<script>
export default {
name:"LifeCycle",
data(){
    return{

    }
},
mounted(){
    console.log("mounted")
},
beforeCreate(){
    console.log("beforecreate")
},
created(){
    console.log("created")
},
beforeMount(){
    console.log("beforemount")
},
// beforeUpdate(){
//     console.log("beforeupdate")
// },
// updated(){
//     console.log("updated")
// },
// beforeDestroy(){
//     console.log("beforedestroy")
// },
// destroyed(){
//     console.log("destroyed")
// }
}
</script>

<style>

</style>
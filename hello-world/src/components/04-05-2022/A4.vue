<template>
<div>
    <p>checking array</p>
    <button @click="checking()">click</button>
</div>
  
</template>

<script>
export default {
    name: "CHecking",
    data() {
        return{
            check:(arr)=> {
        if(toString.call(arr) === "[object Array]")
        //if(toString.call(arr) === "[object String]")
        {
        return true;
           }
           else{
       return false;
           }
            
        }
        }
    },
    methods: {
        checking() {
        console.log(this.check('w3resource'));
         console.log(this.check([1, 2, 4, 0]));
        }
     }
    

};

</script>

<style>

</style>
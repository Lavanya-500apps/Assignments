<template>
  <div>
      <button @click="func()">click</button>
{{array1}}
  </div>
</template>

<script>
export default {
name:"QuE2",
data(){
    return{
array:[1,2,3,4,5,6,7,8],
 array1:[]
    }
},
methods:{
    func(){
     this.array1=this.array.forEach((row)=>{
     
     document.write(row+2)
     
     })  
    }
}
}
</script>


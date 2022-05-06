<template>
  <div>
    <router-view/>
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
    <!--<practice/>-->
    <!--<t1q8>-->
   <!--<t1q10/>-->
   <!--<demo1>-->
     <!--<Props name="lav" age="24"/>
     
     <Emit @action="emitfun"/>
     <h1>name:{{name}}</h1>
     
     <Ref ref="name" >{{name}}</Ref>
       <button @click="f1()">click</button>-->
       <!-- <Promise/> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import demo1 from './components/demo1.vue'
//import Practice from './components/26-04-2022/practice.vue'
//import t1q8 from './components/26-04-2022/t1q8.vue'
//import t1q10 from './components/26-04-2022/t1q10.vue'
//import Props from './components/27-04-2022/props.vue'
//import Ref from './components/27-04-2022/ref.vue'
//import Emit from './components/27-04-2022/emit.vue'
 //import promise from './components/28-04-2022/promise.vue'
export default {
  name: 'App',
  components: {
   // HelloWorld
   //Practice
   //demo1
   //t1q8
   //t1q10
   //Props,
   //Ref,
   //Emit,
  //promise
  },
  data() {
    return{
       //name:"your name"
    };
  },
  methods:
  {
   f1(){

      this.$refs.name.fun();
      console.log("parent component")
  
    },

    emitfun(change)
    {
      this.name=change.name;
    },
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

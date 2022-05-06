<template>
  <div>
      <p>join all elements of the following array into a string</p>
      <button @click="string()">string</button>
      <button @click="join()">join</button>
      <button @click="joinadd()">joinadd</button>
      
  </div>
</template>

<script>
export default {
    name:"JOin",
    data() {
        return{
            myColor :["Red", "Green", "White", "Black"],
        }
    },
    methods: {
        string(){
            console.log(this.myColor.toString());
        },
        join() {
            console.log(this.myColor.join(' '));
        },
        joinadd() {
            console.log(this.myColor.join('+'));
        }
    }

};
</script>

<style>

</style>
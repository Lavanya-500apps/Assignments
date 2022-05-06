<template>
  <div>
    <h2>The setTimeout() and clearTimeout() Methods</h2>

    <p>Click "Skip" to skip advertisement. (You have 5 seconds)</p>

    <button onclick="Skip()">Skip!</button>

    <h2 id="demo"></h2>
  </div>
</template>

<script>
export default {

    name: "SETtimeout",
    data() {
        return{
            myTimeout : setTimeout(this.advertisement, 5000),
            
        }
    },
    methods: {
      advertisement(){
             document.getElementById("demo").innerHTML = "advertisement....."
            },

       Skip() {
             clearTimeout(this.myTimeout);
             
            },

   },
      
}
</script>

<style>
</style>


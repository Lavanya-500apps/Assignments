<template>
  <div>
    <h2>Promise</h2>
    <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
  name: "PRomise",
  data() {
    return {};
  },
  methods: {
    fun() {
      let mypromise = new Promise((myResolve, myReject)=> {
        let a = "lavanya";
        let b = "lavanya";
        if (a == b) {
          myResolve("success");
        } else {
          myReject("error");
        }
      });

      mypromise
        .then(()=>{
          console.log("success");
        })
        .catch(()=>{
          console.log("error");
        });
    },
  },
};
</script>


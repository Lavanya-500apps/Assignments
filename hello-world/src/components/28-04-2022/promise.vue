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
      let mypromise = new Promise(function (myResolve, myReject) {
        let a = "lavanya";
        let b = "lavanya";
        if (a == b) {
          myResolve("success");
        } else {
          myReject("error");
        }
      });

      mypromise
        .then(function () {
          console.log("success");
        })
        .catch(function () {
          console.log("error");
        });
    },
  },
};
</script>


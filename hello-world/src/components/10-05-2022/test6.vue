<template>
  <div>
    lowercase :<br> <input type="text" v-model="lower" placeholder="Enter lowercase"/><br />

    uppercase :<br> <input type="text" v-model="upper"/>
  </div>
</template>

<script>
export default {
  name: "UppeR",

  data() {
    return {
      lower: "",

      upper: "",
    };
  },

  watch: {
    lower: function (val) {
      this.lower = val;

      this.upper = this.lower.toUpperCase();
    },
  },
};
</script>

<style>
</style>
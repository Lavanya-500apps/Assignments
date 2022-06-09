<template>
  <div>
    <center><br><br>
      <b-col cols="2">
        <input
          type="text"
          placeholder="enter text"
          maxlength="25"
          v-model="message"
          required
        /><br /><br />

        <b-button variant="success" @click="data()">submit</b-button> </b-col
      ><br />

      <b-card>
        <div v-for="item in array" :key="item">
          <b-card-text id="text">{{ item }} </b-card-text>
        </div>
      </b-card>
    </center>
  </div>
</template>

<script>
export default {
  name: "DocumenT",

  data() {
    return {
      array: [],

      message: "",

      item: "",
    };
  },

  methods: {
    data() {
      this.array.push(this.message);

      console.log("text", this.item);

      document.getElementById("text").innerHTML = this.item;

      this.message = "";
    },
  },
};
</script>

<style></style>

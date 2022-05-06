<template>
  <div>
    <h2>Axios</h2>

    <b-table striped hover  :items="res" :fields="fields"></b-table>
  
    <button @click="fun()">axios</button>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "AXios",

  data() {
    return {
      res: [],
      fields: ["id", "title"],
      //fields: ["userId", "id", "title", "completed"],
    };
  },

  methods: {
    fun() {
      let response = axios.get("https://jsonplaceholder.typicode.com/todos/");

      let mypromise = new Promise((myResolve, myReject) => {
        myResolve(response);

        myReject("error");
      });

      mypromise
        .then((response) => {
          this.res = response.data;

          //console.log(response.data);
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>



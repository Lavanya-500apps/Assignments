<template>
  <div>
    <h1>Using Fetch</h1>

    <button @click="get()">get</button>
    <button @click="put()">put</button>

    <b-table
      striped
      hover
      sticky-header
      :items="text"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FeTch",

  data() {
    return {
      text: this.data,

      fields: ["id", "title", "completed"],
      
    };
  },

  methods: {
    get() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())

        .then((data) => (this.text = data));
    },
    async put() {
      let res = await axios.put("https://jsonplaceholder.typicode.com/todos");
      this.text = await res.data;
    },
  },
};
</script>

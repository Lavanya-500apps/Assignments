<template>
  <div>
    <h2>Fetch</h2>

    <b-table striped hover  :items="res" :fields="fields"></b-table>
  <p>{{res}}</p>
    <button @click="fun()">fetch</button>
  </div>
</template>


<script>


export default {
  name: "FEtch",

  data() {
    return {
      res:" ",
      fields: [],
      //fields: ["userId", "id", "title", "completed"],
    };
  },

  methods: {
    fun() {
      let response = fetch('https://jsonplaceholder.typicode.com/todos/1');

      let mypromise = new Promise((myResolve, myReject) => {
        myResolve(response);

        myReject("error");
      });

      mypromise
        .then((response) => {
          this.res = response.json();

          console.log(response);
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>



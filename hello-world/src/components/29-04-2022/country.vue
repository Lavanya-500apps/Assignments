<template>
  <div>
    <h1>Axios using in promise</h1>


<b-form-input v-model="value" placeholder="Enter your name"></b-form-input>
    <button @click="promisee()">ClickMe</button>

    <b-row>
        <b-col cols=5>
            <b-table striped hover :items="res" :fields="fields"> </b-table>
        </b-col>
        </b-row>

    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProM",

  data() {
    return {
      res: [],

      fields: ["country", "web_pages", "name"],
    };
  },

  methods: {
    promisee() {
      new Promise((rejection) => {
        axios.get("http://universities.hipolabs.com/search?country="+this.value)

          .then((response) => {
            this.res = response;

            console.log("responseresponse", response);

            this.res = response.data;
          })

          .catch((error) => {
            rejection(error);
          });
      });
    },
  },
};
</script>
<template>
  <div>
    <h2>country list</h2>

  <b-form-select v-model="value" :options="country"></b-form-select>
  <b-table striped hover  :items="res"></b-table>
    <button @click="fun()">click</button>
  </div>
</template>


<script>
import axios from "axios";
const { getNames } = require("country-list");
export default {
  name: "COuntry",

  data() {
    return {
      //countries:" ",
      res: [],
      value:[],
      fields: ["university_name", "domains", "website_url", "state_province"],
    };
  },
  

  methods: {
    fun() {
      let response = axios.get("http://universities.hipolabs.com/search?country="+this.value);

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
    mounted() {

      this.countries = getNames();
      this.value=this.countries.map((data)=> data.domain);
         this.value.domain;
  },
  },
};
</script>


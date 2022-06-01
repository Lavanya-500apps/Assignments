<template>
  <div>
    <h1>pagination</h1>

    <b-form-select v-model="value" :options="countries"></b-form-select
    ><br /><br />

    <button @click="fun()">ClickMe</button><br /><br />

    <b-row>
      <b-col cols="5">
        <b-table
          striped
          hover
          :items="res"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
        >
        </b-table>
        <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

const { getNames } = require("country-list");

export default {
  name: "DRopdown",

  data() {
    return {
      res: [],
      countries: [],
      perPage: 3,
      currentPage: 1,

      fields: ["country", "web_pages", "name"],
    };
  },
  mounted() {
    let countries = getNames();

    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
  computed: {
    rows() {
      return this.res.length;
    },
  },

  methods: {
    fun() {
      new Promise((rejection) => {
        axios
          .get("http://universities.hipolabs.com/search?country=" + this.value)

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

<template>
  <div>
    <h1>This is Question-1 Using API</h1>

    <b-form-select v-model="value" :options="countries"></b-form-select ><br /><br />

    <b-button variant="info" @click="getData">Click Here to Get Data!</b-button
    ><br /><br />

    <b-input-group>
      <b-row
        ><b-col cols="12">
          <b-form-input id="filter-input" v-model="filter">
          </b-form-input> </b-col
      ></b-row>

      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear Text</b-button>
      </b-input-group-append>
    </b-input-group>

    <b-form-group
      v-model="sortDirection"
      label="On To Filter Particular Fields"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="filterOn"
        :aria-describedby="ariaDescribedby"
      >
        <b-form-radio value="university_name">university_name</b-form-radio>

        <b-form-radio value="domains">domains</b-form-radio>

        <b-form-radio value="website_url">website_url</b-form-radio>

        <b-form-radio value="isActive">state_province</b-form-radio>
      </b-form-checkbox-group>
    </b-form-group>

    <b-table
      :items="items"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
    >
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

const { getNames } = require("country-list");

export default {
  name: "QuE1",

  data() {
    return {
      items: [],

      fields: [],

      value: "",

      countries: [],

      filter: null,

      filterOn: [],
    };
  },

  computed: {
    sortOptions() {
      // Create an options list from our fields

      return this.fields

        .filter((f) => f.sortable)

        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },

  mounted() {
    let countries = getNames();

    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });

    if (this.countries.length) this.value = this.countries[0].text;
  },

  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },

    async getData() {
      // Get the response

      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value,

        {
          method: "GET",
        }
      );

      //console.log(response.data)

      const responseText = await response.data;

      this.items = responseText.map((row) => {
        return {
          university_name: row.name,

          domains: row.domains,

          website_url: row.web_pages[0],

          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>



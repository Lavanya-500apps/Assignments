<template>
  <div>
    <b-card>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
      <button @click="fun()">click</button>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      ></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "EXample",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: "",
      options: [],
      fields: ["userId", "id", "title", "completed"],
    };
  },
  methods: {
    async fun() {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      this.items = await response.json();
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  

};
</script>

<style></style>

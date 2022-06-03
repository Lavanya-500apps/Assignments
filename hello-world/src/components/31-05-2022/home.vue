<template>
  <div>
    <sidebar></sidebar>
    <center>
      <u>
        <h1 style="background-color: lightblue">
          Welcome to the logistic products
        </h1>
      </u>
    </center>
  </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {
  name: "HomePage",
  components: {
    sidebar,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

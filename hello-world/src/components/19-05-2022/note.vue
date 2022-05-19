<template>
  <div>
    <center>
      <br /><br />
      <b-card style="background-color: lightblue"
        ><br />
        <h1><b>Welcome to Notepad Application</b></h1>

        <b-button v-b-toggle.sidebar-left>Home</b-button>

        <b-sidebar id="sidebar-left" title="Home" shadow>
          <b>textInbox:</b><br />
          <textarea
            v-model="textInbox"
            type="text"
            id="text"
            required
          ></textarea
          ><br />
          <b-button @click="save()" type="submit" variant="warning"
            >save </b-button
          ><br />
          <p id="Text"></p>
        </b-sidebar>
        <b-button type="submit" @click="signin()" variant="outline-primary">
          <router-link to="/signup">logout</router-link>
        </b-button>
      </b-card>
    </center>
  </div>
</template>

<script>
export default {
  name: "NoteApplication",
  data() {
    return {
      textInbox: "",
    };
  },
  methods: {
    save() {
      document.getElementById("Text").innerHTML = JSON.stringify(
        this.textInbox
      );
      localStorage.setItem("textInbox", this.textInbox);
    },
  },
};
</script>

<style></style>

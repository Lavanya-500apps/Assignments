<template>
  <div>
    <center>
      <br /><br />
      <b-card style="background-color: lightblue; height: 45rem" class="w-25"
        ><br />
        <h1><b>Welcome to Notepad Application</b></h1>
        <br /><br /><br />
        <div>
          <b-dropdown
            id="dropdown-left"
            text="Home"
            variant="primary"
            class="m-2"
          >
            <b-dropdown-item @click="retrive()" variant="danger"
              >retrive</b-dropdown-item
            >
            <b-dropdown-item @click="remove()" variant="danger"
              >remove</b-dropdown-item
            >
            <b-dropdown-item @click="clear()" variant="danger"
              >clear</b-dropdown-item
            >
            <b-dropdown-item @click="logout()" variant="danger"
              >logout</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <br /><br />

        <b-button
          v-b-toggle.sidebar-left
          type="submit"
          id="mybutton"
          variant="info"
        >
          <b>✚</b>
        </b-button>

        <b-sidebar id="sidebar-left" title="Textbox">
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
          >&nbsp;<br />
          
          <p id="Text"></p>
        </b-sidebar>
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
      result: "",
    };
  },
  methods: {
    save() {
      // document.getElementById("Text").innerHTML = JSON.stringify(
      //   this.textInbox
      // );
      alert("do you want to save");
      localStorage.setItem("textInbox", this.textInbox);
      sessionStorage.setItem("textInbox", this.textInbox);
    },
    retrive() {
      this.result = this.textInbox;
    },

    logout() {
      this.$router.push("/signup");
      //this.$router.push("/login");
    },

    clear() {
      localStorage.clear();
      sessionStorage.clear();
    },

    remove() {
      localStorage.removeItem("textInbox");
      sessionStorage.removeItem("textInbox");
    },
  },
};
</script>

<style>
#mybutton {
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-color: rgb(17, 5, 245);
}
</style>

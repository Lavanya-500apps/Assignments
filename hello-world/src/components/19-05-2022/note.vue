<template>
  <div>
    <center>
      <br /><br />
      <b-card style="background-color: lightgreen; height: 45rem" class="w-25"
        ><br />
        <h1><b>Welcome to Notepad Application</b></h1>
        <br /><br /><br />
        <!-- <div>
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
        <br /><br /> -->
        <div>
          <b-dropdown
            id="dropdown-left"
            text="Home"
            variant="primary"
            class="m-2"
          >
            <b-dropdown-item @click="logout()" variant="danger"
              >logout</b-dropdown-item
            >
          </b-dropdown>
        </div>

        <b-button
          v-b-toggle.sidebar-left
          type="submit"
          id="mybutton"
          variant="info"
        >
          <b>✚</b>
        </b-button>

        <b-sidebar id="sidebar-left" title="Textbox">
          <b>Message:</b><br />
          <textarea v-model="message" type="text" id="text" required></textarea
          ><br />
          <b-form-file
            accept=".jpg, .png, .gif, .csv"
            v-model="file"
            plain
          ></b-form-file><br><br>
          <b-button @click="save()" type="submit" variant="warning"
            >save </b-button
          >&nbsp;
          <b-button @click="retrive()" type="submit" variant="warning"
            >retrive </b-button
          >&nbsp;
          <b-button @click="remove()" type="submit" variant="warning"
            >remove</b-button
          >&nbsp;
          <b-button @click="clear()" type="submit" variant="warning"
            >clear </b-button
          >&nbsp;<br />

          <p id="Text"></p>
          {{ data }}<br /><br />
          <b-card>{{ data1 }}</b-card>
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
      message: "",
      data: "",
      data1: "",
    };
  },
  methods: {
    save() {
      // document.getElementById("Text").innerHTML = JSON.stringify("message:" +
      //   this.message
      // );
      alert("do you want to save");
      localStorage.setItem("message", this.message);
      sessionStorage.setItem("message", this.message);
      this.data = "message:" + localStorage.getItem("message");
      if(this.data)this.message="";
      return this.data;
    },
    retrive() {
      this.data1 = "message:" + localStorage.getItem("message");

      return this.data1;
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
      localStorage.removeItem("message");
      sessionStorage.removeItem("message");
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

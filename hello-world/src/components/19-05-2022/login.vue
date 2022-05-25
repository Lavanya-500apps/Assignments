<template>
  <div>
    <center>
      <br /><br /><br /><br /><br />
      <b-card style="width: 30rem; height: 500px; background-color: lightgreen"
        ><br />
        <b-form>
          <h3><u>Sign In <b-avatar variant="success" id="avatar"></b-avatar></u></h3><br>

          <b-col>
            <b>Email address:</b>
            <b-form-input
              v-model="Form.email"
              type="email"
              id="mail"
              class="form-control form-control-lg"
              placeholder="Enter email"
              required
            >
            </b-form-input></b-col
          ><br />

          <b-col>
            <b>Password:</b>
            <b-form-input
              v-model="Form.password"
              type="password"
              id="password"
              class="form-control form-control-lg"
              placeholder="Enter password"
              required
            ></b-form-input> </b-col
          ><br /><br />

          <b-button
            type="submit"
            @click="signin()"
            variant="outline-primary"
            class="btn btn-dark btn-lg btn-block"
          >
            Sign In </b-button
          >&nbsp;<br />
          <b-button variant="danger" type="Reset">reset</b-button>

          <!-- <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgetpassword">Forgot password ?</router-link>
          </p> -->
        </b-form>
      </b-card>
    </center>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      Form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      if (this.Form.email && this.Form.password) {
        alert("login successfull");
        //this.$router.push("/note");
        window.location.assign("http://localhost:8080/#/note");
      } else {
        alert("please give email and password");
      }
      localStorage.setItem("email", this.Form.email);
      localStorage.setItem("password", this.Form.password);
      sessionStorage.setItem("email", this.Form.email);
      sessionStorage.setItem("password", this.Form.password);
    },
  },
};
</script>

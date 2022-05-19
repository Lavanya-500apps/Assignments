<template>
  <div>
    <center>
      <br /><br /><br /><br /><br />
      <b-card style="width: 30rem; height: 500px; background-color: lightgreen"
        ><br />
        <b-form>
          <h3><u>Sign In </u></h3>

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
          ><br />

          <b-button size="lg" @click="signin()" variant="outline-primary">
            <router-link to="/note">Sign in</router-link>
          </b-button>
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
      localStorage.setItem("email", this.Form.email);
      localStorage.setItem("password", this.Form.password);
      sessionStorage.setItem("email", this.Form.email);
      sessionStorage.setItem("password", this.Form.password);
    },
  },
};
</script>

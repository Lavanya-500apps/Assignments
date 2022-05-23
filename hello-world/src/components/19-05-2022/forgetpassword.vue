<template>
  <div>
    <center>
      <br /><br /><br /><br /><br />
      <b-card style="width: 30rem; height: 500px; background-color: lightgreen"
        ><br />
        <b-form>
          <h3><u>ForgetPassword</u></h3>

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

          <b-button
            type="submit"
            @click="forgetPassword()"
            class="btn btn-dark btn-lg btn-block"
          >
            Reset password
          </b-button>
        </b-form>
      </b-card>
    </center>
  </div>
</template>

<script>
export default {
  name: "forgetPassword",
  data() {
    return {
      Form: {
        email: "",
      },
    };
  },
  methods: {
    forgetpassword() {
      localStorage.setItem("email", this.Form.email);

      sessionStorage.setItem("email", this.Form.email);
      console.log("lavanya");
    },
  },
};
</script>

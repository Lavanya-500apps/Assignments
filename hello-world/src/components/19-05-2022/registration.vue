<template>
  <div>
      <div v-if="!enable_note">
    <b-tabs pills card vertical>
      <b-tab title="signup" active>
        <center>
          <br /><br /><br /><br /><br />
          <b-card
            style="width: 30rem; height: 500px; background-color: lightgreen"
            ><br />
            <b-form>
              <h3><u>Sign Up </u></h3>

              <b-col>
                <b>Email address:</b>
                <b-form-input
                  v-model="Form.email"
                  type="email"
                  id="mail"
                  class="form-control form-control-lg"
                  placeholder="Enter email"
                  required
                ></b-form-input> </b-col
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

              <b-button
                type="submit"
                @click="signup()"
                class="btn btn-dark btn-lg btn-block"
                >Sign Up</b-button
              >
              <p>
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
              </p>
            </b-form>
          </b-card>
        </center>
      </b-tab>

      <b-tab title="SignIn" active>
        <center>
          <br /><br /><br /><br /><br />
          <b-card
            style="width: 30rem; height: 500px; background-color: lightgreen"
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
                ></b-form-input> </b-col
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

              <b-button
                type="submit"
                @click="signIn()"
                class="btn btn-dark btn-lg btn-block"
              >
                Sign In
              </b-button>

              <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgetpassword"
                  >Forgot password ?</router-link
                >
              </p> -->
            </b-form>
          </b-card>
        </center>
      </b-tab>

      <!-- <b-tab>
        <center>
          <br /><br /><br /><br /><br />
          <b-card
            style="width: 30rem; height: 500px; background-color: lightgreen"
            ><br />
            <b-form>
              <h3><u>ForgetPassword </u></h3>

              <b-col>
                <b>Email address:</b>
                <b-form-input
                  v-model="Form.email"
                  type="email"
                  id="mail"
                  class="form-control form-control-lg"
                  placeholder="Enter email"
                  required
                ></b-form-input> </b-col
              ><br />

              <b-button
                type="submit"
                @click="ForgetPassword()"
                class="btn btn-dark btn-lg btn-block"
              >
                Reset password
              </b-button>
            </b-form>
          </b-card>
        </center>
      </b-tab> -->
      <b-tab title="Home" active>
        <center>
          <br /><br />
          <b-card style="background-color: lightblue"
            ><br />
            <h1><b>Welcome to the NoteApplication</b></h1>
            <h2>please signup to use this application</h2>
          </b-card>
        </center>
      </b-tab>
    </b-tabs>
      </div>
    <Note v-else/>
  </div>
</template>

<script>
import Note from "./note.vue"
export default {
    components:{Note},
  name: "registrationPage",
  data() {
    return {
        enable_note:false,
      Form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      localStorage.setItem("email", this.Form.email);
      localStorage.setItem("password", this.Form.password);
      sessionStorage.setItem("email", this.Form.email);
      sessionStorage.setItem("password", this.Form.password);
     this.enable_note=true;
      
    },
    signIn() {
      localStorage.setItem("email", this.Form.email);
      localStorage.setItem("password", this.Form.password);
      sessionStorage.setItem("email", this.Form.email);
      sessionStorage.setItem("password", this.Form.password);
      this.enable_note=true;
      
    }
  },
};
</script>

<template>
  <div>
    <center>
      <h3 align="left">CRUD Operations</h3>
      <b-row>
        <b-col cols="5">
          <crud2
            :columns="['firstname', 'lastname', 'action']"
            :form-fields="{ firstname: '', lastname: '' }"
          >
            <!-- your form input fields in this slot-->
            <template v-slot:input-fields="{ formdata }">
              <b-row>
                <b-col cols="5">
                  Enter your first_name:
                  <b-form-input
                    id="input-2"
                    v-model="formdata.firstname"
                    required
                    placeholder="Enter firstname"
                  >
                  </b-form-input
                  ><br />
                  Enter your second_name:
                  <b-form-input
                    id="input-2"
                    v-model="formdata.lastname"
                    required
                    placeholder="Enter lastname"
                  >
                  </b-form-input
                  ><br />
                </b-col>
              </b-row>
            </template>
          </crud2>
        </b-col>
      </b-row>
    </center>
  </div>
</template>

<script>
import crud2 from "./crud2.vue";

export default {
  name: "CruD",
  components: { crud2 },
};
</script>

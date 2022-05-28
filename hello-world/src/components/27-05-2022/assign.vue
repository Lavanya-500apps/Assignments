<template>
  <div>
    <nav>
      <h1 style="color: white"><b>Student Details</b></h1>
      &nbsp;
      <b-col cols="2"
        ><h2 id="card" class="form-control form-control-lg">
          <b>LoginUser:</b>Lavanya
        </h2></b-col
      >
      <b-card>
        <center>
          <br /><br /><b-row>
            <b-col cols="5">
              <cassign
                :columns="[
                  'Sno',
                  'Name',
                  'age',
                  'gender',
                  'dateofbirth',
                  'class',
                  'action',
                ]"
                :formFields="{
                  //Sno: '',
                  Name: '',
                  age: '',
                  gender: '',
                  dateofbirth: '',
                  class: '',
                }"
              >
                <!--  form input fields in this slot-->
                <template v-slot:input-fields="{ formdata }">
                  <b-row>
                    <b-col cols="5">
                      <!-- <b> S.no:</b>
                      <b-form-input
                        id="input-1"
                        v-model="formdata.Sno"
                        type="number"
                        required
                        placeholder="Enter serialNumber"
                      >
                      </b-form-input
                      ><br /> -->
                      <b>Name:</b>
                      <b-form-input
                        id="input-2"
                        v-model="formdata.Name"
                        type="text"
                        required
                        placeholder="Enter name"
                      >
                      </b-form-input
                      ><br />
                      <b> Age:</b>
                      <b-form-input
                        id="input-3"
                        v-model="formdata.age"
                        type="number"
                        min="1"
                        max="100"
                        required
                        placeholder="Enter age"
                      >
                      </b-form-input
                      ><br />
                      <b> Gender:</b>
                      <b-form-select
                        id="input-4"
                        v-model="formdata.gender"
                        :options="genderOptions"
                        value-field="gender"
                        text-field="gender"
                        required
                      >
                      </b-form-select
                      ><br />
                      <b>DateOfBirth:</b>
                      <b-form-input
                        id="input-5"
                        v-model="formdata.dateofbirth"
                        type="date"
                        required
                        placeholder="Enter Dateofbirth"
                      >
                      </b-form-input
                      ><br />
                      <b>Class:</b>
                      <b-form-select
                        id="input-6"
                        v-model="formdata.class"
                        :options="classOptions"
                        value-field="class"
                        text-field="class"
                        required
                      >
                      </b-form-select
                      ><br /><br />
                    </b-col>
                  </b-row>
                </template>
              </cassign>
            </b-col>
          </b-row>
        </center>
      </b-card>
    </nav>
  </div>
</template>

<script>
import cassign from "./cassign.vue";

export default {
  name: "ASSIGNMENT",
  components: { cassign },
  data() {
    return {
      genderOptions: [
        { gender: "Select Gender" },
        { gender: "Male" },
        { gender: "Female" },
      ],

      classOptions: [
        { class: "Select Class" },
        { class: "B-tech" },
        { class: "Degree" },
        { class: "Diploma" },
        { class: "Inter" },
        { class: "SSC" },
      ],
    };
  },
  
};
</script>
<style>
nav {
  background-color: rgb(46, 46, 103);
}
#card {
  position: relative;
  left: 1570px;
}
.css-serial {
 counter-reset: serial-number; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
 counter-increment: serial-number; /* Increment the serial number counter */
 content: counter(serial-number); /* Display the counter */
}
</style>

<template>
  <div>
    <nav>
      <h1 style="color: white">Student Details</h1>&nbsp;&nbsp;&nbsp;
      <b-col cols="2"
        ><h2 id="card" class="form-control form-control-lg">
          LoginUser:Lavanya
        </h2></b-col
      >
      <b-card>
        <center>
          <br /><br /><br /><b-row>
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
                  Sno: '',
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
                      S.no:
                      <b-form-input
                        id="input-1"
                        v-model="formdata.Sno"
                        type="number"
                        required
                        placeholder="Enter serialNumber"
                      >
                      </b-form-input
                      ><br />
                      Name:
                      <b-form-input
                        id="input-2"
                        v-model="formdata.Name"
                        type="text"
                        required
                        placeholder="Enter name"
                      >
                      </b-form-input
                      ><br />
                      Age:
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
                      Gender:
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
                      DateOfBirth:
                      <b-form-input
                        id="input-5"
                        v-model="formdata.dateofbirth"
                        type="date"
                        required
                        placeholder="Enter Dateofbirth"
                      >
                      </b-form-input
                      ><br />
                      Class:
                      <b-form-select
                        id="input-6"
                        v-model="formdata.class"
                        :options="classOptions"
                        value-field="class"
                        text-field="class"
                        required
                      >
                      </b-form-select
                      ><br /><br>
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
        { id: null, gender: "select Gender" },

        { id: 1, gender: "male" },

        { id: 2, gender: "female" },
      ],

      classOptions: [
        { id: null, class: "select class" },

        { id: 1, class: "B-tech" },
        { id: 2, class: "degree" },
        { id: 3, class: "diploma" },
        { id: 4, class: "inter" },
        { id: 5, class: "SSC" },
      ],
    };
  },
};
</script>
<style>
nav {
  background-color: rgb(46, 46, 103);
}
</style>

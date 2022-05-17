<template>
  <div>
    
      <b-card center>
        <h1><u>Student Data</u></h1>
        <b-rows>
          <b-col cols="2">
            <b>students:</b>
            <b-form-select
              v-model="studentValue"
              id="names"
              :options="students"
              value-field="id"
              text-field="Name"
            >
            </b-form-select
            ><br /><br />

            <b>subjects:</b>
            <b-form-select
              v-model="selected"
              id="subjects"
              :options="subjects"
              value-field="name"
              text-field="id"
            ></b-form-select
            ><br /><br />
            <div>
              Selected: <strong>{{ selected }}</strong>
            </div>

            <b>date:</b>
            <b-form-datepicker v-model="dateValue" id="date"></b-form-datepicker
            ><br />
            <b> marks:</b
            ><b-form-input
              v-model="marksValue"
              type="number"
              id="marks"
              placeholder="enter student marks upto 100"
              min="0"
              max="100"
            ></b-form-input
            ><br />
            <b>remarks:</b><br>
            <b-textarea
              v-model="remarksValue"
              type="text"
              id="remarks"
            ></b-textarea
            ><br />
            <p id="StudentForm"></p>
            <b-button variant="success" @click="object_data()">Save</b-button
            ><br /><br />

            <b-button variant="danger" @click="table_data()">submit</b-button
            ><br /><br />
            
            <b-table striped hover :items="StudentData"> </b-table> </b-col
        ></b-rows>
      </b-card>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "StudentForm",
  data() {
    return {
      studentData: [
        {
          studentsid: "",
          subject: "",
          date: "",
          marks: "",
          remarks: "",
        },
      ],
      StudentData: [
        {
          studentsid: "",
          subject: "",
          date: "",
          marks: "",
          remarks: "",
        },
      ],
      students: [],
      selected: null,
      subjects: [
        { id: "select subject", name: null },
        { id: 1, name: "English" },
        { id: 2, name: "Mathematics" },
        { id: 3, name: "Electronics" },
      ],
      // subjects: [
      //     {value: null, text:'select subject'},
      //   { value: 'english', text: '1' },
      //   { value: 'mathematics', text: '2' },
      //   { value: 'electronics', text: '3' }],
    };
  },
  async mounted() {
    await this.getData();
  },

  methods: {
    async getData() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.students = await response.data;
    },
    table_data() {
      this.StudentData.push({
        studentsid: document.getElementById("names").value,
        subject: document.getElementById("subjects").value,
        date: this.dateValue,
        marks: document.getElementById("marks").value,
        remarks: document.getElementById("remarks").value,
      });
    },
    object_data() {
      this.studentData.push({
        studentsid: document.getElementById("names").value,
        subject: document.getElementById("subjects").value,
        date: this.dateValue,
        marks: document.getElementById("marks").value,
        remarks: document.getElementById("remarks").value,
      });
      document.getElementById("StudentForm").innerHTML = JSON.stringify(
        this.studentData
      );
    },
  },
};
</script>

<style></style>

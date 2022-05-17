<template>
  <div>
    <h1><u>Student Data</u></h1>
    <b-form @submit="display_data">
      <b-row>
        <b-col cols="2">
          <b>students:</b>
          <b-form-select
            v-model="StudentData.studentsid"
            id="names"
            :options="students"
            value-field="id"
            text-field="Name"
            required
          >
          </b-form-select
          ><br /><br
        /></b-col>
        <b-col cols="2">
          <b>subjects:</b>
          <b-form-select
            v-model="StudentData.subject"
            id="subjects"
            :options="subjects"
            value-field="id"
            text-field="name"
            required
          ></b-form-select
          ><br /><br />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <b>date:</b>
          <b-form-datepicker
            v-model="StudentData.date"
            id="date"
            required
          ></b-form-datepicker
          ><br />
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="2">
          <b> marks:</b
          ><b-form-input
            v-model="StudentData.marks"
            type="number"
            id="marks"
            placeholder="enter student marks upto 100"
            min="0"
            max="100"
            required
          ></b-form-input
          ><br
        /></b-col>
        <b-col cols="2">
          <b>remarks:</b><br />
          <b-textarea
            v-model="StudentData.remarks"
            type="text"
            id="remarks"
            required
          ></b-textarea
          ><br /></b-col
      ></b-row>

      <b-row>
        <b-col >
          <p id="StudentForm"></p>
          <b-button variant="success" type="submit">submit</b-button
          ><br /><br />
          <b-table striped hover sticky-header :items="StudentData"> </b-table> </b-col
      ></b-row>
    </b-form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "StudentForm",
  data() {
    return {
      StudentData: 
        {
          studentsid: "",
          subject: "",
          date: "",
          marks: "",
          remarks: "",
        },
      
      students: [],
      subjects: [
        { id: null, name: "select subject" },
        { id: 1, name: "English" },
        { id: 2, name: "Mathematics" },
        { id: 3, name: "Electronics" },
      ],
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
    display_data() {
      // this.StudentData.push({
      //   studentsid: this.studentValue,
      //   subject: this.subjectValue,
      //   date: this.dateValue,
      //   marks: this.marksValue,
      //   remarks: this.remarksValue,
      // });
      document.getElementById("StudentForm").innerHTML = JSON.stringify(
        this.StudentData
      );
    },
  },
};
</script>

<style></style>

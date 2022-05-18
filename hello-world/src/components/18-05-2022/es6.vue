<template>
  <div>
    <h1><u>ES6 concepts</u></h1>

    <h2>student data form</h2>
    
    <b-button variant="danger" @click="student_data()">studentdata</b-button>&nbsp;
    <b-button variant="success" v-on:click="filter()">filter</b-button>&nbsp;
    <b-button variant="info" v-on:click="find()">find</b-button>&nbsp;
    <b-button variant="warning" v-on:click="map()">map</b-button>&nbsp;
    <b-button variant="primary" v-on:click="foreach()">foreach</b-button><br>
    <p id="StudentForm"></p>
    <p>{{ filtervalue }}</p>
    <p>{{ findvalue }}</p>
    <p>{{ mapvalue }}</p>
    <p>{{ foreachvalue }}</p>
    <b-table
      striped
      hover
      sticky-header
      :items="studentData"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
export default {
  name: "ES6_concepts",
  data() {
    return {
      studentData: [],
      filtervalue: [],
      findvalue: [],
      mapvalue: [],
      foreachvalue: []
    };
  },

  methods: {
    async student_data() {
      let response = await fetch(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.studentData = await response.json();
    },
    filter() {
      this.filtervalue=this.studentData.filter((form)=>form.Age=="27");
      return this.filtervalue;
    },
    find() {
       this.findvalue=this.studentData.find((form)=>form.Age=="27");
      return this.findvalue;
    },
    map() {
    //    this.mapvalue=this.studentData.map((form)=>form.Age=="27");
    //   return this.mapvalue;
      this.mapvalue=this.studentData.map((form)=>form.Age+2);
      return this.mapvalue;
    },
    foreach() {
       this.foreachvalue=this.studentData.forEach((form)=>
       document.write((form.Age+2)+"<br>"));
    }
  },
};
</script>

<style></style>

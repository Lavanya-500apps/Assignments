<template>
  <div>
    <center>
      <ccard
        :columns="['Name', 'mobile_number', 'countryname']"
        :form-fields="{ Name: '',mobile_number:'',country:'' }"
        @user_data="user_dataa"
      >
        <!-- <b-card>{{contactchild}}</b-card> -->
        <template v-slot:input-fields="{ formdata }">
          Name:
          <b-form-input type="text" v-model="formdata.Name" required placeholder="Enter name"></b-form-input>
          <br />mobile_number:
          <b-form-input
            id="value"
            placeholder="Enter Mobile Number"
            v-model="formdata.mobile_number"
            required
          ></b-form-input>
          <br />countryname:
          <b-form-select text="countryname" v-model="formdata.countryname" :options="getNames"></b-form-select>
        </template>
      </ccard>
    </center>


    <div v-if="user_data.length">
      <b-card style="max-width: 20rem;" :key="index" v-for="(data, index) in user_data">
        Name: {{Name=data.Name}}
        <br />
        Mobile: {{data.mobile_number}}
        <br />


        Country: {{data.countryname}}
        <b-button @click="Edit(data.item)" variant="info">Update</b-button>
        <b-img :src="getFlag(data.countryname)" style="max-height: 25px; max-width: 40px;" />
      </b-card>
    </div>
  </div>
</template>


<script>
const { getNames } = require("country-list");
import ccard from "./ccard.vue";
export default {
  name: "contact_parent",
  components: { ccard },
  computed: {
    getNames
  },
  data() {
    return {
      Name: "",
      mobile_number: " ",
      country: "",
      user_data: []
    };
  },
  methods: {
    user_dataa(data) {
      this.user_data = data;
      console.log("4589964126", data);
    },


    getFlag(countryName) {
      console.log("Country Name : " + countryName);
      let flagUrl = "";
      if (countryName == "India")
        flagUrl = "https://flagpedia.net/data/flags/h120/in.webp";
      else if (
        countryName == "United Kingdom of Great Britain and Northern Ireland"
      )
        flagUrl =
          "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
      else if (countryName == "Australia")
        flagUrl =
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg";
      else if (countryName == "United States of America")
        flagUrl =
          "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
      console.log("flat url : " + flagUrl);
      return flagUrl;
    }
  },
  Edit(data) {
    this.modalShow = true;
    this.editedIndex = this.data.indexOf(this.user_data);
    this.editedItem = Object.assign({}, data);
  },
}
</script>
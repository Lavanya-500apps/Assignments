<template>
  <div>
      
      <b-rows >
              <b-col cols=4>
      students: <b-form-select v-model="value" id="demo1" :options="students" value-field="id"
      text-field="Name">
      </b-form-select><br><br>
    
     subjects: <b-form-select v-model="selected" id="demo2" :options="subjects" value-field="name"
      text-field="id"></b-form-select><br><br>
    <div>Selected: <strong>{{ selected }}</strong></div>

     date: <b-form-datepicker  v-model="value" id="demo3"></b-form-datepicker><br>
     marks:<b-form-input v-model="value" type="number"
      id="demo4" placeholder="enter student marks upto 100"
       min="0" max="100"></b-form-input><br>
     remarks:<b-form-input v-model="value" type="text"
      id="demo5" ></b-form-input><br>
     
      <b-button variant="danger" @click="fun1()">submit</b-button><br><br>
          <b-rows>
              <b-col cols=4>
        <b-table striped hover :items="studentdata" > </b-table>
              </b-col></b-rows>
 </b-col></b-rows> 
        
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "TAsk",
  data() {
    return {
        
        studentdata:[{
        students:"",
        subject:"",
        //date:"",
        marks:"",
        remarks:"",
        }],
        students:[],
        selected: null,
        // subjects: [
        //     {value: null, text:'select subject'},
        //   { value: 'english', text: '1' },
        //   { value: 'mathematics', text: '2' },
        //   { value: 'electronics', text: '3' }],
         subjects: [{id:'select subject',name: null, },
          {id : 1, name : 'English'} , 
         { id: 2 , name : 'Mathematics'} ,
          { id: 3 , name : 'Electronics'} ]

      };
  },
  async mounted(){
       await this.fun(); 
  },
  
  methods: {
    async fun() {
      let response = 
      await axios.get("https://api.sampleapis.com/baseball/battingAvgsSingleSeason");
      this.students= await response.data;
    },
    fun1(){

        this.studentdata.push({

        students: document.getElementById("demo1").value,
        subject: document.getElementById("demo2").value,
        //date: document.getElementById("demo3").value,
        marks: document.getElementById("demo4").value,
        remarks: document.getElementById("demo5").value,
       
         });
           
          },
  },
};
</script>

<style></style>

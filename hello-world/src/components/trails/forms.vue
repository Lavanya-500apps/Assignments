<template>
   <div>
      <b-modal id="modal1" title="Add" >
    <b-card>
            <b-form @submit="Add_data">
      <b-row>
        <b-col>
          <b>Name:</b>
          <b-form-input
            v-model="Addname"
            id="name"
            type="text"
            placeholder="Enter name"
            required
          >
          </b-form-input
          ><br /></b-col>
         <b-col >
          <b>Jobrole:</b>
          <b-form-input
            v-model="Addjobrole"
            id="jobrole"
            type="text"
            placeholder="Enter jobrole"
            required
          >
          </b-form-input
          ><br
        /></b-col>
         <b-col >
          <b>PhoneNUmber:</b>
          <b-form-input
            v-model="Addphonenumber"
            id="phonenumber"
            type="number"
            placeholder="Enter number"
            required
          >
          </b-form-input
          ><br
        /></b-col>
        <b-col >
          <b>Email:</b>
          <b-form-input
            v-model="Addemail"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          >
          </b-form-input
          ><br
        /></b-col>
         <b-col >
          <b>LinkedinURL:</b>
          <b-form-input
            v-model="Addlinkedinurl"
            id="linkedinurl"
            placeholder="Enter linkedinurl"
            type="text"
            required
          >
          </b-form-input
          ><br
        /></b-col>
      </b-row>
        </b-form>
    </b-card>
    </b-modal>
    <b-button v-b-modal.modal1 @click="save()" variant="info"
              >+</b-button>
  </div>
</template>

<script>
export default {
    name:"FormData",
    data() {
    return {
      modal1: false,
    };
  },
  methods:{
    save() {
      this.modal1 = true;
    },
  }

}
</script>

<style>

</style>
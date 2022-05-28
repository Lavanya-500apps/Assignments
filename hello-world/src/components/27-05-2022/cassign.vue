<template>
  <div class="text">
    <div class="text-left">
      <b-button @click="Create()" variant="info">ADD Student</b-button>
    </div>
    <br /><br />
    <b-table striped hover bordered :items="tableData" :fields="columns">
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Edit</b-button>
        <b-button @click="Delete(data.item)" variant="danger">Delete</b-button>
        
      </template>
    </b-table>
    <b-modal v-model="modalShow" :title="Title" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>
   
        <b-button type="submit" variant="success"> Submit</b-button>&nbsp;
        <b-button type="Reset" variant="danger"> Reset</b-button>&nbsp;
      </b-form>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: "CRUDoperations",
  props: ["columns", "formFields"],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Student" : "Edit Details";
    },
  },
  methods: {
    Create() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
      this.editedIndex = -1;
     
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete(item) {
      const index = this.tableData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tableData.splice(index, 1);
      
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
        this.editedIndex = -1;
      }, 1000);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
       
      } else {
        this.tableData.push(this.editedItem);
        
      }
      this.close();
    },
  },
  
};
</script>

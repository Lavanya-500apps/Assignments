<template>
  <div>
    <div class="text-left">
      <b-button @click="Create()" variant="info"><b>ADD Student</b></b-button>
    </div>
    <br /><br />
    <b-table striped hover bordered :items="tableData" :fields="columns">
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Edit</b-button>&nbsp;
        <b-button @click="Delete(data.item)" variant="danger">Delete</b-button>
      </template>
    </b-table>
    <b-modal v-model="modalShow" :title="Title" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields" > </slot>
        <b-button id="submit" type="submit" variant="success"><b-icon-save/></b-button>&nbsp;
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Student_Details",
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
      this.editedItem.Sno =this.tableData.length+1; 
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
<style>
#submit{
  position: relative;
  bottom: 560px;
  width:40px;
  height:35px;
  right:-400px;
}
</style>

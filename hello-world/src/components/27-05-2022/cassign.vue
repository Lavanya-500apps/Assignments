<template>
  <div>
    <div class="text-left">
      <b-button @click="Create()" variant="info"><b>ADD Student</b></b-button>
    </div>
    <br /><br />
    <b-table
      class="css-serial"
      striped
      hover
      bordered
      :items="tableData"
      :fields="columns"
    >
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Edit</b-button>&nbsp;
        <b-button v-b-modal.modal-1 @click="hello(data.item)" variant="danger"
          >Delete</b-button
        >
      </template>

      <!-- <template>
        <b-img v-if Gender="this.Male"></b-img>
        <b-img v-else></b-img>
      </template> -->
    </b-table>
    <b-modal v-model="modalShow" :title="Title" hide-footer>
      <b-form @submit="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>
        <b-button
          id="submit"
          type="submit"
          v-b-tooltip.hover.left
          title="Save"
          variant="success"
          ><b-icon-save /></b-button
        >&nbsp;
      </b-form>
    </b-modal>
    <b-modal
      id="modal-1"
      ref="deleteConfirmation"
      title="Delete Details"
      @ok="Delete"
    >
      Do you want to delete data?
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
      delete_data: null,
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
      // this.editedItem.Sno =this.tableData.length+1;
      this.editedIndex = -1;
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete() {
      console.log("this.item", this.delete_data);
      const index = this.tableData.indexOf(this.delete_data);
      //confirm("Are you sure you want to delete this item?") &&
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
    hello(data) {
      this.delete_data = data;
      this.$refs.deleteConfirmation.show();
    },
  },
};
</script>
<style>
#submit {
  position: relative;
  bottom: 500px;
  width: 40px;
  height: 35px;
  right: -400px;
}
.css-serial {
  counter-reset: Student_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: Student_details; /* Increment the serial number counter */
  content: counter(Student_details); /* Display the counter */
}
</style>

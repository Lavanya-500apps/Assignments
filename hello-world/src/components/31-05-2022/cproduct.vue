<template>
  <div>
    <b-icon icon="person" id="person" scale="1.5"></b-icon>
    <b-icon icon="envelope" id="envelope" scale="1.5"></b-icon>
    <b-icon icon="cursor" id="cursor" variant="dark" scale="1.5"></b-icon>
    <b-input-group>
      <b-row
        ><b-col cols="12">
          <b-form-input id="filter-input" v-model="filter">
          </b-form-input> </b-col
      ></b-row>

      <b-input-group-append>
        <b-button :disabled="!filter" variant="danger" @click="filter = ''"
          >clear</b-button
        >
      </b-input-group-append> </b-input-group
    >
    <br /><br />
    <div class="text-left">
      <b-button @click="add_product()" variant="outline-primary"
        ><b>Add <b-icon-plus-circle-fill /></b></b-button
      >&nbsp;
      <b-button @click="export_product()" variant="outline-primary"
        ><b>Export<b-icon-arrow-up-short /></b></b-button
      >&nbsp;
      <b-button @click="import_product()" variant="outline-primary"
        ><b
          >Import<u><b-icon-arrow-down-short /></u></b></b-button
      >&nbsp;<br /><br />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
    <br /><br />
    <b-form-file accept=".jpg, .png, .gif, .csv" v-model="file" plain></b-form-file
    ><br /><br />
    <b-table
      class="css-serial"
      striped
      hover
      bordered
      :items="tableData"
      :fields="Columns"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
    >
      <template #cell(operation)="data">
        <b-button @click="Edit(data.item)" variant="success"
          >Edit <b-icon-pencil-fill /></b-button
        >&nbsp;
        <b-button v-b-modal.modal-1 @click="remove(data.item)" variant="danger"
          >Delete <b-icon-x-square
        /></b-button>
      </template>
    </b-table>
    <b-modal
      v-model="modalShow"
      :title="Title"
      header-bg-variant="primary"
      body-bg-variant="success"
      hide-footer
    >
      <b-card style="width: 29rem; height: 500px; background-color: lightgreen">
        <b-form @submit="save">
          <slot :formdata="editedItem" name="input-fields"> </slot>
          <b-button
            id="submit_data"
            type="submit"
            v-b-tooltip.hover.left
            title="Save"
            variant="success"
            ><b-icon-save /></b-button
          >&nbsp;
        </b-form>
      </b-card>
    </b-modal>
    <b-modal
      id="modal-1"
      ref="deleteConfirmation"
      title="Delete Details"
      header-bg-variant="primary"
      @ok="Delete"
    >
      <b-card style="width: 29rem; height: 100px; background-color: lightgreen">
        Do you want to delete data?
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Product_Details",
  props: ["Columns", "formFields"],
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
      delete_data: null,
      filter: null,
    };
  },

  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Productt" : "Edit Details";
    },
    rows() {
      return this.tableData.length;
    },
  },

  methods: {
    add_product() {
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
    remove(data) {
      this.delete_data = data;
      this.$refs.deleteConfirmation.show();
    },
  },
};
</script>
<style>
#submit_data {
  position: relative;
  bottom: 480px;
  width: 40px;
  height: 35px;
  right: -380px;
}
#person {
  position: relative;
  top: -100px;
  left: -652px;
}
#envelope {
  position: relative;
  top: -100px;
  left: -360px;
}
#cursor {
  position: relative;
  top: -100px;
  left: -50px;
}
.css-serial {
  counter-reset: Product_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: Product_details; /* Increment the serial number counter */
  content: counter(Product_details); /* Display the counter */
}
</style>

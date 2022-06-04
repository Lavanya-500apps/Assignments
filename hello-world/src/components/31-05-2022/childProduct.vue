<template>
  <div>
    <b-form id="form">
      <b-row
        ><b-col cols="2">
          <b-form-input
            type="text"
            id="product"
            placeholder="Enter product"
            v-model="filter"
          >
          </b-form-input></b-col
        ><b-col cols="2">
          <b-form-input
            type="text"
            id="sku"
            placeholder="Enter sku"
            v-model="filter1"
          ></b-form-input></b-col
        ><b-col cols="2">
          <b-form-input
            type="text"
            id="type"
            placeholder="Enter type"
            v-model="filter2"
          ></b-form-input></b-col
        ><b-col cols="2">
          <b-icon icon="person" id="person" scale="1.5"></b-icon>
          <b-icon icon="envelope" id="envelope" scale="1.5"></b-icon>
          <b-icon icon="cursor" id="cursor" variant="dark" scale="1.5"></b-icon>
          <b-button
            type="submit"
            id="search"
            variant="primary"
            :disabled="!filter"
            @click="filter = ''"
            >Search</b-button
          >
        </b-col></b-row
      >
    </b-form>
    <br /><br />
    <div class="text-left">
      <b-button @click="add_product()" variant="outline-primary"
        ><b>Add <b-icon-plus-circle-fill /></b></b-button
      >&nbsp;
      <b-button @click="export_product()" variant="outline-primary"
        ><b>Export<b-icon-arrow-up-short /></b></b-button
      >&nbsp;
      <b-button @click="read_file()" variant="outline-primary"
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
    <p id="file"></p>
    <div class="text-left">
      <input type="file" ref="doc"  />   
    </div>
    <br /><br />
    <b-table
      class="css-serial"
      striped
      hover
      bordered
      :items="tableData"
      :fields="columns"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
    >
      <template #cell(operation)="data">
        <b-button @click="Edit(data.item)" variant="success"
          >Edit <b-icon-pencil-fill /></b-button
        >&nbsp;
        <b-button v-b-modal.modal-1 @click="remove(data.item)" variant="danger"
          >Delete <b-icon-trash
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
      title="Delete Item"
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
  props: ["columns", "formFields"],
  components: {},
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
      delete_data: null,
      filter: null,
      file: null,
      
      
    };
  },

  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Product" : "Edit Details";
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
    read_file() {
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          console.log(res.target.result);
           document.getElementById("file").innerHTML = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        reader.onload = (res) => {
          console.log(res.target.result);
          document.getElementById("file").innerHTML = res.target.result;
          const convert = csv => {
          const myArray = csv.split("\n");
                   const keys = myArray[0].split(',')
                   //const index = myArray.length-1
                   return myArray.splice(1).map(myArray => {
                     return myArray.split(',').reduce((acc, cur, i) => {
                       const toAdd = {};
                       toAdd[keys[i]] = cur;
                       return { ...acc, ...toAdd};
                     },{})
                   })
          }
          const coverted = res.target.result
          console.log(convert(coverted))
          this.tableData=convert(coverted);
          console.log( this.tableData)
          return this.tableData;
         
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    },
  },
};
</script>
<style>
#search {
  position: relative;
  left: -140px;
}
#submit_data {
  position: relative;
  bottom: 480px;
  width: 40px;
  height: 35px;
  right: -380px;
}
#person {
  position: relative;
  top: -5px;
  left: -780px;
}
#envelope {
  position: relative;
  top: -5px;
  left: -480px;
}
#cursor {
  position: relative;
  top: -5px;
  left: -180px;
}
.css-serial {
  counter-reset: Product_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: Product_details; /* Increment the serial number counter */
  content: counter(Product_details); /* Display the counter */
}
</style>

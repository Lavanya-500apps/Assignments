<template>
  <div>
    <b-navbar id="color">
      <b-navbar-brand
        ><h2 style="color: white"><b-icon-list /></h2
      ></b-navbar-brand>
      <h2 id="card" style="color: white; font-size: 20px">
        <b>Root<b-icon-chevron-down /></b>
      </h2> </b-navbar
    ><br />
    <b-form>
      <b-row
        ><b-col cols="2"
          ><b-form-input
            type="text"
            maxlength="10"
            placeholder="Enter product"
            required
          ></b-form-input
        ></b-col>
        <b-col cols="2"
          ><b-form-input
            type="text"
            maxlength="10"
            placeholder="Enter sku"
            required
          ></b-form-input
        ></b-col>
        <b-col cols="2"
          ><b-form-input
            type="text"
            maxlength="10"
            placeholder="Enter type"
            required
          ></b-form-input
        ></b-col>
        <b-button type="search" @click="search()" variant="outline-primary"
          >search</b-button
        ></b-row
      >
    </b-form>
   <br />
    <center>
      <br /><br />
      <cproduct
        :Columns="['Id', 'Product', 'Sku', 'Type', 'Quality', 'Operation']"
        :formFields="{}"
      >
        <!--  form input fields in this slot-->
        <template v-slot:input-fields="{ formdata }">
          <br />
          <b>Product:</b>
          <b-form-input
            id="input-2"
            v-model="formdata.Product"
            :options="Product_options"
            type="text"
            value-field="id"
            text-field="name"
            required
            placeholder="Enter product"
          >
          </b-form-input
          ><br />
          <b> Sku:</b>
          <b-form-input
            id="input-3"
            v-model="formdata.Sku"
            :options="Sku_options"
            type="text"
            value-field="id"
            text-field="name"
            required
          >
          </b-form-input
          ><br />
          <b> Type:</b>
          <b-form-input
            v-model="formdata.Type"
            id="input-4"
            type="text"
            :options="Type_options"
            value-field="id"
            text-field="name"
            required
          >
          </b-form-input
          ><br />
          <b>Quality:</b>
          <b-form-input
            v-model="formdata.Quality"
            id="input-5"
            type="number"
            required
          >
          </b-form-input>
          <br /><br />
        </template>
      </cproduct>
    </center>
  </div>
</template>

<script>
import cproduct from "./cproduct.vue";
export default {
  name: "Add_Product",
  components: { cproduct },
};
</script>
<style scoped>
#color {
  background-color: rgb(129, 28, 218);
}
#card {
  position: relative;
  right: 5px;
}
</style>

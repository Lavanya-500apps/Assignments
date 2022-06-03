<template>
  <div>
    <sidebar></sidebar>
    <center>
      <br /><br />
      <childProduct
        :columns="['Id', 'Product', 'Sku', 'Type', 'Quality', 'Operation']"
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
      </childProduct>
    </center>
  </div>
</template>

<script>
import childProduct from "./childProduct.vue";
import Sidebar from "./sidebar.vue";

export default {
  name: "Add_Product",
  components: { childProduct, Sidebar },
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

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-nav-item>
        <b-icon icon="house-door-fill" />vue
      </b-nav-item>
      <b-navbar-nav class="ml-auto">
        <b-nav-form id="login">
          <b-input-group prepend="Login">
            <b-form-input placeholder="Username"></b-form-input>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
      <b-button @click="login()">login</b-button>
    </b-navbar>
    <br />
    <b-button @click="Create">Add contact</b-button>
    <br />
    <b-modal v-model="modalShow" title="AddName" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"></slot>
        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-modal>
    <b-button @click="Delete(item)" v-b-modal="'edit-modal'" variant="danger">Delete</b-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "contact_child",
  props: ["columns", "formFields"],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      users_Data: []
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  methods: {
    Create() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
      this.editedIndex = -1;
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.users_Data.indexOf(this.item);
      this.editedItem = Object.assign({}, item);
    },
   
    close() {
      this.modalShow = false;
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users_Data[this.editedIndex], this.editedItem);
      } else {
        this.users_Data.push(this.editedItem);
        axios.post(this.endpoint, this.editedItem);
      }
      this.$emit("user_data", this.users_Data);
      console.log("dvdfvdfvdfv", this.users_Data);
      this.close();
    },
    Delete(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete details.", {
          title: "Delete Details",
          size: "sm",
          buttonSize: "sm",
          okVariant: "primary",
          okTitle: "YES",
          cancelVariant: "danger",
          cancelTitle: "NO",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            const index = this.users_Data.indexOf(item);
            this.users_Data.splice(index, 1);
            axios.delete(this.endpoint + "/" + value.id);
          } else return;
        });
    },
  }
};
</script>
<style scoped>
.button1 {
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  position: absolute;
  top: 0;
  right: 0;
}
#login {
  position: absolute;
  top: 1;
  right: 0;
}
</style>
<template>
  <div>
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-modal ref="my-modal" hide-footer title="Delete Details">
      <div class="d-block text-center">Are you sure to delete item</div>
      <b-button class="yes">Yes</b-button>
      <b-button class="no">No</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Delete_Details",
  data() {
    return;
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
  },
};
</script>

<style>
.yes {
  float: right;
  width: 10%;
}
.no {
  float: left;
  width: 10%;
}
</style>

<template>
    <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text>
          <b-form-input v-model="value" placeholder="Enter your Firstname"></b-form-input><br>
          <b-form-input v-model="value" placeholder="Enter your Lastname"></b-form-input>
        </b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>
          <b-form-input v-model="value" placeholder="Enter your Firstname"></b-form-input><br>
          <b-form-input v-model="value" placeholder="Enter your Lastname"></b-form-input>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {
  name:"taBS",
  data() {
    return{

    }
  }

}
</script>

<style>

</style>
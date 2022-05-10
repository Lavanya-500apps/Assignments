<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'NExttick',
  data() {
    return {
        msg: 'One'
    }
  },
  mounted() {
      this.msg = 'Two';

      this.$nextTick(() => {
          this.msg = 'Three';
      });
  }
}
</script>

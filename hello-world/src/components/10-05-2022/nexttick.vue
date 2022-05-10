<template>
  <div>
    {{ msg1 }}
    {{ msg3 }}
    {{msg4}}
    {{msg2}}
    
    <button @click="fun()">click</button>
   

  </div>
</template>

<script>
export default {
  name: 'NExttick',
  data() {
    return {
        msg1: 'One',
        msg2:" ",
        msg3:" ",
        msg4:""
    }
  },
  mounted() {
      this.msg2 = 'Two';

      this.$nextTick(() => {
          this.msg3 = 'Three';
      });
  },
  methods:{
      fun(){
          this.$nextTick(() => {
          this.msg4 = 'four';
      });

      }
  }
  
     
}
</script>
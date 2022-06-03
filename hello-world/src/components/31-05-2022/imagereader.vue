<template>
  <div>
    <h2>Image reader</h2>
    <p id="file"></p>
    
      <input type="file" ref="file" @change="readFile()" />
      <div v-if="Image">
        <img :src="preview" />
      </div>
   
    
  </div>
</template>

<script>
export default {
  name: "FileReader",
  data() {
    return {
     example: null,
      image: false,
       preview: null 
    }
  },

 methods: {
    readFile() {
      this.example = this.$refs.file.files[0];
      if (
        this.example.name.includes(".png") ||
        this.example.name.includes(".jpg")
      ) {
        this.image = true;
        this.preview = URL.createObjectURL(this.example);
      } else {
        this.image = false;
      }
    }
  
  }
}
</script>

<style></style>

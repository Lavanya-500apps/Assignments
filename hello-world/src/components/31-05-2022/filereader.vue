<template>
  <div>
    <h2>filereader</h2>
    <p id="file"></p>
    <input type="file" ref="doc" @change="readFile()" />    
  </div>
</template>

<script>
export default {
  name: "FileReader",
  data() {
    return {
     file: null,
    }
  },

 methods: {
    readFile() {
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          console.log(res.target.result);
          document.getElementById("file").innerHTML=res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        
        reader.onload = (res) => {
          console.log(res.target.result);
          document.getElementById("file").innerHTML=res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    }
  }
}
</script>

<style></style>

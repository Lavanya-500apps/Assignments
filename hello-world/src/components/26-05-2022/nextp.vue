<template>
  <div>
    <nextc :name="name" :age="age" :books="books" @change="emit" ref="number">{{number}}</nextc>
    <h2>id:{{ id }}</h2>
    <button @click="ref_parent()"><b>ref</b></button>
    <h2 id="parent"></h2>
  </div>
</template>

<script>
import nextc from "./nextc";
export default {
  name: "ParentComponent",
  components: {
    nextc,
  },
  data() {
    return {
        name:"lavanya",
      age: 24,
     books:[{ title: "C++", author: "Bjarne" },

                  { title: "Java", author: "James" },

                  { title: "Python", author: "Guido" },

                  { title: "Java", author: "James" }],
       id:"" ,

    };
  },
    methods:{
      emit(change){
        this.id=change.id;
        this.age=change.age;
      },
       ref_parent(){
            this.$refs.number.ref_child();
            let array1=[2,4,6];
           //document.write("parent component");
            document.getElementById("parent").innerHTML="parent component array"+" "+array1;
        },


  },
};
</script>

<style></style>

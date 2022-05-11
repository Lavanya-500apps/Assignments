<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-list-group v-b-scrollspy:list>
          <b-list-group-item href="#list-item-1">Item 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Item2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Item 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Item 4</b-list-group-item>
          <b-list-group-item href="#list-item-5">Item 5</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="2">
        <div :class="[isVisible ? 'bg-info' : 'bg-light', 'border', 'p-2', 'text-center']"
          id="list"
          style="position: relative; overflow-y: auto; height: 300px">
          
        
        
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Item 2</h4>
          
          <b-badge v-b-visible="handleVisibility">Element with v-b-visible directive</b-badge>
          <p>{{ text1 }}</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>{{ text2 }}</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Item 5</h4>
          <p>{{ text2 }}</p>
        </div>
        <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: "DiRectiveS",
  data() {
    return {
        isVisible: false,
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
        text1: ` @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
        text2: ` ???????????????????????????????????????
        ????????????????????????????????????????????????????????
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
    };
  },
  methods: {
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
};
</script>
<template>
  <div>
    <pagefetch />
    <h2>Mixin</h2>
    <p>array=1,2,3;adding={{ value }}</p>
    <button @click="fun()">click</button>
  </div>
</template>

<script>
import pagefetch from "/home/agile/Desktop/Lavanya/Assignments/hello-world/src/components/09-05-2022/pagefetch.vue";
export default {
  name: "MIXINS",
  mixins: [pagefetch],
  components: {
    pagefetch,
  },
  data() {
    return {
      value: [],
    };
  },
  async mounted() {
    await this.get_from_mixin();
  },
  methods: {
    fun() {
      this.value = this.array.map((add) => add + 2);
      return this.value;
    },
    async get_from_mixin() {
      let resp = await this.func1();
      console.log("vfdvdfvdf", resp);
    },
  },
};
</script>

<style></style>

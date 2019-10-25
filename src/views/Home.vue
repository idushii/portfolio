<template>
  <div class="row">
    <list-item-record 
      class="col s6 m4" 
      v-for="(item, index) in items" :key="`item-${index}`" 
      :title="item.title"
      :desc="item.desc"
      :link="item.link"
      :links="item.links"
      :prev="item.prev"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ListItemRecord from "../components/list-item-record";
export default {
  name: "home",
  computed: {
    items() {
      return this.$store.state.projects
    }
  },
  components: {
    ListItemRecord
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin-top: 3rem;
}
</style>
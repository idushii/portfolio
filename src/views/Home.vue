<template>
  <div class="row">
    <div class="col s12">
      <div class="switch right">
        Отобразить
        <label>
          <input type="checkbox" v-model="inColumn" />
          <span class="lever"></span>
          В колонку
        </label>
      </div>
    </div>

    <list-item-record
      :class="[inColumn ? 'col s12' : 'col s6 m4']"
      v-for="(item, index) in items"
      :key="`item-${index}`"
      :title="item.title"
      :desc="item.desc"
      :link="item.link"
      :links="item.links"
      :prev="item.prev"
      :in-column="inColumn"
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
      return this.$store.state.projects;
    }
  },
  data: () => ({
    inColumn: false,
  }),
  components: {
    ListItemRecord
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin-top: 3rem;
}

.switch {
  height: 3rem;
}

</style>
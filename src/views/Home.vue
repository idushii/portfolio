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
    <div class="col s12" :class="[inColumn ? 'row' : 'my-grid']">
      <list-item-record
        :class="[inColumn ? 'col s12' : '']"
        v-for="(item, index) in items"
        :key="`item-${index}`"
        :title="item.title"
        :smallTitle="item.smallTitle"
        :desc="item.desc"
        :link="item.link"
        :links="item.links"
        :img="item.img"
        :in-column="inColumn"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListItemRecord from "../components/list-item-record";
import { Link } from "@/components/Link";
export default {
  name: "home",
  computed: {
    items() {
      return this.$store.state.projects;
    }
  },
  data: () => ({
    inColumn: false
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

.my-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}
</style>
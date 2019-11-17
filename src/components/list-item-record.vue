<template>
  <div>
    <ItemVertival
      v-if="!inColumn"
      :title="title"
      :img="img"
      :desc="desc"
      :link="MainLink"
      :links="links"
    />
    <ItemHorizontal v-else :title="title" :img="img" :desc="desc" :link="MainLink" :links="links" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { ILink } from "./Link";
import ItemVertival from "./item-vertical.vue";
import ItemHorizontal from "./item-horizontal.vue";

@Component({
  components: { ItemVertival, ItemHorizontal }
})
export default class ListItemRecord extends Vue {
  @Prop(Boolean) private inColumn: boolean;
  @Prop(String) private prev: string;
  @Prop(String) private title: string;
  @Prop(String) private desc: string;
  @Prop([String, Boolean]) private link: string | boolean;
  @Prop(Array) private links: ILink[];

  get img() {
    if (this.prev)
      return `https://idushii.github.io/portfolio/img/prev/${this.prev}`;
    else return `https://via.placeholder.com/150`;
  }
  get MainLink() {
    if (this.link) return this.link;
    return this.links[0].link;
  }
}
</script>

<style lang="scss" scoped>
.card {
  .card-image {
    height: 18vw;
  }
  .card-title {
    display: inline-block;
    height: 4rem;
  }
  &.horizontal {
    .card-image {
      height: auto;
      width: 18vw;
    }
    .card-title {
      display: inline-block;
      height: auto;
    }
  }
}
</style>
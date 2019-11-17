<template>
  <div>
    <ItemVertival
      v-if="!inColumn"
      :title="title"
      :smallTitle="smallTitle"
      :img="_img"
      :desc="desc"
      :link="_link"
      :links="links"
    />
    <ItemHorizontal v-else :title="title" :img="img" :desc="desc" :link="MainLink" :links="links" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { ILink, Link } from "./Link";
import { IRecord } from "./Item";
import ItemVertival from "./item-vertical.vue";
import ItemHorizontal from "./item-horizontal.vue";

@Component({
  components: { ItemVertival, ItemHorizontal }
})
export default class ListItemRecord extends Vue implements IRecord {
  @Prop(Boolean) inColumn: boolean;
  @Prop(String) img: string;
  @Prop(String) title: string;
  @Prop([String, Boolean]) smallTitle: string | false;
  @Prop(String) desc: string;
  @Prop([Object, Boolean]) link: Link | false;
  @Prop(Array) links: ILink[];

  get _img() {
    if (this.img)
      return `https://idushii.github.io/portfolio/img/prev/${this.img}`;
    else return `https://via.placeholder.com/150`;
  }
  get _link() {
    if (this.link) return this.link;

    return new Link(this.links[0].link);
  }
}
</script>
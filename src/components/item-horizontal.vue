<template>
  <div class="card horizontal">
    <div class="card-image">
      <img :src="img" />
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p class="card-title" v-text="title" />
        <p v-text="desc" />
      </div>
      <div class="card-action">
        <a :href="link.url" class="default-link" v-if="!links && link" target="_blank">{{link.title}}</a>
        <template v-if="links">
          <p v-for="{link, title} in links" :key="`item-${link}`">
            <a :href="link" target="_blank">{{title}}</a>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import { ILink } from "./Link";
import { IItem } from "./Item";

@Component
export default class ItemHorizontal extends Vue implements IItem {
  @Prop(String) title: string;
  @Prop([String, Boolean]) smallTitle: false;
  @Prop(String) img: string;
  @Prop(String) desc: string;
  @Prop([Object, Boolean]) link: ILink | false;
  @Prop(Array) links: ILink[];
}
</script>

<style lang="scss" scoped>
</style>
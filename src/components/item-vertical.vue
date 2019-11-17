<template>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" :src="img" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        <i class="material-icons right">more_vert</i>
        {{smallTitle || title}}
      </span>
      <p>
        <a :href="link.url" target="_blank">{{link.title}}</a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        <i class="material-icons right">close</i>
        {{title}}
      </span>
      <p>{{desc}}</p>
      <a :href="link.url" v-if="!links && link" class="default-link" target="_blank">{{link.title}}</a>
      <template v-if="links">
        <p v-for="{link, title} in links" :key="`item-${link}`">
          <a :href="link" target="_blank">{{title}}</a>
        </p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import { ILink } from "./Link";
import { IItem } from "./Item";

@Component
export default class ItemVertical extends Vue implements IItem {
  @Prop(String) title: string;
  @Prop([String, Boolean]) smallTitle: string | false;
  @Prop(String) img: string;
  @Prop(String) desc: string;
  @Prop([Object, Boolean]) link: ILink | false;
  @Prop(Array) links: ILink[];
}
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 15rem 9rem;

  .card-image {
    display: flex;
    align-items: center;
  }

  .card-content {
    display: grid;
    grid-template-rows: 1fr auto;
  }
}
</style>
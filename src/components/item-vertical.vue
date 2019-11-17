<template>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" :src="img" v-if="img" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        <i class="material-icons right">more_vert</i>
        {{title}}
      </span>
      <p>
        <a :href="link" target="_blank">Ссылка</a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        <i class="material-icons right">close</i>
        {{title}}
      </span>
      <p>{{desc}}</p>
      <a :href="link" v-if="link" target="_blank">Ссылка</a>
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

@Component
export default class ItemVertical extends Vue {
  @Prop(String) private title: string;
  @Prop(String) private img: string;
  @Prop(String) private desc: string;
  @Prop([String, Boolean]) private link: string | boolean;
  @Prop(Array) private links: ILink[];
}
</script>

<style lang="scss" scoped>
</style>
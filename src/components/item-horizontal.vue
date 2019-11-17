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
          <a :href="link" v-if="link.url" target="_blank">Ссылка</a>
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

@Component
export default class ItemHorizontal extends Vue {
  @Prop(String) private title: string;
  @Prop(String) private img: string;
  @Prop(String) private desc: string;
  @Prop([Object, Boolean]) private link: ILink|boolean;
  @Prop(Array) private links: ILink[];
}
</script>

<style lang="scss" scoped>
</style>
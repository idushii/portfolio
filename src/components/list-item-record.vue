<template>
<div>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" :src="img" v-if="img" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        {{title}}
        <i class="material-icons right">more_vert</i>
      </span>
      <p>
        <a :href="MainLink" target="_blank">Ссылка</a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        {{title}}
        <i class="material-icons right">close</i>
      </span>
      <p>{{desc}}</p>
      <a :href="link" v-if="link" target="_blank">Ссылка</a>
      <template v-if="links" >
          <p v-for="{link, title} in links" :key="`item-${link}`">
            <a :href="link" target="_blank">{{title}}</a>
          </p>
      </template>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'ListItemRecord',
    props: {
        prev: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        link: {
            type: [String, Boolean],
            default: false
        },
        links: {
            type: [Array, Boolean],
            default: false
        },
    },
    computed: {
        img() {
            if (this.prev)
                return `https://idushii.github.io/portfolio/img/prev/${this.prev}`
            else 
                return `https://via.placeholder.com/150`
        },
        MainLink() {
            if (this.link) return this.link
            return this.links[0].link
        }
    },
}
</script>

<style lang="scss" scoped>
.card-image {
    height: 18vw;
}
.card-title {
    display: inline-block;
    height: 4rem;
}
</style>
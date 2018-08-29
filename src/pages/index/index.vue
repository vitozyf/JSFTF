<template>
  <div class="p-index">
    <js-header></js-header>
    <js-card title="全部话题" :topics="allTopics"></js-card>
  </div>
</template>

<script>
import JsCard from '@/components/JsCard.vue'
import JsHeader from '@/components/JsHeader.vue'
const CONFIG = {
  search: 'topic/search'
}
export default {
  data () {
    return {
      allTopics: [],
      noRevertTopics: []
    }
  },

  components: {
    JsCard,
    JsHeader
  },

  methods: {

  },

  created () {
    this.$post(CONFIG.search, {
      type: 'All',
      PageIndex: 1,
      PageSize: 10
    }).then(data => {
      this.allTopics = data.TopicList
    })
  },

  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins/var.scss";
.p-index {
  .title {
    color: $--color-white;
    // background-color: $--color-primary;
  }
}
</style>

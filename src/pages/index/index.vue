<template>
  <div class="p-index">
    <js-header @tab-change="tabChangeHandler" :tab-index="tabIndex"></js-header>
    <js-card title="全部话题" :topics="allTopics" v-if="tabIndex === 0"></js-card>
    <js-card title="全部话题1" :topics="allTopics" v-else-if="tabIndex === 1"></js-card>
    <js-card title="全部话题2" :topics="allTopics" v-else-if="tabIndex === 2"></js-card>
  </div>
</template>

<script>
import JsCard from '@/components/JsCard.vue'
import JsHeader from '@/components/JsHeader.vue'
import store from './store'
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

  computed: {
    tabIndex () {
      return store.state.activeTab.tabIndex
    }
  },

  methods: {
    tabChangeHandler (tabIndex) {
      if (typeof tabIndex !== 'undefined') {
        store.commit('setActiveTab', {tabIndex})
      }
    }
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

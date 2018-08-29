<template>
  <div class="p-index">
    <js-card title="全部话题"></js-card>
    <js-card title="精品话题"></js-card>
    <js-card title="待回复话题"></js-card>
  </div>
</template>

<script>
import JsCard from '@/components/JsCard.vue'
const CONFIG = {
  search: 'topic/search'
}
export default {
  data () {
    return {
    }
  },

  components: {
    JsCard
  },

  methods: {

  },

  created () {
    this.$post(CONFIG.search, {
      type: 'All',
      PageIndex: 1,
      PageSize: 10
    }).then(data => {
      console.log(data)
      this.$showToast('success')
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

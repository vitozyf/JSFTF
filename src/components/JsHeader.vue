<template>
  <div class="c-JsHeader">

    <div class="weui-tab">
      <div class="weui-navbar" @click="tabChange">
        <span class="c-JsHeader-checkin">签到</span>
        <div :data-tabBarIndex="0" class="weui-navbar__item" :class="{'weui-bar__item_on': tabIndex === 0}">
          推荐
        </div>
        <div :data-tabBarIndex="1" class="weui-navbar__item" :class="{'weui-bar__item_on': tabIndex === 1}" >
          最火
        </div>
        <div :data-tabBarIndex="2" class="weui-navbar__item" :class="{'weui-bar__item_on': tabIndex === 2}">
          专区
        </div>
        <span><i class="iconfont icon-search"></i></span>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'JsHeader',

  props: {
    tabIndex: {
      type: Number,
      default: 0
    }
  },

  methods: {
    tabChange (event) {
      const tabIndex = event.mp.target.dataset.tabbarindex
      this.$emit('tab-change', tabIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-JsHeader {
  height: 50px;
}
</style>


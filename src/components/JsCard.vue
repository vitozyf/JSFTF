<template>
  <div class="c-jscard">
    <div class="title">
      <span class="vertical-line"></span>
      <span class="title-text">{{title}}</span>
    </div>
  
    <div class="body">
      <div 
        v-for="(item, index) in topics" 
        :key="index" 
        class="cell">
        {{index}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  namr: 'JsCard',

  props: {
    title: String,
    topics: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins/var.scss";
.c-jscard {
  background-color: $--color-white;
  padding: 0 10px;
  margin-bottom: 20px;
  .title {
    position: relative;
    padding: 5px 10px;
    .vertical-line {
      width: 5px;
      height: 15px;
      background-color: $--color-primary;
      @include block-middle(tb);
    }
    .title-text {
      margin-left: 10px;
    }
  }
}
</style>

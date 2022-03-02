<template>
  <div class="box">
    <div class="menu">
      <div class="logo">
        <img style="width: 100%;height: 100%;" src="../../assets/logo.png" alt="">
      </div>
      <a-menu mode="horizontal" :default-selected-keys="[keys]">
        <a-menu-item key="1" @click="router.push('/')">首页</a-menu-item>
        <a-menu-item key="2" @click="router.push('/list')">筹资期</a-menu-item>
        <a-menu-item key="3">币债市场</a-menu-item>
        <a-menu-item key="4">DaoFi市场</a-menu-item>
      </a-menu>
      <a-button type="primary" shape="round" size="large">链接钱包</a-button>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {defineComponent} from "vue";

export default defineComponent( {
  props:{
    keys: {
      type: String,
      default: '1'
    }
  },
  setup() {
    const router = useRouter()
    return {
      router
    }
  }
})
</script>

<style scoped lang="stylus">
.box
  width: 100%;
  height: 100px
  background #fff
  .menu
    width: 1200px
    margin 0 auto
    display flex
    align-items center
    .logo
      width: 199px;
      height: 78px;
      background #000
    .arco-menu
      width 855px
      text-align right
      height: 100px
      margin-right: 50px
      .arco-menu-item
        color: #333333
      .arco-menu-selected
        color: #00d395 !important
        :deep(.arco-menu-selected-label)
          background: #00d395 !important
          bottom -35px
</style>

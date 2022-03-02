<template>
  <div class="home">
    <common-headers keys="1"></common-headers>
    <div class="bgBox">
      <div class="bg">
        <div class="content">
          <div class="title">面向Web3.0去中心化的币债发行交易协议</div>
          <div class="btns" style="margin-bottom: 32px;">
            <a-button style="margin-right: 40px;" type="primary" shape="round" size="large" @click="router.push('/coinbond_pc')">创建币债</a-button>
            <a-button size="large" shape="round" @click="router.push('/daoFi')">发起DaoFi</a-button>
          </div>
          <div class="text">
            <span class="outer">
              <span class="inner"></span>
            </span>
            无需编程、一键创建隶属于自己的币债
          </div>
          <div class="text text2">
            <span class="outer">
              <span class="inner"></span>
            </span>
            社区公平参与的资产发行方式
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="tab">
        <div class="common" :class="active === 1?'active':''" @click="tab(1)">币债市场</div>
        <div class="common" :class="active === 2?'active':''" @click="tab(2)">DaoFi市场</div>
        <div style="margin-left: auto;">
          <img style="width: 60px;height: 60px;" src="../assets/search.png" alt="">
        </div>
      </div>
      <div class="list">
       <common-table :columns="columns" :data="list" @operation="operation"></common-table>
        <div style="display: flex;justify-content: end;">
          <a-pagination page-item-style="background: #fff" active-page-item-style="background: #00d395;color: #fff" @change="change" :current="current" :pageSize="pageSize" :total="total"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeaders from '@/components/headers/commonHeaders'
import commonTable from '@/components/table/TableIndex'
import {reactive, ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'
export default {
  components: {
    commonHeaders,
    commonTable
  },
  setup() {
    const state = reactive({
      list:[{
        assets: 100,
        price: 222,
        increase: '-10%',
        profit: '20%',
        img: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
      },{
        assets: 1200,
        price: 2222,
        increase: '+10%',
        profit: '20%',
        img: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
      }],
      columns:[{
        title: '资产',
        dataIndex: 'assets',
        isSlot: true,
        isImg: true,
        slot: 'img',
        position: 'front'
      },{
        title: '价格',
        dataIndex: 'price',
        isSlot: true,
        isImg: false,
        slot: 'increase',
        position: 'after'
      },{
        title: '到期收益率',
        dataIndex: 'profit',
      },{
        title: '操作',
        dataIndex: 'operation',
      }],
      current: 1,
      pageSize: 10,
      total: 20,
    })
    const active = ref(1)
    const router = useRouter();
    const tab = (val) => {
      active.value = val
      state.current = 1
    }
    const operation = (val,index) => {
      console.log(val);
      console.log(index);
    }

    const change = (val) => {
      state.current = val
    }
    return {
      ...toRefs(state),
      active,
      tab,
      operation,
      change,
      router,
    }
  }
}
</script>

<style scoped lang="stylus">
.home
  width: 100%
  .bgBox
    position relative
    height 450px
    .bg
      width: 100%
      height: 450px
      background url("@/assets/bg.png") no-repeat
      background-size cover
      position:absolute;
      top: 0;
      left: 0;
      min-width: 1000px;
      zoom: 1;
      background-color: #fff;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-position: center 0;
      .content
        width: 1200px
        margin 0 auto
        text-align center
        .title
          color: #ffffff
          font-size 30px
          margin-top: 160px
          margin-bottom: 40px
        .text
          color: #00d395
          font-size 12px
          margin-bottom: 13px
          span
            display inline-block
          .outer
            width: 15px
            height: 15px
            position relative
            border-radius 50%
            margin-bottom: -3px
            background rgba(0, 211, 149, 0.3)
          .inner
            width: 10px
            height: 10px
            border-radius 50%
            position absolute
            top 50%
            left: 50%;
            transform: translate(-4.5px,-4.5px);
            background rgba(0, 211, 149, 0.3)
        .text2
          color: #fff
          .outer
            background rgba(255, 255, 255, 0.3)
          .inner
            position absolute
            top 50%
            left: 50%;
            transform: translate(-4.5px,-5px);
            background rgba(255, 255, 255, 0.3)
  .center
    width: 1200px
    margin 0 auto
    .tab
      display flex
      margin: 24px 0
      .common
        width: 120px
        height: 60px
        text-align center
        line-height 60px
        border-radius: 66px 66px 66px 66px;
        background: #CCCCCC;
        color: #ffffff
        font-size 18px
        margin-right: 40px
        cursor pointer
      .active
        background #00D395
</style>

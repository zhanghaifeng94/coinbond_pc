<template>
  <div>
    <common-headers keys="2"></common-headers>
    <div class="listBox">
      <div class="tab">
        <div class="common" :class="active === 1?'active':''" @click="tab(1)">币债</div>
        <div class="common" :class="active === 2?'active':''" @click="tab(2)">DaoFi市场</div>
      </div>
      <div class="list">
        <div class="listItem" v-for="(item, index) in list" :key="index">
          <a-card style="width: 100%;height: 220px;border-radius: 12px 12px 12px 12px;" @click="router.push(`/details/${item.id}`)">
            <div class="card">
              <div class="img">
                <img
                    :src="item.img"
                />
                <div class="label" v-if="item.status === 1" style="background: #00D395">正在进行</div>
                <div class="label" v-else style="background: #0081FF">即将开始</div>
              </div>
              <div class="content">
                <div class="title">{{ item.title }}</div>
                <div class="synopsis">{{ item.synopsis }}</div>
                <div style="margin-bottom: 26px;">
                  <a-progress :percent="item.now / item.total" size="large" :show-text="false" color="#00D395" :style="{width:'100%'}" />
                </div>
                <div class="info">
                  <div class="common">
                    已筹款
                    <span>{{ item.now }} USDT</span>
                  </div>
                  <div class="common">
                    进度
                    <span>{{(item.now / item.total * 100).toFixed(2)}}%</span>
                  </div>
                </div>
              </div>
              <div class="btn" v-if="item.status === 1">
                <a-button type="primary" shape="round" size="large" @click.stop="router.push('/')">参与认购</a-button>
                <div style="font-size: 16px;color: #666666;margin-top: 9px;">
                  <span>剩余</span>
                  <a-countdown :value="new Date(item.endTime)" :now="Date.now()" format="DD天HH小时" :start="true" />
                </div>
              </div>
              <div class="btn" v-else>
                <div style="color:#0081FF;text-align: center;font-weight: bold">预热中</div>
                <div style="font-size: 16px;color: #666666;margin-top: 24px;">
                  <span>距离开始还剩</span>
                  <a-countdown :value="new Date(item.endTime)" :now="Date.now()" format="DD天HH小时" :start="true" />
                </div>
              </div>
            </div>
          </a-card>
        </div>
      </div>
      <div style="display: flex;justify-content: center;margin-top: 60px">
        <a-pagination page-item-style="background: #fff" active-page-item-style="background: #00d395;color: #fff" @change="change" :current="current" :pageSize="pageSize" :total="total"/>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeaders from '@/components/headers/commonHeaders'
import {useRouter} from 'vue-router'
import {reactive, ref, toRefs} from "vue";
export default {
  components:{
    commonHeaders
  },
  setup() {
    const state = reactive({
      current: 1,
      pageSize: 10,
      total: 20,
      list: [{
        id: 1,
        title: '项目名称项目名称',
        synopsis: '这是一段项目简介这是一段项目简介这是一段项目简介',
        total: 1000,
        now: 200,
        status: 1,
        startTime: '',
        endTime: '2022-03-21',
        img: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
      },{
        id: 2,
        title: '项目名称项目名称',
        synopsis: '这是一段项目简介这是一段项目简介这是一段项目简介',
        total: 1000,
        now: 200,
        status: 2,
        startTime: '',
        endTime: '2022-03-31',
        img: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
      }]
    })
    const router = useRouter();
    const active = ref(1)
    const tab = (val) => {
      active.value = val
      state.current = 1
    }
    const change = (val) => {
      state.current = val
    }
    return {
      ...toRefs(state),
      active,
      tab,
      router,
      change
    }
  }
}
</script>

<style scoped lang="stylus">
.listBox
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
  .list
    .listItem
      margin-bottom: 20px
      :deep(.arco-card-body)
        padding 20px
        box-sizing border-box
      .card
        display flex
        .img
          width: 280px
          height: 180px
          position relative
          margin-right: 24px
          img
            width: 100%
            height: 100%
            border-radius 8px
        .label
          position absolute
          top 11px
          left 13px
          width: 75px;
          height: 29px;
          line-height: 29px;
          text-align center
          border-radius 4px
          background #fff
          color: #ffffff
        .content
          width: 600px
          .title
            font-size 20px
            margin-bottom: 12px
          .synopsis
            font-size 16px
            color: #666666
            margin-bottom: 40px
          .info
            display flex
            justify-content space-between
            align-items center
            font-size 16px
            .common
              span
                font-size 18px
                color: #00d395
        .btn
          margin-top: 90px
          margin-left: auto
          :deep(.arco-statistic-value)
            color: #666666
            font-size 16px
</style>
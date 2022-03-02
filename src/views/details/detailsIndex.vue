<template>
  <div>
    <common-headers keys="2"></common-headers>
    <div class="detailsBox">
      <div class="top">
        <div class="icon">
          <icon-left />
        </div>
        <div style="font-size: 16px">{{ details.title }}</div>
      </div>
      <div class="details">
        <a-card style="width: 100%;height: 428px;border-radius: 12px 12px 12px 12px;">
          <div style="display: flex">
            <div class="img">
              <img
                  :src="details.img"
              />
              <div class="label" v-if="details.status === 1" style="background: #00D395">正在进行</div>
              <div class="label" v-else style="background: #0081FF">即将开始</div>
            </div>
            <div class="content">
              <div class="title">{{ details.title }}</div>
              <div class="synopsis">{{ details.synopsis }}</div>
              <div class="now">
                已筹款
                <span>{{ details.now }} USDT</span>
              </div>
              <div style="margin-bottom: 48px;margin-top: 24px;">
                <a-progress :percent="details.now / details.total" size="large" color="#00D395" :style="{width:'100%'}" >
                  <template v-slot:text="scope">
                    <span style="font-size: 16px;margin-right: 10px;">进度</span>
                    <span style="color: #00d395;font-size: 18px">{{scope.percent * 100}}%</span>
                  </template>
                </a-progress>
              </div>
              <div class="info">
                <div>
                  参与人数
                  <span style="font-weight: 800;margin-left: 16px;font-size: 18px">{{ details.people }}人</span>
                </div>
                <div style="display: flex">
                  <div style="font-size: 16px;color: #666666;margin-top: 9px;">
                    <span>剩余</span>
                    <a-countdown :value="new Date(details.endTime)" :now="Date.now()" format="DD天HH小时" :start="true" />
                  </div>
                  <div style="margin-left: 20px;">
                    <a-button type="primary" shape="round" size="large" @click.stop="">参与认购</a-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a-card>
        <a-card style="width: 100%;height: 173px;border-radius: 12px 12px 12px 12px;margin-top: 20px;">
          <div class="info-title">
            <span class="border"></span>
            <div style="display: flex;align-items: center">
              <span style="font-size: 20px">项目说明</span>
            </div>
          </div>
          <div class="info-content">
            <div style="display: flex;justify-content: space-between">
              <div class="common">
                目标
                <span>{{details.total}} USDT</span>
              </div>
              <div class="common">
                开始认购时间
                <span>{{details.startTime}}</span>
              </div>
              <div class="common">
                结束认购时间
                <span>{{details.endTime}}</span>
              </div>
            </div>
            <div style="margin-top: 25px;font-size: 14px;color: #666666;">此项目必须在 结束认购时间 前得到 {{ details.total }} USDT 的等额支持才可成功！否则将下线并退款。</div>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeaders from '@/components/headers/commonHeaders'
import { IconLeft } from '@arco-design/web-vue/es/icon';
import {reactive} from "vue";
export default {
  components: {commonHeaders, IconLeft},
  setup() {
    const details = reactive({
      id: 1,
      title: '项目名称项目名称',
      synopsis: '这是一段项目简介这是一段项目简介这是一段项目简介',
      total: 1000,
      now: 200,
      status: 1,
      people: 100,
      startTime: '2022-03-11',
      endTime: '2022-03-21',
      img: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    })
    return {
      details
    }
  }
}
</script>

<style scoped lang="stylus">
.detailsBox
  width: 1200px
  margin: 0 auto
  .top
    display flex
    margin: 16px 0
    align-items center
    .icon
      width: 24px;
      height: 24px;
      display flex
      align-items center
      justify-content center
      background: #FFFFFF;
      border-radius 50%
      box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
      margin-right: 16px
  .details
    :deep(.arco-card-body)
      padding 30px
      box-sizing border-box
    .img
      width: 572px
      height: 368px
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
      width: 46%
      .title
        font-size 20px
        margin-bottom: 18px
      .synopsis
        font-size 16px
        color: #666666
        margin-bottom: 50px
        height: 82px
      .now
        font-size 16px
        span
          color: #00d395
          font-size 32px
          font-weight bold
          margin-left: 10px
      .info
        display flex
        justify-content space-between
        align-items center
        font-size 16px
        :deep(.arco-statistic-value)
          color: #666666
          font-size 16px
  .info-title
    display flex
    align-items center
    .border
      display inline-block
      width: 7px;
      height: 28px;
      background: #00D395;
      border-radius: 12px 12px 12px 12px;
      margin-right: 10px
  .info-content
    margin-top: 28px
    margin-left: 12px
    .common
      font-size 16px
      color: #333333
      span
        color: #666666
        margin-left: 18px
</style>
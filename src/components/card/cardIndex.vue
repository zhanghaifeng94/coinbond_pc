<template>
  <div class="card">
    <div class="cardBox">
      <a-card style="width: 285px;height: 143px;border-radius: 12px 12px 12px 12px;margin-right: 20px;">
        <div class="title">
          <span class="border"></span>
          <div style="display: flex;align-items: center">
            <span style="font-size: 32px;margin-right: 10px;font-weight: bold">01</span>
            <span style="font-size: 20px">预计发行</span>
          </div>
        </div>
        <div class="content">填写发行要素，创建后您可以与社区 分享链接，以吸引更多参与者</div>
      </a-card>
      <a-card style="width: 285px;height: 143px;border-radius: 12px 12px 12px 12px;margin-right: 20px;">
        <div class="title">
          <span class="border"></span>
          <div style="display: flex;align-items: center">
            <span style="font-size: 32px;margin-right: 10px;font-weight: bold">02</span>
            <span style="font-size: 20px">筹资期</span>
          </div>
        </div>
        <div class="content">填写发行要素，创建后您可以与社区 分享链接，以吸引更多参与者</div>
      </a-card>
      <a-card style="width: 285px;height: 143px;border-radius: 12px 12px 12px 12px;margin-right: 20px;">
        <div class="title">
          <span class="border"></span>
          <div style="display: flex;align-items: center">
            <span style="font-size: 32px;margin-right: 10px;font-weight: bold">03</span>
            <span style="font-size: 20px">交易</span>
          </div>
        </div>
        <div class="content">填写发行要素，创建后您可以与社区 分享链接，以吸引更多参与者</div>
      </a-card>
      <a-card style="width: 285px;height: 143px;border-radius: 12px 12px 12px 12px;">
        <div class="title">
          <span class="border"></span>
          <div style="display: flex;align-items: center">
            <span style="font-size: 32px;margin-right: 10px;font-weight: bold">04</span>
            <span style="font-size: 20px">交割</span>
          </div>
        </div>
        <div class="content">填写发行要素，创建后您可以与社区 分享链接，以吸引更多参与者</div>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
.card
  width: 100%
  .cardBox
    width: 1200px
    margin 24px auto
    display flex
    .title
      display flex
      align-items center
      .border
        display inline-block
        width: 7px;
        height: 28px;
        background: #00D395;
        border-radius: 12px 12px 12px 12px;
        margin-right: 10px
    .content
      color: #666666
      font-size 14px
      padding-left 20px
      margin-top: 25px
      line-height 20px
      box-sizing border-box
</style>
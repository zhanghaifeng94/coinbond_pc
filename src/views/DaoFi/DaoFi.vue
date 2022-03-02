<template>
  <div>
    <common-headers></common-headers>
    <common-card></common-card>
    <div class="center">
      <a-card style="width: 500px;height: 874px;border-radius: 12px 12px 12px 12px;margin-right: 24px;">
        <div class="title">
          <span class="border"></span>
          <div>DaoFi说明</div>
        </div>
        <div class="content">
          币债这个产品的创造不但是对当前区块链整个大市场的补充，更是DeFi3.0生态不可或缺的一环，传统市场的债券发行极其复杂，门槛极高,而coinbond的这个产品可以由任何类型的数字资产自动生成，从而无需编码，允许机构和个人，一键生成自己的债券并用它们筹集资金。<br/>
          创建币债时会产生两个独立的池子，一个是利息池，一个是抵押物池子，利息池子是需要您在筹集资金时候优先打入发债人想给予的利息额，它可以是各种有价数字资产，或者社区认可的代币。<br/>
          <br/>
          抵押物池也是需要发债人先打入自己认为自己社区会认可的抵押物，它可以是各种有价数字资产，或者您项目的智能合约、NFT、也可以是这些的组合，甚至可以为0,只要发债人觉得社区认可您的筹资计划。<br/>
          <br/>
          发债人为了能让社区提前参与和分享平台发展的红利，可以选择发行可转债，就是最终选择的权利下放给社区，主要体现在：发债人把自己融资等价的平台币打入了抵押物池子（当然这里并不代表您不需要打入其它社区认可的抵押物），到交割期后项目发展的特别好，社区可以选择不交割，这样抵押物就会自动按照用户币债的持有份额交割到他们的账户。
          风险上这两个池子是一种智能合约，往后会根据触发的哪些条件而执行哪种结果。
        </div>
      </a-card>
      <a-card style="width: 672px;height: 874px;border-radius: 12px 12px 12px 12px;">
        <div class="title">
          <span class="border"></span>
          <div>参数配置</div>
        </div>
        <div class="form">
          <a-form :model="form" layout="vertical">
            <a-row justify="space-between">
              <a-col :span="11">
                <a-form-item field="value1" label="项目官网" label-col-flex="100px">
                  <a-input v-model="form.value1" placeholder="请输入" />
                  <template #extra>
                    <a-badge status="normal" text="指明币债的债务主体" />
                  </template>
                </a-form-item>
              </a-col>
              <a-col :span="11">
                <a-form-item field="value2" label="币债名" label-col-flex="80px">
                  <a-input v-model="form.value2" placeholder="请输入" />
                  <template #extra>
                    <a-badge status="normal" text="规定为C+代币名称的格式，例如：CABC" />
                  </template>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row justify="space-between">
              <a-col :span="11">
                <a-form-item field="value1" label="期望融资总额" label-col-flex="100px">
                  <a-input v-model="form.value1" placeholder="请输入" />
                  <template #extra>
                    <a-badge status="normal" text="单位USDT， 币债面值1USDT" />
                  </template>
                </a-form-item>
              </a-col>
              <a-col :span="11">
                <a-form-item field="value2" label="融资下限比率" label-col-flex="80px">
                  <a-input v-model="form.value2" placeholder="请输入" />
                  <template #extra>
                    <a-badge status="normal" text="最低可接受融资比率，截止认购期一旦触达此比率视为币债发行成功" />
                  </template>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item style="margin-top: 80px;display: flex;justify-content: end">
              <div style="text-align: right">
                <a-button style="margin-right: 40px;" type="primary" shape="round" size="large">发布DaoFi</a-button>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import commonHeaders from '@/components/headers/commonHeaders'
import commonCard from '@/components/card/cardIndex'
import {reactive} from "vue";
export default {
  components: {commonHeaders, commonCard},
  setup () {
    const form = reactive({

    })
    return {
      form,
    }
  }
}
</script>

<style scoped lang="stylus">
.center
  width: 1200px
  margin 0 auto
  display flex
  .title
    display flex
    align-items center
    font-size 24px
    font-weight: 800;
    .border
      display inline-block
      width: 7px;
      height: 28px;
      background: #00D395;
      border-radius: 12px 12px 12px 12px;
      margin-right: 10px
  .content
    color: #666666
    font-size 20px
    margin-top: 16px
    line-height 30px
    box-sizing border-box
  .form
    margin-top: 16px
    :deep(.arco-badge-status-text)
      color: #666
      width: 94%
    :deep(.arco-form-item-content-flex)
      justify-content end
</style>
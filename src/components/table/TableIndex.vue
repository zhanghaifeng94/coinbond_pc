<template>
  <div>
    <div class="headers">
      <div class="headersItem" v-for="(item, index) in columns" :key="index" :style="{width: 100 / columns.length+'%'}">{{item.title}}</div>
    </div>
    <div class="listBox">
      <div class="list" v-for="(item, index) in columns" :key="index" :style="{width: 100 / columns.length+'%'}">
        <div class="listItem" v-for="(item2, index2) in data" :key="index2" :style="index === 0?{'border-radius': '12px 0 0 12px','padding-left':'32px'}:index === columns.length -1?{'border-radius': '0 12px 12px 0'}:''">
          <div v-if="!item.isSlot">
            <span>{{item2[item.dataIndex]}}</span>
            <div v-if="item.dataIndex==='operation'">
              <a-button type="primary" shape="round" size="large" @click="operation(item2,index2)">交易</a-button>
            </div>
          </div>
          <div v-else style="display: flex;align-items: center">
            <div v-if="item.position === 'front'" style="display: flex">
              <img v-if="item.isImg" :src="item2[item.slot]" alt="">
              <div v-else>{{item2[item.slot]}}</div>
            </div>
            {{item2[item.dataIndex]}}
            <div v-if="item.position === 'after'" style="margin-left: 8px;">
              <img v-if="item.isImg" :src="item2[item.slot]" alt="">
              <div v-else :style="item2[item.slot].slice(0,1) === '+'?{'color':'#00D355'}:{'color':'#D30000'}">{{item2[item.slot]}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({

 props:{
   columns: Array,
   data: Array,
 },
  setup(props, {emit}) {
    function operation(val, index) {
      emit('operation', val, index)
   }
   return {
     operation
   }
  }
})
</script>
:columns="columns" :data="data"
<style scoped lang="stylus">
.headers
  background #fff
  display flex
  justify-content space-around
  font-size 18px
  font-weight bold
  padding 18px 0
  box-sizing border-box
  border-radius: 12px 12px 0px 0px;
  margin-bottom: 12px
  .headersItem:first-child
    padding-left: 32px;
    box-sizing: border-box;
.listBox
    display flex
    justify-content space-around
  .list
    .listItem
      //display flex
      height 50px
      background #fff
      margin-bottom: 12px
      line-height 50px
      img
        width: 32px
        height: 32px
        border-radius 50%
        margin-right: 8px
</style>

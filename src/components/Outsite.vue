<template>
  <div class="container">
    <div>
      <div>
        <text class="rome">{{romeId}}</text>
      </div>
    </div>
    <div>
      <div class="wrap">
        <div class="state">
          <div class="imgWrap">
            <div class="stateImg">
              <image src="@/assets/img/完成.svg" alt="" v-show="available"></image>
              <image src="@/assets/img/减.svg" alt="" v-show="inUse"></image>
              <image src="@/assets/img/时间.svg" alt="" v-show="!available&&!inUse"></image>
            </div>
          </div>
          <div class="textWrap">
            <text class="stateText available" v-show="available">Available</text>
            <text class="stateText inUse" v-show="inUse">In Use</text>
            <text class="stateText waiting" v-show="!available&&!inUse">In Use</text>
            <text class="info" v-show="!available">{{startTime}} -- {{endTime}} {{organizer}}</text>
            <text class="info" v-show="inUse">{{title}}</text>
            <text class="next" v-show="inUse">Next: {{nextStartTime}}-{{nextEndTime}} {{nextOrganizer}}</text>

          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>

</template>

<script>
import CommonFooter from './common/CommonFooter'
export default {
  name: 'index',
  data () {
    return {
      romeId: 'C2',
      available: false,
      inUse: false,
      startTime: '13:00',
      endTime: '14:00',
      organizer: 'Lu,Robin',
      title: 'SONA Stangup Meeting',
      nextStartTime: '15:00',
      nextEndTime: '16:00',
      nextOrganizer: 'Li,sixian'
    }
  },
  components: {
    CommonFooter
  }
}
</script>

<style >
.container{
  height: 750px;
  background-color: #1c2238;
}
.el-main{
    padding: 8.8px 8.8px;
    height: 750px;
}
.el-header{
    width: 750px;
    color: #ffffff;
    line-height: 9.84px;
    padding: 0;
    height: 375px;
    padding: 0;
}
.rome{
  font-size: 12.8px;
  color: #999999;
  padding-top: 5.28px;
  padding-right: 6.4px;
  text-align: right;
}
.wrap{
  height: 1750px;
}
.title{
  font-size: 3.52px;
}
li{
  background-color: #727683;
}
.state{
    line-height: 13.6px;
    height: 750px;
}
.imgWrap,{
  height: 750px;
  left: 0;
}

.textWrap{
  padding-left: 4.8px;
  height: 750px;
}
.stateImg{
  width: 13.6px;
  height:13.6px;
  border-radius: 375px;
  align-items: center;
}
.stateText{
  font-size: 11.2px;
  align-items: center;
  font-weight: bold;
  margin-bottom: 4.8px;
}
.available{
  color: #4ec351;
}
.inUse{
  color: #ff0000;
}
.waiting{
  color: #ffd234;
}
.info{
  color: #ffffff;
  font-size: 6.4px;
  line-height:6.4px;
}
.next{
  position: absolute;
  font-size: 4.208px;
  color: #8f9097;
  line-height:6.4px;
  bottom: 0;
}
.footer{
  background-color: #4e5364;
  height: 11.952px
}
</style>

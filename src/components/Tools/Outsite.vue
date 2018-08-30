<template>
    <el-container id="container">
      <el-header >
        <el-row>
            <el-col>
                <p class="rome">{{romeId}}</p>
            </el-col>
        </el-row>  
      </el-header>  
        <el-main>
          <div class="wrap">
            <div class="state">
              <div class="imgWrap">
                <div class="stateImg">
                  <img src="@/assets/img/完成.svg" alt="" v-show="available">
                   <img src="@/assets/img/减.svg" alt="" v-show="inUse">
                  <img src="@/assets/img/时间.svg" alt="" v-show="!available&&!inUse">
                </div>
              </div>
              <div class="textWrap">
                <p class="stateText available" v-show="available">Available</p>
                <p class="stateText inUse" v-show="inUse">In Use</p>
                <p class="stateText waiting" v-show="!available&&!inUse">Waiting</p>
                <p class="info" v-show="!available">{{startTime}}-{{endTime}} {{organizer}}</p>
                <p class="info" v-show="!available">{{title}}</p>
                <p class="next">Next: {{nextStartTime}}-{{nextEndTime}} {{nextOrganizer}}</p>
              </div>
            </div>
          </div>
        </el-main>
        <common-footer bgColor="#4e5364" height="0.747rem"></common-footer>  
    </el-container>
</template>

<script>
import CommonFooter from './common/CommonFooter'
export default {
  name: 'index',
  data () {
    return {
        romeId:'C2',
        available:false,
        inUse:false,
        startTime:'13:00',
        endTime:'14:00',
        organizer:'Lu,Robin',
        title:"SONA Stangup Meeting",
        nextStartTime:'15:00',
        nextEndTime:'16:00',
        nextOrganizer:'Li,sixian',
    }
  },
  components:{
    CommonFooter
  }
}
</script>

<style >
#container{
  position: relative;
  height: 100%;
  background: #1c2238;
}
.el-main{
    padding: 0.55rem 0.513rem;
    height: 100%;
}
.el-header{
    width: 100%;
    color: #ffffff;
    line-height: 0.615rem;
    padding: 0;
    height: auto!important;
    padding: 0!important;
}
.rome{
  font-size: 0.8rem;
  color: #999999;
  padding-top: 0.33rem;
  padding-right: 0.4rem;
  text-align: right;
}
.wrap{
  overflow: hidden;
  height: 100%;
}
.title{
  font-size: 0.22rem; 
}
.infoBox li{
  background: #727683!important; 
}
.state{
    line-height: 0.85rem;
    height: 100%;
}
.imgWrap,.textWrap{
  height: 100%;
  float: left;
}
.textWrap{
  padding-left: 0.3rem;
  height: 100%;
  position: relative;
}
.stateImg{
  width: 0.85rem;
  height:0.85rem;
  border-radius: 50%;
  box-shadow: 0 5px 5px #0d0f16;
  display: inline-block;
  vertical-align: middle;
}
.stateText{
  font-size: 0.7rem;
  vertical-align: middle;
  font-weight: bold;
  margin-bottom: 0.3rem;
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
  font-size: 0.4rem;
  line-height:0.4rem;
}
.next{
  position: absolute;
  font-size: 0.263rem;
  color: #8f9097;
  line-height:0.4rem;
  bottom: 0;
}
</style>

<template>
    <el-footer :style="{background:bgColor,height:height,lineHeight:height}">
        <el-row>
            <el-col class="infoWrap">
              <ul class="infoBox">
                <li >
                    <img class="temperature" src="@/assets/img/温度.png" alt="">
                    <span class="text">{{temperature}}℃</span>
                </li>
                <li>
                    <img class="humidity" src="@/assets/img/湿度.png" alt="">
                    <span class="text">{{humidity}}%</span>
                </li>
                <li>
                    <img class="head" src="@/assets/img/1人.svg" alt="" v-if="number==1">
                    <img class="head" src="@/assets/img/2人.svg" alt="" v-if="number==2">
                    <img class="head" src="@/assets/img/3人.svg" alt="" v-if="number>2">
                    <span class="person">{{number}}</span>
                </li>
              </ul>
              <span class="timeBox">{{date}} {{time}}</span>
            </el-col>
        </el-row>
    </el-footer>
</template>

<script>
export default {
  props: ['bgColor','height'],
  data () {
    return {
        time: '', 
        date: '',
        temperature:'28',
        humidity:'28',
        number:'100'
    }
  },
  methods:{
    //实时时间
    updateTime() { 
        var cd = new Date(); 
        this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2); 
        this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2)  ;
    },
    zeroPadding(num, digit) { 
        var zero = ''; 
        for(var i = 0; i < digit; i++) { 
            zero += '0'; 
        } 
        return (zero + num).slice(-digit); 
    } 
  },
  mounted () {
        var _this = this;
        var timerID = setInterval(_this.updateTime, 1000); 
        _this.updateTime(); 
  }        
}
</script>

<style  scoped>
.el-footer{
    width: 100%;
    background: #30374a;
    /* position: absolute;
    bottom: 0; */
    color: #ffffff;
}
.el-footer .el-row{
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    height: 100%;
}
.infoWrap{
    height: 100%;
    position: relative;
}
.infoBox {
  overflow: hidden;
  display: inline-block;
  position: absolute;
  top:50%;
  transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  -moz-transform:translateY(-50%);
  -webkit-transform:translateY(-50%);
  -o-transform:translateY(-50%);
}
.infoBox li{
  width: 0.967rem;
  height: 0.432rem;
  border-radius:0.216rem;
  background: #5c6170; 
  float: left;
  margin-right: 0.315rem;
  font-size: 0.214rem;
  line-height: 0.432rem;
  position: relative;
  text-align: center;
}
.timeBox{
  float: right;
  margin-left: 0.147rem;
  font-size: 0.226rem;
}
.temperature{
    height: 100%;
    position: absolute;
    left: 0;
}
.head{
    position: absolute;
    height: 80%;
    top:50%;
    left: 5%;
    transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    -moz-transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
    -o-transform:translateY(-50%);
}
.text{
    float: right;
    margin-right: 10%;
}
.person{
    margin-left: 0.34rem;
}
.infoBox .humidity{
    position: absolute;
    height: 80%;
    top:50%;
    left: 5%;
    transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    -moz-transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
    -o-transform:translateY(-50%);
}
</style>

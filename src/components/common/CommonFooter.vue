<template>
<list :style="{background:bgColor,height:height,lineHeight:height}">
    <cell>
        <cell class="inforwarp">
            <cell class="infoBox">
                <cell>
                    <image class="temperature" src="@/assets/img/温度.png"></image>
                    <text class="text">{{temperature}}℃</text>
                </cell>
                <cell>
                    <image class="humidity" src="@/assets/img/湿度.png"></image>
                    <text class="text">{{humidity}}%</text>
                </cell>
            </cell>
        </cell>
    </cell>
</list>

  
</template>

<script>
export default {
  props: ['bgColor', 'height'],
  data () {
    return {
      time: '',
      date: '',
      temperature: '28',
      humidity: '28',
      number: '100'
    }
  },
  methods: {
    //实时时间
    updateTime() { 
        var cd = new Date(); 
        this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2); 
        this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2)  ;
    },
    zeroPadding(num, digit) { 
        var zero = ''; 
        for (var i = 0; i < digit; i++) {
        zero += '0'
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
    width: 750px;
    background-color: #30374a;
    /* position: absolute;
    bottom: 0; */
    color: #ffffff;
}
.el-row{
    margin-left: 3.2px;
    margin-right: 3.2px;
    height: 750px;
}
.infoWrap{
    height: 750px;
    
}
.infoBox {
  position: absolute;
  top:375px;
  transform:translateY(-375px);
}
.infoBox li{
  width: 15.472px;
  height: 6.912px;
  border-radius:3.456px;
  background-color: #5c6170; 
  left: 0;
  margin-right: 5.04px;
  font-size: 3.424px;
  line-height: 6.912px;
  text-align: center;
}
.timeBox{
  right: 0;
  margin-left: 2.352px;
  font-size: 3.616px;

}
.temperature{
    height: 750px;
    position: absolute;
    left: 0;
}
.head{
    position: absolute;
    height: 600px;
    top:375px;
    left: 37px;
    transform:translateY(-375px);
   
}
.text{
    right: 0;
    margin-right: 75px;
}
.person{
    margin-left: 0.34rem;
}
.infoBox .humidity{
    position: absolute;
    height: 600px;
    top:375px;
    left: 37px;
    transform:translateY(-375px);
   
}
</style>

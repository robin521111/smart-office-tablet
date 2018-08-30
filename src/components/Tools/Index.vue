<template>
    <el-main>
        <el-row class="textWrap">
            <el-col >
                <div class="infoWrap">
                    <div style="height:0.3rem;">
                        <span class="tips" v-show="tips">Next meeting will be start</span>
                    </div>
                    <div>
                        <span class="lable">Topic:</span>
                        <span class="info">{{title}}</span>
                    </div>
                     <div>
                        <span class="lable">Duratin:</span>
                        <span class="info">{{startTime}}-{{endTime}}</span>
                    </div>
                     <div>
                        <span class="lable">Organizer:</span>
                        <span class="info">{{organizer}}{{position}}</span>
                    </div>
                     <div>
                        <span class="lable">Number:</span>
                        <span class="info">{{number}}</span>
                    </div>
                </div>
                <div class="tipsArea">
                    <p class="rest">{{minutes}}:{{seconds}}</p>
                    <button class="btn finish"  @click="dialogVisible = true">END</button>
                </div>
            </el-col>
        </el-row>
        <el-row class="toolWrap">
            <el-col style="height:100%">
                <ul class="toolBox">
                    <li class="tool">
                        <el-row>
                            <el-col class="imgTitle">
                                <img src="@/assets/img/灯光配置.png" alt="">
                            </el-col>
                        </el-row>
                        <el-row class="btnBox">
                            <el-col class="btnWrap">
                                <button class="btn" :class="lightLeft==true?'lightOff':'lightOn'" @click="lightLeft = !lightLeft">
                                    <img src="@/assets/img/灯光暗.png" alt="" v-show="lightLeft">
                                    <img src="@/assets/img/灯光亮.png" alt="" v-show="!lightLeft">
                                </button>
                                <button class="btn rightBtn" :class="lightRight==true?'lightOff':'lightOn'" @click="lightRight = !lightRight">
                                    <img src="@/assets/img/灯光暗.png" alt="" v-show="lightRight">
                                    <img src="@/assets/img/灯光亮.png" alt="" v-show="!lightRight">
                                </button>
                            </el-col>
                        </el-row>
                    </li>
                     <li class="tool">
                        <el-row>
                            <el-col class="imgTitle">
                                <img src="@/assets/img/电视.png" alt="">
                            </el-col>
                        </el-row>
                        <el-row class="btnBox">
                            <el-col class="btnWrap">
                                <input class="switch switch-anim switch-tv" type="checkbox"  @change="isTv = !isTv">
                                <div class="btn input" @click="changeTV">
                                    <img src="@/assets/img/TV链接.svg" alt="" v-show="isTv">
                                    <img src="@/assets/img/TV断开.svg" alt="" v-show="!isTv">
                                </div>
                            </el-col>
                        </el-row>
                     <li class="tool">
                        <el-row>
                            <el-col class="imgTitle">
                                <img src="@/assets/img/视频会议.png" alt="">
                            </el-col>
                        </el-row>
                        <el-row class="btnBox">
                            <el-col class="btnWrap">
                                <input class="switch switch-anim switch-video" type="checkbox" @change="isLink = !isLink">
                                <button class="btn connect" @click="changeVideo" >
                                    <img src="@/assets/img/连接.png" alt="" v-show="isLink">
                                    <img src="@/assets/img/断开链接.png" alt="" v-show="!isLink">
                                </button>
                            </el-col>
                        </el-row>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <audio id="audio" src="/static/music/ding.mp3"></audio>
        <el-dialog  :visible.sync="dialogVisible"  width="5.28rem"  :show-close="false" :close-on-click-modal="false" center>
            <span class="contnet">Are you sure to end meeting and release current room resource?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" type="info">CANCLE</el-button>
                <el-button @click="dialogVisible = false" type="primary">NO</el-button>
                <el-button @click="dialogVisible = false" type="success">YES</el-button>
            </span>
        </el-dialog>
    </el-main>
</template>

<script>
export default {
  data () {
    return {
        lightLeft:true,
        lightRight:true,
        tvShow:"",
        isTv:false,
        isLink:false,
        title:"Strawberry development dissuss",
        startTime:'13:00',
        endTime:'14:00',
        enddate:'2018-8-22 21:00:00',
        organizer:'Lu,Robin',
        position:'(GIS)',
        number:'4',
        minutes:"",
        seconds:"",
        dialogVisible: false,
        tips:false
    }
  },
  methods: { 
    changeTV(){
        $('.switch-tv').prop('checked',!this.isTv);
        this.isTv = !this.isTv;
    },
    changeVideo(){
        $('.switch-video').prop('checked',!this.isLink);
        this.isLink = !this.isLink;
    },
    countDown(){
        var _this = this;
        var data=new Date();
        var leftTime = (new Date(this.enddate)) - new Date(); //计算剩余的毫秒数
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
        minutes = _this.checkTime(minutes);
        seconds = _this.checkTime(seconds);
        if (minutes >= 0 || seconds >= 0) {
            _this.minutes = minutes;
            _this.seconds = seconds;
        }
        if((minutes=='15'||minutes=='5'||minutes=='01')&&seconds=='00'){
            _this.tips=true;
            var audio = $("#audio")[0];  
            audio.play(); 
            setTimeout(function(){
                _this.tips=false;
            },60000)
        }
    },
    checkTime(i){ //将0-9的数字前面加上0，例1变为01 
        if(i<10) 
        { 
            i = "0" + i; 
        } 
        return i; 
    } 
 },
 mounted(){
    var _this = this;
    var timerID = setInterval(_this.countDown, 1000);
    _this.countDown(); 
 }
}
</script>

<style >
.el-main{
    position: relative;
}
.textWrap{
    height: 2.278rem;
    padding: 0.33rem 0.27rem;
}
.infoWrap{
    color: #ffffff;
    font-size: 0.202rem;
}
.tips{
    font-size: 0.3rem;
    font-weight: bold;
    line-height: 0.3rem;
}
.lable{
    width: 1.09rem;
    display: inline-block;
}
.tipsArea{
    position: absolute;
    text-align: center;
    top: 50%;
    right: 0.753rem;
    transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    -moz-transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
    -o-transform:translateY(-50%);
}
.info{
    font-weight: bold;
}
.rest{
    font-size: 0.3rem;
    font-weight: bold;
    color: #ffffff;
}
.btn.finish{
    background: -webkit-linear-gradient(#ff9638, #ff3000);
    background: -o-linear-gradient(#ff9638, #ff3000);
    background: -moz-linear-gradient(#ff9638, #ff3000);
    background: linear-gradient(#ff9638, #ff3000);
    font-size: 0.182rem;
    color: #ffffff;
    font-weight: bold;
    margin-top:0.33rem; 
}
.toolWrap{
    height: 1.978rem;
    position: absolute;
    bottom:0.11rem;
}
.toolBox{
    height: 100%;
    overflow-x: scroll;
}
.tool{
    float: left;
    height: 100%;
    width: 2.447rem;
    background-clip: border-box;
    background: #252b40;
}
.tool:nth-child(2){
    margin: 0 0.073rem;
}
.imgTitle{
    height: 0.681rem;
    background: #393e51;
    position: relative;
}
.imgTitle img{
    height: 70%;
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
}
.btnBox{
    width: 100%;
    height: 1.297rem;
    position: relative;
}
.btnWrap{
    width: 100%;
    height: 1.297rem;
    position: absolute;
    text-align: center;
    top:50%;
    transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    -moz-transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
    -o-transform:translateY(-50%);
    line-height: 1.297rem;
}
.btn{
    width: 0.63rem;
    height: 0.63rem;
    border: 0;
    border-radius: 50%;
    text-align: center;
    background: #37b3c9;
    line-height: 0.63rem;
    box-shadow: 0 3px 5px #0d0f16;
}
.rightBtn{
    margin-left: 0.505rem;
}
.lightOff{
    background: #a09b9b;
}
.lightOn{
    background: #3b3d46;
    box-shadow: 0 0 0.32rem 3px #909383;
}
.input,.connect{
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.535rem;
}
.input img{
    width: 80%;
    height: 80%;
    vertical-align: middle;
}
.connect img{
    width: 60%;
    height: 60%;
    vertical-align: middle;
}
.lightOff img,.lightOn img{
    width: 70%;
    height: 50%;
    vertical-align: middle;
}
.rightBtn img{
    transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
}
button:focus{
    outline:0;
} 
.switch {
    width: 0.557rem;
    height: 0.337rem;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 0.1685rem;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    vertical-align: middle;
}
.switch:before {
    content: '';
    width:  0.327rem;
    height:  0.327rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.1635rem;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.switch:checked {
    border-color: #64bd63;
    box-shadow: #64bd63 0 0 0 16px inset;
    background-color: #64bd63;
}
.switch:checked:before {
    left: 0.23rem;
}
.switch.switch-anim {
    transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
}
.switch.switch-anim:before {
    transition: left 0.3s;
}
.switch.switch-anim:checked {
    box-shadow: #64bd63 0 0 0 16px inset;
    background-color: #64bd63;
    transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s;
}
.switch.switch-anim:checked:before {
    transition: left 0.3s;
}
.el-dialog{
    padding: 0.35rem;
    border-radius: 0.055rem;
}
.el-dialog__header{
    padding: 0;
}
.el-dialog__body{
    font-size: 0.264rem;
    color: #000;
}
.el-dialog__footer{
     padding: 0;
}
.el-button{
    font-size: 0.264rem;
    width: 1.366rem;
    border-radius: 0.055rem;
}
.audio{
    width: 0;
    height: 0;
}
</style>

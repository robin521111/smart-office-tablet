<template>
  <div class="container">
    <div class="header"></div>
    <div>
      <div>
        <text class='title'>Smart Office System</text>
        <text class='rome'>{{romeId}}</text>
    </div>
  <router-view></router-view>
  <div class="footer"></div>
  </div>
</div>
   
</template>

<script>
import CommonFooter from './common/CommonFooter'
export default {
  name: 'index',
  data () {
    return {
         romeId:'C3'
    }
  },
  components:{
    CommonFooter
  }
}
</script>

<style >
.container{
  position: relative;
  height: 1;
  background-color: #1c2238;
}
.el-main{
    padding: 0;
}
.el-header{
    width: 1;
    background-color: #30374a;
    color: #ffffff;
    line-height: 9.84px;;
}
.el-header .el-row{
    margin-left: 3.2px;
    margin-right: 3.2px;
}
.rome{
  right: 0;
  font-size: 3px;
  font-weight: bold;
  margin-right: 3.2px;
}
.title{
  font-size:10; 
}
.header{
  height: 9.84px;
}
.footer{
  background-color: #30374a;
  height: 9.84px;
}
</style>

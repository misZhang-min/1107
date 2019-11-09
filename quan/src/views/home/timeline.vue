<template>
    <div class="timeline">
      <div class="ipt">
        <span class="iconfont icon-xiangji"></span>
        <span><input type="text" placeholder="试试搜索你的好友名字"/></span>
      </div>
      <div class="context">
        
      </div>
    </div>
</template>
<script>
import '../../assets/download (1)/font_nshipyi9nw/iconfont.css'
export default {
    
}
</script>
<style lang="scss" scoped>
  .ipt{
      width:100%;
      height: 50px;
      line-height: 50px;
      position: fixed;
      top:0;
      .iconfont{
          margin-left:10px; 
          color:#F76968;
      }
      input{
          width:75%;
          height: 30px;
          border-radius: 10px;
          border:none;
          background: #F0F0F0;
          padding-left: 25px;
          margin-left: 20px;
          margin-top: 10px;
      }
  }  
</style>
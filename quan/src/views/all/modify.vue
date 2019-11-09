<template>
   <div class="login">
     <div class="ti">更改密码</div>
     <div class="inp">
        <input type="text" placeholder="输入原密码"/>
        <input type="text" placeholder="输入新密码"/> 
     </div>
     <button class="btn">确认提交</button>
   </div>
</template>
<style scoped lang="scss">
  .ti{
    width:100%;
    height: 50px;
    background: #F2F2F2;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
  .inp{
    input{
        width:90%;
        height: 35px;
        background: #F2F2F2;
        padding-left: 5px;
        margin-left:15px;
        border:none;
    }
  }
  .btn{
        width:90%;
        height: 35px;
        background: #F76968;
        color:#fff;
        margin-left:15px;
        border:none;  
  }
</style>
<template>
   <div class="login">
     <div class="ti">
         <span>返回</span>
         <span>个人信息</span>
         <span>编辑</span>
     </div>
     <div class="inp">
         <p><span>账号名称:</span><input type="text" placeholder="张敏"/></p>
         <p><span>年龄:</span><input type="text" placeholder="18" class="peo"/></p>
     </div>
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
    display: flex;
    justify-content: space-around;
  }
  .inp{
      p{
          margin-left: 10px;
          .peo{
              margin-left: 50px;
          }
      }

      span{
          font-size: 18px;
      }
    input{
        width:70%;
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
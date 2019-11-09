<template>
   <div class="login">
     <div class="ti">圈子注册</div>
     <div class="inp">
        <input type="text" placeholder="用户名"/>
        <input type="text" placeholder="登录密码"/> 
     </div>
     <button class="btn" @click="register">注册</button>
   </div>
</template>
<script>
export default {
  data(){
    return {
      userName:'',
      userPwd:''
    }
  },
  methods:{
    async register(){
      let {userName,userPwd}=this;
      let result=await register({userName,userPwd})
      if(result&&result.data.code===0){
        alert(result.data.msg)
      }else{
        window.history.back()
      }
    }
  }
}
</script>
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
<template>
   <div class="logins">
     <div class="ti">圈子登录</div>
     <div class="inp">
        <input type="text" placeholder="用户名"/>
        <input type="text" placeholder="登录密码"/> 
     </div>
     <button class="btn" @click="login">登录</button>
     <router-link to="/register">没有账号,快速注册</router-link>
   </div>
</template>
<script>

export default {
  data(){
    return {
      userName: '',
      userPwd:''
    }
  },
  methods:{
    async login(){
      let {userName,userPwd}=this;
      let result=await login({userName,userPwd});
      if(result&&result.data.code===1){
         window.sessionStorage.setItem('isLogin','true')
         this.$router.replace('/')
      }
      this.$toast(result.data.msg)
    },
    checkUserName(){
      if(!/\w{3,20}/.test(this.userName)){
        this.$toast('请输入正确的用户名')
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
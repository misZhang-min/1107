<template>
  <div class="detail">
    <div class="nav">
      <span class="back" @click="backBtn">返回</span>
      <span class="spn1">{{list.name}}</span>
      <span class="spn2">写回答</span>
      <span class="spn3">...</span>
    </div>
    <div class="main">
      {{list.text}}
    </div>
    <div class="footer">
      <p>
        <span @click="btnZan">赞同</span>
        <span>{{list.zan}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
   name:'detail',
   data(){
      return {
        list:''
      }
   } ,
   created(){
      this.list=this.$route.query.item
    // console.log(list)
   },
   methods:{
     backBtn(){
       window.history.back()
     },
     btnZan(){
         
        localStorage.setItem("temp", this.list.zan++)
        console.log(localStorage.getItem("temp"))
     }
   }
}
</script>
<style lang="scss" scoped>
  *{
     padding: 0;
     margin: 0;
     list-style: none;
  }
  html,body{
    width:100%;
    height: 100%; 
  }
  .detail{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column
  }
  .nav{
    width:100%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    .spn2{
        color:#0084FF;
        font-size: 16px;
        font-weight:550;
    }
    .spn3{
       font-size:35px;
       font-weight: 750;
       margin-top:-8px;
    }
    .spn1{
      font-size:18px;
      font-weight: 750;
    }
  }
  .main{
    flex:1;
    overflow: auto;
  }
  .footer{
    width:100%;
    height: 50px;
    border-top:1px solid #ccc;
    line-height: 50px;
    span{
      margin-left: 25px;
    }
  }
</style>
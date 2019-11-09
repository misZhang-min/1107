<template>
    <div class="my">
      <div class="mine">
        <div class="left"><img src="http://img2.imgtn.bdimg.com/it/u=1293628805,2088349833&fm=26&gp=0.jpg" alt=""></div>
        <div class="right">
          <p class="name">张敏</p>
          <p class="age"><span class="agenum">年龄:18</span><span>活跃度<b>32</b></span></p>
        </div>
      </div>
      <div class="people">
        <router-link to="/info" tag="p" class="router-link">
            <i class="iconfont icon-geren"></i>
            <span>个人信息</span>
        </router-link>
        <router-link to="/comment" tag="p" class="router-link">
            <i class="iconfont icon-pinglun"></i>
            <span>我的评论</span>
        </router-link>
        <router-link to="" tag="p" class="router-link">
            <i class="iconfont icon-shoucang"></i>
            <span>个人收藏</span>
        </router-link>
      </div>
      <div class="pass">
        <router-link to="/modify" tag="p" class="router-link">
            <i class="iconfont icon-_canshu_xiugaicanshudingyi"></i>
            <span>修改密码</span>
        </router-link>
        <router-link to="/login" tag="p" class="router-link">
            <i class="iconfont icon-tuichu"></i>
            <span>退出</span>
        </router-link>
        <router-link to="/login" tag="p" class="router-link">
            <i class="iconfont icon-huishouzhan"></i>
            <span>注销用户</span>
        </router-link>
      </div> 
    </div>
</template>
<script>
import '../../assets/download (1)/font_nshipyi9nw/iconfont.css'
export default {
    
}
</script>
<style lang="scss" scoped>

 .my{
     width:100%;
     height: 100%;
     background: #F5F5F5;
 }
   .mine{
       width:100%;
       height:100px;
       background: #F76968;
       display: flex;
       border-bottom: 25px solid #F5F5F5;
       .left{
           flex:1;
           text-align: center;
           img{
               width:80px;
               height:80px;
               border-radius: 50px;
               margin-top:10px;
               
           }
       }
       .right{
           flex:2;
           .name{
              font-size:25px;
              font-weight: 550;
              color:#fff;
              margin-left:12px;
              margin-top:20px;
           }
           .age{
               width:230px;
               color:#fff;
               font-size:25px;
               display: flex;
               justify-content: space-around;
               .agenum{
                   margin-top:6px;
               }
               b{ 
                   font-size:35px;
               }
           }
       }
   }
   .people{
       width:100%;
       height: 155px;
       background: #fff;
       border-bottom: 25px solid #F5F5F5;
       .router-link{
          i{
              font-size:25px;
               margin-left: 15px;
               color:#F76968;
          }
          width:100%;
          height: 50px;
          border-bottom: 0.5px solid #ccc;
          line-height:50px;
       }
       span{
           font-size: 18px;
           margin-left:10px;
       }
   }
    .pass{
       width:100%;
       height: 155px;
       background: #fff;
       border-bottom: 25px solid #F5F5F5;
        span{
           font-size: 18px;
            margin-left:10px;
       }
       .router-link{
          width:100%;
          height: 50px;
          border-bottom: 0.5px solid #ccc;
          line-height:50px;
          i{
              font-size:25px;
              margin-left: 15px;
              color:#F76968;
          }
       }
   }
</style>
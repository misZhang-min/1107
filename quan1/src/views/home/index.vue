<template>
    <div class="wrap"> 
        <div class="main">
            <router-view></router-view>
        </div>
        <footer>
            <router-link to="/home/timeline" tag="span">
                <i class="iconfont iconwangluo"></i>
                <span> 圈子</span>    
            </router-link>
            <router-link to="/home/my" tag="span">
                <i class="iconfont iconnanhai"></i>
                <span> 我的</span>
            </router-link>
        </footer>
    </div>
</template>

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
.wrap{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        flex:1;
        overflow: auto;
    }
    footer{
      width:100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #ccc;
      font-size: 18px;
    }
}
span{
    color: #4F4D4D
}
.router-link-active, .router-link-active span{
    color: #F76968
}
</style>
<template>
<div class='top-warp'>
    <el-row :gutter="20">
    <el-col :span="19" class="admin-info">后台管werwer理系统</el-col>
    <el-col :span="4" class="user">
      <el-dropdown>
    <span class="el-dropdown-link">
        
      
      <div class="avatar">
        <el-avatar :size="30" :src="store.userInfo.avatar" />
        <span>{{store.userInfo.name}}</span>
      </div>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item>修改信息</el-dropdown-item>
        <el-dropdown-item @click="logout">推出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </el-col>
  </el-row>

</div>

</template>
<script setup lang='ts'>
import {ref,reactive} from 'vue';
import { useUserStore } from "@/stores/userInfo";

const store = useUserStore();

const logout = ()=>{
  store.logout();
}


</script>
<style scoped lang='less'>
  .top-warp{
   background-color: aqua;
   height: 60px;
   margin: auto;
   background-image: url('https://csdnimg.cn/release/educms/public/img/new_banner_bg.9d4b885e.png');
   background-size: 100% 60px;
  }
  .admin-info{
    line-height: 60px;
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
  }
  .user{
    margin-top: 20px;
  }
  .avatar{
    display: flex;
    align-items:center;
    span{
      margin-left: 10px;
    }
  }
</style>
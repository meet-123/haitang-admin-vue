
<template>
  <div class="common-layout">
    <el-container>
      <el-header><Top></Top></el-header>
      <el-container class="container">
        <el-aside width="240px" ><Menu></Menu></el-aside>
        <el-main><Content></Content></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue';
import Top from "./layout/top/index.vue";
import Menu from "./layout/menu/index.vue";
import Content from "./layout/content/index.vue";

</script>
<style  lang="less">
  
.common-layout{
  height: 100%;
  .is-vertical{
    height: 100%;
  }
}



</style>
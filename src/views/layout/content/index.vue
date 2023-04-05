<template>
  <el-row class="breadcrumb pt10 pb20">
    <el-breadcrumb :separator-icon="ArrowRight" >
    <el-breadcrumb-item :to="{ path: '/'+pathArr[1] }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="pathArr.length>=2" :to="{path:'/'+pathArr[1]+'/'+pathArr[2]}">{{pathArr[2]}}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="pathArr.length>=4">{{pathArr[3]}} </el-breadcrumb-item>
  </el-breadcrumb>
  </el-row>
    <RouterView />
</template>
<script setup lang='ts'>
import {RouterView,useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref,watch } from 'vue';

const route = useRoute();

let pathArr = ref<string[]>([]) 
watch(route,(oldV,newV)=>{
    pathArr.value = newV.path.split('/')
})



// import {ref,watchEffect,toRefs} from 'vue'
// const route = useRoute();

//   let path = route.path;
 
  
</script>

  
  
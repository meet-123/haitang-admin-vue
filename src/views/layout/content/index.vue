<template>
  <el-row class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  </el-row>
  
    <RouterView />
</template>
<script setup lang='ts'>
import {RouterView } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'





</script>

  
  
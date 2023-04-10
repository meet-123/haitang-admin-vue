<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="标题" >
        <el-input v-model="form.title" class="w600"/>
      </el-form-item>
      <el-form-item label="分类" >
        <el-radio-group v-model="form.type">
          <el-radio label="html" />
          <el-radio label="md" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.description" type="textarea" class="w600"/>
      </el-form-item>
      <!-- <el-form-item label="封面">
      </el-form-item> -->

      <el-form-item label="内容">
        <!-- <el-input  type="textarea" class="w600"/> -->
        <wangEditor ></wangEditor>
     </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <!-- <el-button>Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { ElMessage } from 'element-plus';
import { reactive,ref } from 'vue'
 import type {ActricleType} from '@/types/user_typs'
import {saveArticleApi,getArticleByIdApi} from "@/api/index"

import WangEditor from '../wangeditor/index.vue';
import { useRoute } from 'vue-router';
  const route = useRoute();
  const form = ref({
    id:0,
    title: '',
    content: '',
    type: 'html',
    description: '',
    publish_time:""
  })
  
//   console.log(route.query,1111);


  let id = route.query.id || 0;



  const getArticleInfo = async(id:Number | String)=>{
    if(id === 0 ) return;

       let data = await getArticleByIdApi(id)
       console.log(data);
       if(data.code == 200)
       {
        // form.value = data.data;
       }

  }
  // getArticleInfo(id);





  const rules = (form:any)=>{
    if(form.title == '')
    {
        ElMessage.error('标题不能为空');
        return false;
    }
    if(form.content == '')
    {
        ElMessage.error('内容不能为空');
        return false;
    }
    if(form.description == '')
    {
        ElMessage.error('描述不能为空');
        return false;
    }
    return true;
  }




const submited = ref(false);

  const onSubmit = async () => {
        
    if(submited.value){
        ElMessage.error('提交中请稍后');
        return
    }  
    if(!rules(form.value))    return;
    submited.value = true;
    let res = await saveArticleApi(form.value);
    if(res.code == 200){
        ElMessage.success('保存成功')
    }else{
        ElMessage.error('保存失败');
    }
    submited.value = false;
  }
  </script>
  <style scoped lang="less">
    .w600{
        width: 600px;
    }
</style>
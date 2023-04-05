<template>
<el-row class="select">
    <el-col :span="6">
        <el-date-picker
        type="daterange"
        range-separator="To"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        v-model="date"
      />
    </el-col>
    <el-col :span="10" class="ml30">
        <el-select  class="m-2" placeholder="选择分类" v-model="catogry_id">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
    </el-col>
    <el-col :span="3" class="ml10">
         <el-input
      class="w-50 m-2"
      placeholder="请输入搜索关键词"
      v-model="keyword"
      :suffix-icon="Search"
    /></el-col>
  </el-row>

    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="Date" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column property="name" label="名称" width="120" />
      <el-table-column property="address" label="地址" show-overflow-tooltip />
      <el-table-column label="操作" width="180">
        <template #default="scope">
        <el-button size="small" @click="edit(1)">修改</el-button>
        <el-button size="small" type="danger">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
    
    <el-row class="mt20">
      <el-col :span="8">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >全选</el-button
      >
      <el-button @click="toggleSelection()">全不选</el-button>
      </el-col>
      <el-col :span="16" class="page">
        <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="50"
          class="mt-4"
        />
</el-col>
    </el-row>

  </template> 
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'
  import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';  

  

  interface User {
    date: string
    name: string
    address: string
  }


  const router = useRouter();

  let catogry_id = ref('');
  let keyword = ref('');
  let date = ref('');

  const edit = (id:number)=>{
    id = 7;
      router.push({
        path:'/disabled/article/edit',
        query:{
          id
        }
      })
  }
  
  
  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref<User[]>([])
  const toggleSelection = (rows?: User[]) => {
    if (rows) {
      rows.forEach((row) => {
        multipleTableRef.value!.toggleRowSelection(row, undefined)
      })
    } else {
      multipleTableRef.value!.clearSelection()
    }
  }
  const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
  }
  
  const tableData: User[] = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]

  const options = [
  {
    value: '0',
    label:'全部',
  },
  {
    value: '1',
    label: '分类1',
  },
  {
    value: '2',
    label: '分类2',
  },
 
]
  </script>
  <style scoped lang="less">
  .breadcrumb, .select {
      margin: 10px 0;
  }
 
</style>
  
<template>
  <div class="warrp">
    <div class="title">
      <span>后台管理系统</span>
    </div>
    <el-form :model="form" label-width="120px" class="form">
      <el-form-item label="用户名">
        <el-input v-model="form.name" class="w-300" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" show-password class="w-300" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="resetData">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script lang="ts" setup>
import { reactive, ref, markRaw, shallowRef } from "vue";
import { useRoute } from "vue-router";
import { View, Hide } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useUserStore } from "../../stores/userInfo";
import { mapActions } from "pinia";
const store = useUserStore();

type LoginForm = {
  name: string;
  pwd: string;
};
let form = reactive<LoginForm>({
  name: "",
  pwd: "",
});

const resetData = () => {
  form.name = "";
  form.pwd = "";
  localStorage.setItem("token", "");
};

const onSubmit = async () => {
  if (form.name == "") {
    ElMessage.error("姓名不能为空");
    return;
  }
  if (form.pwd == "") {
    ElMessage.error("密码不能为空");
    return;
  }
  if (form.pwd.length < 6) {
    ElMessage.error("密码长度最低6位");
    return;
  }
  store.doLogin(form);
};
</script>
  <style scoped lang="less">
.warrp {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 100px;
    font-size: 50px;
    letter-spacing: 1px;
    background-color: aquamarine;
    line-height: 100px;
    font-weight: 600;
  }
}
.form {
  width: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 200px;
  padding: 30px 0 10px;
}

:deep input[type="password"] {
  height: 30px;
  line-height: 30px;
  width: 257px;
  border: none;
}

.w-300 {
  width: 300px;
}
</style>
  
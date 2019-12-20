<template>
  <div>
    <div class="loginBox">
      <h1 class="myTitle">专属后台管理系统</h1>
      <el-form :label-position="top" label-suffix=':' label-width='80px'>
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.userName" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.passWord" clearable type='password'> </el-input>
        </el-form-item>
      </el-form>
      <div class="myBtns">
        <el-button type="success" size="medium">确认</el-button>
        <el-button type="info" size="mini">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        userName: 'admin',
        passWord: '123456'
      },
      top: 'right'
    };
  }
};
</script>
<style lang="less" scoped>
  .myTitle{
    color:burlywood;
  }
</style>

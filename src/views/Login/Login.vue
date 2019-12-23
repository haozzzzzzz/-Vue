<template>
  <div class="loginBox1">
    <div class="loginBox2">
      <h1 class="myTitle">专属后台管理系统</h1>
      <el-form :label-position="top" label-suffix=":" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.userName" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.passWord" clearable type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="myBtns">
        <el-button type="success" size="medium" @click="login">确认</el-button>
        <el-button type="info" size="mini" @click="reset">重置</el-button>
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
  },
  methods: {
    login() {
      this.$http.get('http://192.168.210.120:8080/login').then(res => {
        console.log(res);
        if (res.status === 200) {
          this.$router.push('/home');
        }
      });
    },
    logout() {
      let params = {
        admin: 1,
        passWord: 2
      };
      this.$store.dispatch('dataInfoDetail', params).then(res => {
        console.log(res);
      });
    },
    logoutttt() {
      this.$store.dispatch('dataList').then(res => {
        console.log(res);
      });
    },
    reset() {
      this.formLabelAlign = {
        userName: '',
        passWord: ''
      };
      this.logout()
      this.logoutttt()
    }
  }
};
</script>
<style lang='less' scoped>
.myTitle {
  color: burlywood;
}
</style>

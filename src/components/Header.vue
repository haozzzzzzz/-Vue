<template>
  <div>
    <el-container>
      <el-header>
        <div style="margin-left:10px; font-size:22px;">爱心小店</div>
        <div style="margin-right:10px; font-size:12px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="OutClick">注销登录</el-dropdown-item>
              <el-dropdown-item @click.native="resetPas">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{name}}</span>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    OutClick() {
      this.$router.push('/Login')
    },
    resetPas() {
      this.$message.error('不让修改密码,哈哈~')
    }
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$store.getters.getNameByGetters)
      this.name = localStorage.getItem('key')
      console.log(this.name)
    })
  }
}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #80bbe8;
  line-height: 60px;
  color: #fff;
  height: 60px;
}
</style>

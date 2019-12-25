<template>
  <div>
    <el-container>
      <el-header>
        <div style="margin-left:10px; font-size:22px;">
          爱心小店
        </div>
        <div style="margin-right:10px; font-size:12px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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

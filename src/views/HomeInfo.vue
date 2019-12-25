<template>
  <div class="home">
    <Header />
    <div class="MyFlex">
      <LeftNav />
      <MainInfo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftNav from '@/components/LeftNav.vue'
import Header from '@/components/Header.vue'
import MainInfo from '@/views/MainInfo.vue'
export default {
  components: {
    LeftNav,
    MainInfo,
    Header
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100% !important;
}
.MyFlex {
  display: flex;
}
</style>

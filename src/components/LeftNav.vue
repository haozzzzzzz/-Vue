<template>
  <div class="hello">
    <el-container>
        <el-aside width="200px" class="left-nav">
          <ul>
            <li v-for="(item, index) in getDataList" :key="index">
              <div>{{item.title}}</div>
            </li>
          </ul>
        </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getDataList: [
        {
          title: '店面',
          id: 1
        },
        {
          title: '经典套餐',
          id: 2
        },
        {
          title: '人气推荐',
          id: 3
        },
        {
          title: '优惠折扣',
          id: 4
        },
        {
          title: '新品推荐',
          id: 5
        },
        {
          title: '随心搭配',
          id: 6
        },
        {
          title: '饮料小吃',
          id: 7
        },
        {
          title: '关于我们',
          id: 8
        }
      ]
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.el-container {
  height: calc(100% - 60px) !important;
  background-color: pink;
}
.el-aside {
  background-color: darkslategray;
  height: calc(100vh - 60px);
}
.myAside {
  float: left;
}
.left-nav {
  color: #fff;
  font-size: 10px;
  background-color: #80bbe8;
  width: 5%;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      width: 100%;
      text-align: center;
      height: 50xp;
      line-height: 50px;
      border-bottom: 1px solid #80bbe8;
      box-sizing: border-box;
    }
  }
}
</style>

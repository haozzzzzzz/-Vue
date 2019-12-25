<template>
  <div class="about">
    <el-row class="myinfos">
      <el-col :span="7" class="posList" id="mypos">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width:100%" :data="mydata">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="商品数量"></el-table-column>
              <el-table-column prop="price" label="金额" width="50"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right" align="center">
                <template :scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">添加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div>数量：{{ number }} &nbsp;&nbsp;&nbsp;&nbsp;金额 : {{ price }} 元</div>
            <div class="btns">
              <el-button type="success">挂单</el-button>
              <el-button type="warning">删除</el-button>
              <el-button type="danger">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="取号">取号</el-tab-pane>
          <el-tab-pane label="就餐">就餐</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17" class="cateList">
        常用商品{{ddd}}
        <div>
          <ul>
            <li v-for="(item, index) in goodsinfo" :key="index" @click="addgoodsInfo(item)">
              <span>{{ item.goodsName }}</span>
              <span class="my-price">￥: {{ item.price }}R</span>
            </li>
          </ul>
        </div>
        <el-tabs class="my-pic">
          <el-tab-pane label="汉堡">
            <div>
              <ul>
                <li v-for="(item, index) in foodsInfo" :key="index">
                  <span class="foodsImg">
                    <img :src="item.foodsImg" />
                  </span>
                  <span class="foodsName">{{ item.foodsName }}</span>
                  <span class="foodsPrice">￥{{ item.foodsPrice }}</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="小食"></el-tab-pane>
          <el-tab-pane label="饮料"></el-tab-pane>
          <el-tab-pane label="套餐"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ddd: '',
      loginForm: {
        username: 'zs',
        password: '123'
      },
      number: 0,
      price: 0,
      mydata: [
        {
          goodsName: '可口可乐',
          count: 1,
          price: 88,
          goodsId: 1
        },
        {
          goodsId: 2,
          goodsName: '麦乐鸡腿堡',
          count: 12,
          price: 88
        },
        {
          goodsId: 3,
          goodsName: '炸鸡薯条',
          count: 8,
          price: 24
        }
      ],
      goodsinfo: [
        {
          goodsId: 1,
          goodsName: '香辣鸡腿堡',
          price: 19
        },
        {
          goodsId: 2,
          goodsName: '炸鸡汉堡',
          price: 15
        },
        {
          goodsId: 3,
          goodsName: '肥宅快乐水',
          price: 12
        },
        {
          goodsId: 4,
          goodsName: '炸鸡薯条',
          price: 20
        },
        {
          goodsId: 5,
          goodsName: '榴莲披萨',
          price: 25
        },
        {
          goodsId: 6,
          goodsName: '麦香鸡翅啊',
          price: 12
        },
        {
          goodsId: 7,
          goodsName: 'Kfc全家桶',
          price: 50
        }
      ],
      foodsInfo: [
        {
          foodsID: 1,
          foodsImg: '../../assets/logo.png',
          foodsName: '香辣鸡腿堡',
          foodsPrice: 18
        },
        {
          foodsID: 2,
          foodsImg: '../../assets/logo.png',
          foodsName: '全家桶',
          foodsPrice: 68
        },
        {
          foodsID: 3,
          foodsImg: '../../assets/logo.png',
          foodsName: '炸鸡汉堡',
          foodsPrice: 38
        },
        {
          foodsID: 4,
          foodsImg: '../../assets/logo.png',
          foodsName: '榴莲披萨',
          foodsPrice: 48
        },
        {
          foodsID: 5,
          foodsImg: '../../assets/logo.png',
          foodsName: '鸡肉卷套餐',
          foodsPrice: 25
        },
        {
          foodsID: 6,
          foodsImg: '../../assets/logo.png',
          foodsName: '香辣鸡翅',
          foodsPrice: 20
        },
        {
          foodsID: 7,
          foodsImg: '../../assets/logo.png',
          foodsName: '鸡肉卷套餐',
          foodsPrice: 25
        },
        {
          foodsID: 8,
          foodsImg: '../../assets/logo.png',
          foodsName: '鸡肉卷套餐',
          foodsPrice: 25
        }
      ]
    }
  },
  methods: {
    addgoodsInfo(goodsinfo) {
      console.log(goodsinfo)

      this.number = 0
      this.price = 0
      // 商品列表中没有 新增的商品
      let isHave = false
      for (var i = 0; i < this.mydata.length; i++) {
        if (this.mydata[i].goodsId === goodsinfo.goodsId) {
          isHave = true
        }
      }
      // 如果商品存在列表中
      if (isHave) {
        let arr = this.mydata.filter(item => {
          item.goodsId = goodsinfo.goodsId
        })
        console.log(arr)
        arr[0].count++
      } else {
        let nowfoods = {
          goodsId: goodsinfo.goodsId,
          goodsName: goodsinfo.goodsName,
          price: goodsinfo.price,
          count: 1
        }
        console.log(nowfoods, goodsinfo)

        this.mydata.push(nowfoods)
      }
      this.mydata.forEach(item => {
        this.number += item.count
        this.price = this.price + item.count * item.price
      })
    }
  }
}
</script>
<style lang="less" scoped>
li {
  cursor: pointer;
}
.myinfos {
  width: 95%;
  padding-left: 10px;
}
.about {
  height: 100%;
  display: flex;
}
.posList {
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #c0ccda;
}
.cateList {
  height: 40px;
  background-color: #f9fafc;
  border-bottom: 1px solid #d3dce6;
  padding: 10px;
  text-align: left;
  ul {
    li {
      list-style: none;
      float: left;
      border: 1px solid #e6e6e6;
      padding: 10px;
      margin: 10px;
      background-color: #fff;
      .my-price {
        color: red;
      }
    }
  }
}
.el-tabs__nav-scroll {
  padding-left: 20px !important;
}
.btns {
  margin-top: 10px;
}
.my-pic {
  clear: both;
  ul {
    li {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 100px;
      padding: 0;
      img {
        padding-left: 10px;
        width: 80px;
        margin: auto;
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link>| -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <p v-for="(item, index) in msg" :key="index">
       <pre v-highlightjs>
         <code>
           {{item}} -->
           <!-- {{JSON.parse(item.xxx)}} -->
         <!-- </code>
       </pre>
      </p> -->
      <!-- <div ref="myBox" style="width:600px;height:400px"> -->

      <!-- </div> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>
<script>
// import echarts from 'echarts'
export default {
  data() {
    return {
    //   msg: [
    //     { name: '张三', age: 18, like: 'playball' },
    //     { name: '李四', age: 19, like: 'playgame' },
    //     { name: '王五', age: 18, like: 'readbook' },
    //     ]
    };
  },
  methods: {
    // getdata() {
    //   let myChart = echarts.init(this.$refs.myBox)
    //   myChart.setOption({
    //       title: {
    //           text: 'ECharts 入门示例'
    //       },
    //       tooltip: {},
    //       xAxis: {
    //           data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //       },
    //       yAxis: {},
    //       series: [{
    //           name: '销量',
    //           type: 'bar',
    //           data: [5, 20, 36, 10, 10, 20]
    //       }]
    //   });
    // }
  },
  created() {
  //  this.$nextTick(function() {
  //     this.getdata()
  //  })
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  height: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

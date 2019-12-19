<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <p v-for="(item, index) in msg" :key="index">
       <pre v-highlightjs>
         <code>
           {{item}}
           <!-- {{JSON.parse(item.xxx)}} -->
         </code>
       </pre>
      </p>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: [
        { name: '张三', age: 18, like: 'playball' },
        { name: '李四', age: 19, like: 'playgame' },
        { name: '王五', age: 18, like: 'readbook' },
        ]
    };
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

# vue-study-
- axios封装(两种请求方式)  api配置  
- git推拉 操作教程 
- 配置eslint配置化 请查看.eslintrc.js 
- 代码格式化 请查看 .prettierrc
- 本地代理  解决跨域
- 打包设置本地相对路径
- vuex仓库的使用
- 高亮格式化代码

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Git推拉使用(git操作)

1.使用git去clone目标远程仓库 git clone '地址'

2.git branch 查看当前所有的分支

3.在本地创建并切换分支  git checkout -b dev  创建并切换到dev分支上

4.讲分支更新到远程仓库  git push origin dev  把本地dev分支推送到远程分支上

5.git branch --set-upstream-to=origin/dev  //  使用git pull 在远程dev上开发  拉取  
`// 这个设置好了 可以直接使用git pull git push 在dev上拉取推送消息`

6.git push(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

7.git merge dev 在当前分支上合并dev分支

8.`git reflog` 查看历史版本号

9.git reset --hard 版本号 实现版本回退

30.本地代码与远程分支做关联 `git remote add origin git@'XXX仓库地址'`


### 配置eslint配置化  请查看.eslintrc.js

### 代码格式化 请查看 .prettierrc

### 设置本地代理 看 vue.config.js 里面有相对路径打包 本地代理解决跨域

### 封装axios 统一管理API请求

### vueX的使用

#### state

1.直接使用this.$store.state获取到值

2.可以利用`vuex`提供的`mapState`辅助函数将state映射到计算属性中去

```javascript
import {mapState} from 'vuex'
// 在组件 引入 辅助函数 在计算属性中映射使用
export default {
   computed: mapState({
     count: state => state.count
   })
}
```
#### Mutations

1.直接使用this.$store.commit('mutationName')获取到同步方法

2.可以利用`vuex`提供的`mapMutations`辅助函数,将mapMutations映射到methods中去

```javascript
import {mapMutations} from 'vuex'
export default {
  methods: mapMutations([
    'mutationName'
  ]
```
#### Actions

1.直接使用this.$store.dispatch(actionName)直接出发函数  异步

2.可以利用`vuex`提供的`mapActions`辅助函数,将mapActions映射到methods中去

```javascript
import {mapActions} from 'vuex'
export default {
  methods: mapActions([
    'actionName',
  ])
}
```
#### Getters

1.直接使用this.$store.getters.valueName 对派生出来的状态进行访问

2.可以利用`vuex`提供的`mapGetters`辅助函数,将mapGetters映射到本地计算属性中去

```javascript
//在vuex store中
const getters = {
  strLength: state => state.aString.length
// 组件中 计算属性中
import {mapGetters} from 'vuex'
export default {
  computed: ... mapGetters(['strLength'])
}
```
### 高亮格式化代码

1.安装 v-highlightjs 并在main.js引入

2.Vue.use(v-highlightjs)

3.引入css放入公共文件,main中引入 使用<pre v-highlightjs><code calss='xxx'>html代码<code><pre>即可使用

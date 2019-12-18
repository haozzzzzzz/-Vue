module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["off", 2], //禁止检查缩进问题
    "space-before-function-paren": 0, // 解决函数名后+1空格的报错
    "no-irregular-whitespace": "off", //这禁止掉 空格报错检查
    'semi': 0 , //不检查分号
    "comma-dangle":0 //尾部多余的,不检查
    //"eslint.antuFixOnSave":"true" 尾部不允许空格, 在settings.json 中设置
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

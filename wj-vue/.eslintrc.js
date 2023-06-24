// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [

    'plugin:vue/essential',

    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  rules: {

    'generator-star-spacing': 'off',
    // 取消强制驼峰命名
    'camelcase': 'off',
    // 'no-tabs': 'off',
    'indent': ["off", 2],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

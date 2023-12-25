/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    // 控制一/多行可接受的属性量
    'vue/max-attributes-per-line': ['error', {
      'singleline': { 'max': 10 },
      'multiline': { 'max': 1, }
    }],
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容前后需要换行符
    'vue/require-default-prop': 'off', // 关闭 props 需要默认值
    'vue/no-v-html': 'off', // 关闭 Disallow use of v-html to prevent XSS attack
    'vue/multi-word-component-names': 'off', // 关闭 组件名称始终是多个单词
    'semi': ['error', 'always'], // 强制在语句末尾使用分号
    'no-unused-vars': 'off', // 禁止使用未声明的变量
    'vue/v-on-event-hyphenation': 'off', // 禁止对模板中的自定义组件强制执行 v-on 事件命名样式
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // 强制使用单引号 & 允许字符串使用反勾号
    // 空标签需要自闭合
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};

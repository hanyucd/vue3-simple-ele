# 移动端: ele-h5

技术栈：Vue3 + Typescript + Pinia + Vite + Vant + Postcss + Pnpm + Eslint + Prettier

### 参考
[eslint-plugin-vue中文文档](https://www.cnblogs.com/qq3279338858/p/16617032.html)

[这可能是vue中eslintrc.js最详细的介绍了](https://segmentfault.com/a/1190000017461203)

[Vue3项目ESLint配置及介绍](http://www.huhaowb.com/2022/10/11/vite%E5%88%9B%E5%BB%BAVue3%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEESLint)

[一文彻底读懂ESLint](https://xieyufei.com/2021/04/25/Front-Eslint.html)

移动端H5适配方案：

1. rem 布局

```bash
- amfe-flexible
amfe-flexible 是配置可伸缩布局方案，主要是将 1rem 设为 viewWidth / 10。

- postcss-pxtorem
postcss-pxtorem 是 postcss 的插件，用于将像素（px）单元生成 rem 单位。
```
2. vw 布局

```bash
- postcss-px-to-viewport
```

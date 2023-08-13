# MCSManager 10.0 网页前端开发文档

## 卡片配置

全局注册一个卡片小组件，网页排版小组件，需要到这里来配置：

https://github.com/unitwk/DIY-Web-UI-Template/tree/main/src/config



### 具体流程

1. 先在 `widgets` 目录新增卡片 Vue 组件

<img width="304" alt="image" src="https://github.com/unitwk/DIY-Web-UI-Template/assets/18360009/db627d37-9a0b-4903-ae0f-e5bb68aedd0e">

2. 去 config/index.ts 中全局注册卡片组件

<img width="748" alt="image" src="https://github.com/unitwk/DIY-Web-UI-Template/assets/18360009/627411a5-415a-4133-a041-0a1e9513fb29">

3. 将卡片放到某个页面路由，这里放到 `控制台` 页面，并且设置相关参数，比如是否可以被删除，最小高度是多少，宽度是多少。

**！！！注意：卡片的ID一定要是唯一，否则自定义布局会出BUG**

<img width="538" alt="image" src="https://github.com/unitwk/DIY-Web-UI-Template/assets/18360009/4b30c7ee-ba15-4bd1-9c4f-3e18f79941a2">

4. 将卡片添加到「新增卡片」板块中（可选）

如果你想让你这个卡片小组件，支持被放在任何页面中，那么这一步就是必须的。依然在 src/config/index.ts 中。

<img width="650" alt="image" src="https://github.com/unitwk/DIY-Web-UI-Template/assets/18360009/088a39e6-e041-4055-8744-8d96b49b9ec8">




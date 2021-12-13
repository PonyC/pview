# 自用项目
用来学习如何自己创建一个组件库

# yarn workspaces
package.json
```json
// 开启yarn 工作区
"private":true,
  "workspaces":[
    "packages/*"
  ]
```
- 给工作区更目录安装开发依赖
  - yarn add jest -D -W
- 给指定工作区安装依赖
  - yarn workspace p-button add lodash@4
- 给所有工作区安装依赖
  - yarn install

# Lerna
采用lerna对项目中的packages进行批量发布
- 全局安装
  - yarn global add lerna
- 初始化
  - lerna init
- 发布
  - lerna publish
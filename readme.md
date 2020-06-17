<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 10:48:43
 * @LastEditTime: 2020-06-17 14:43:21
 * @LastEditors: Song
 -->
 ## 主要内容

UI框架 native-base   +  react-native-web(使用RN组件编写web)

## 启动方式


### `npm start`

开发环境

### `npm test`

测试环境

### `npm run build`

生产环境

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


### 修复
---
#### 错误内容:

 Failed to compile.

./node_modules/react-native-keyboard-aware-scroll-view/lib/KeyboardAwareHOC.js
Attempted import error: 'react-native' does not contain a default export (imported as 'ReactNative').
---
##### 修复方法：

在 config-overrides.js文件 addBabelPlugins()内添加 @babel/plugin-transform-modules-commonjs 
e.g ...addBabelPlugins(..."@babel/plugin-transform-modules-commonjs") seems to fix RNW compatibility.
### 新版已修复无需添加

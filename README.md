# 网易 javaScript 和 React 规范

    基于eslint的JavaScript和React代码检查插件。

## 规范文档

- [React 规范](./doc/react.md)
- [React 可访问性规范](./doc/reactAccessbility.md)
- [模块化规范](./doc/imports.md)
- [最佳实践](./doc/best-practices.md)
- [错误语法](./doc/errors.md)
- [es6](./doc/es6.md)
- [node](./doc/node.md)
- [代码样式](./doc/style.md)
- [变量](./doc/variables.md)

## 安装  
    npm install --save-dev eslint-config-netease

## 依赖包

 `eslint`  
 `babel-eslint`  
 `prettier`  


## 如何配置

1. 通过package.json,添加如下属性：

        "eslintConfig": {
            "extends": "netease"
        }

2. 通过配置文件 根目录下生成`.eslintrc.js`

        module.exports = {
          extends: ["netease"]
        };

## 基础包

引入`netease` 或 `netease/base`

只包含`js语法 + prettier样式检查 + prettier样式修复`
其中prettier配置写死成

    {
      semi: true,
      singleQuote: true,
      // 尽可能添加尾随逗号
      trailingComma: 'all',
      // 超过了换行显示数
      printWidth: 120,
      // 留白字符
      tabWidth: 2,
    };


## React包

引入`netease/react` 

包含`基础包 + React语法检查 + React访问性检查`

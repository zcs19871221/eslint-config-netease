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
    npm install --save-dev eslint-config-netease@latest eslint@">=5.13.0" babel-eslint@">=10.0.1"


## 配置 - Base(基础es语法和样式)

1. 通过package.json,添加如下属性：

        "eslintConfig": {
            "extends": "netease/base"
        }

1. 通过配置文件 根目录下生成`.eslintrc.js`

        module.exports = {
          extends: ["./base.js"]
        };

## 配置 - React(base + React)

1. 通过package.json,添加如下属性：
  添加如下字段,**替换 version 成自己React版本**：

        "eslintConfig": {
          "extends": "netease",
          "settings": {
              "react": {
                  "version": "16.5.0"
                }
            }
        }

2. 通过配置文件 根目录下生成`.eslintrc.js`

        module.exports = {
          extends: ["./base.js"],
           settings: {
              react: {
                version: "16.5.0"
              }
            },
        };

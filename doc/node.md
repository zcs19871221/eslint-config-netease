# node语法

## 目录

1. [global-require](#global-require)
2. [no-buffer-constructor](#no-buffer-constructor)
3. [no-new-require](#no-new-require)
4. [no-path-concat](#no-path-concat)

<a id='global-require'></a>
## global-require

- 规则含义

  要求所有require语句在文件开始位置,

- 规则原因

  当require在代码段中, 很难发现依赖关系

[eslint](https://eslint.org/docs/rules/global-require)

**[⬆ 回到目录](#目录)**

<a id='no-buffer-constructor'></a>
## no-buffer-constructor

- 规则含义

  禁止使用new Buffer()构造,使用Buffer.alloc或Buffer.from

- 规则原因

  Buffer构造函数已弃用,存在安全性问题

[eslint](https://eslint.org/docs/rules/no-buffer-constructor)

**[⬆ 回到目录](#目录)**

<a id='no-new-require'></a>
## no-new-require

- 规则含义

  禁止使用new在require前头

[eslint](https://eslint.org/docs/rules/no-new-require)

**[⬆ 回到目录](#目录)**

<a id='no-path-concat'></a>
## no-path-concat

- 规则含义

  禁止用字符串连接__dirname和__filename  
  使用path.join创建地址

- 规则原因

  防止不同操作系统路径分割不一致

[eslint](https://eslint.org/docs/rules/no-path-concat)

**[⬆ 回到目录](#目录)**


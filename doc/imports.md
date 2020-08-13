# 模块化规范

## 目录

1. [import/named](#import/named)
2. [import/default](#import/default)
3. [import/namespace](#import/namespace)
4. [import/export](#import/export)
5. [import/no-named-as-default](#import/no-named-as-default)
6. [import/no-named-as-default-member](#import/no-named-as-default-member)
7. [import/no-mutable-exports](#import/no-mutable-exports)
8. [import/no-amd](#import/no-amd)
9. [import/first](#import/first)
10. [import/exports-last](#import/exports-last)
11. [import/no-duplicates](#import/no-duplicates)
12. [import/extensions](#import/extensions)
13. [import/order](#import/order)
14. [import/newline-after-import](#import/newline-after-import)
15. [import/prefer-default-export](#import/prefer-default-export)
16. [import/no-absolute-path](#import/no-absolute-path)
17. [import/no-dynamic-require](#import/no-dynamic-require)
18. [import/no-webpack-loader-syntax](#import/no-webpack-loader-syntax)
19. [import/no-named-default](#import/no-named-default)
20. [import/no-self-import](#import/no-self-import)
21. [import/no-cycle](#import/no-cycle)
22. [import/no-useless-path-segments](#import/no-useless-path-segments)
23. [import/dynamic-import-chunkname](#import/dynamic-import-chunkname)

<a id='import/named'></a>
## import/named

- 规则含义

  如果从模块food中named导入pizza,那么food中必须定义named导出pizza

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

**[⬆ 回到目录](#目录)**

<a id='import/default'></a>
## import/default

- 规则含义

  如果从模块food中default导入,那么food中必须定义default导出

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)

**[⬆ 回到目录](#目录)**

<a id='import/namespace'></a>
## import/namespace

- 规则含义

  保证`import * as all from 'module'`的索引`all`访问的属性都在module中有定义

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)

**[⬆ 回到目录](#目录)**

<a id='import/export'></a>
## import/export

- 规则含义

  禁止出现重复的named或default导出

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-named-as-default'></a>
## import/no-named-as-default

- 规则含义

  如果模块有default和named导出,禁止导入时把default命名成和named冲突的变量.

- 规则原因

  可能导致  
  - 混淆：熟悉导入模块的人以为default导入的是命名变量  
  - 语法错误：本来想导入named模块,写错了变成导入default模块

- 错误例子

      // foo.js  
      export default 'foo';  
      export const bar = 'baz';  
      // bar.js  
      import bar from './foo.js';

- 正确例子

      // foo.js  
      export default 'foo';  
      export const bar = 'baz';  
      // bar.js  
      import bar from './foo.js';

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-named-as-default-member'></a>
## import/no-named-as-default-member

- 规则含义

  禁止default导出的属性设置成和named导出的名称重复

- 规则原因

  这样写法,大概率是语法写错了  
  写的人就是想引入default和named模块  
  但是因为不熟悉语法,以为可以通过default[named]获取named模块.

- 错误例子

      // foo.js  
      export default foo;  
      export const bar = 'baz.js'  
      // bar.js  
      import foo from './foo.js  
      const bar = foo.bar;

- 正确例子

      // foo.js  
      export default foo;  
      export const bar = 'baz.js'  
      // bar.js  
      import foo, {bar} from './foo.js

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-mutable-exports'></a>
## import/no-mutable-exports

- 规则含义

  禁止export let(var)声明的变量

- 规则原因

  es的模块机制和commonJs的模块机制不同,  
  es的模块是编译时生成接口,实际用到接口时再实时获取值.因此`import interface from module`可以理解成生成一个内置对象,属性就是interface,关联到模块中定义的interface,具体值是什么等用到这个interface时候再动态去模块中取.这就导致,如果你在module中改变了interface的引用,之后所有别的模块使用interface的引用也都变了,所以禁止使用var或let.当然class或function也可以改变引用,但是eslint有规则禁止改变函数和类的索引所以没问题.  
  commonJs的模块是运行时候生成接口,当执行到`require('xx')`的时候,会去这个`xx`模块中执行,执行的时候直接执行值传递.因此commonJs原模块的索引改变,也不会影响引入该模块的模块.

- 错误例子

      export let count = 2

- 正确例子

      export const count = 2

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-amd'></a>
## import/no-amd

- 规则含义

  不允许使用amd语法

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)

**[⬆ 回到目录](#目录)**

<a id='import/first'></a>
## import/first

- 规则含义

  import语句之前不允许有其他语句

- 规则原因

  import语句会悬置,先使用import变量后import语句可能导致未知错误.

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

**[⬆ 回到目录](#目录)**

<a id='import/exports-last'></a>
## import/exports-last

- 规则含义

  所有export语句在底部

- 规则原因

  增强可读性,减少读模块时间

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-duplicates'></a>
## import/no-duplicates

- 规则含义

  不允许import一个模块多次

- 规则原因

  防止不同的开发者在一个文件中多次引入一个模块

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

**[⬆ 回到目录](#目录)**

<a id='import/extensions'></a>
## import/extensions

- 规则含义

  import`js,jsx,mjs`后缀的文件时路径不允许使用后缀  
  非上面三种后缀文件import时候必须加后缀

- 规则原因

  对于常用后缀文件,减少冗余  
  对于不常用文件,写清后缀

- 错误例子

      // import a.js  
      import a from './a.js'  
      // import b.less  
      import b from '/b'

- 正确例子

      // import a.js  
      import a from './a'  
      // import b.less  
      import b from '/b.less'

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

**[⬆ 回到目录](#目录)**

<a id='import/order'></a>
## import/order

- 规则含义

  import模块书写顺序按照node内置(fs,http) -> 第三方包(webpack) -> 内部模块(alias)

- 正确例子

      import fs from 'fs';  
      import _ from 'lodash';  
      import foo from 'Src/foo';

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

**[⬆ 回到目录](#目录)**

<a id='import/newline-after-import'></a>
## import/newline-after-import

- 规则含义

  强制最后一个导入语句之后有一行空行

- 规则原因

  统一规范

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

**[⬆ 回到目录](#目录)**

<a id='import/prefer-default-export'></a>
## import/prefer-default-export

- 规则含义

  如果一个模块只有一个导出,使用default导出

- 规则原因

  有人说,named导出`export {a,}`不是更好,  
  如果我需要新增一个模块导出,直接在后面添加`export {a,b,c..}`不好吗？.  
  对于小的项目来说,named导出可能会让你少敲几行代码.  
  但是对于大项目,长期维护来说,export default鼓励的是把不同功能拆分成多个文件,  
  单一职责原则：一个文件只做一件事.  
  这有利于后续的维护和可读性.  
  如果你要export别的模块,把它拆分成新的文件.

- 错误例子

      export {oneModule}

- 正确例子

      export default oneModule;

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-absolute-path'></a>
## import/no-absolute-path

- 规则含义

  导入地址禁止使用绝对地址

- 规则原因

  和环境耦合,不利于迁移和维护,使用相对地址

- 错误例子

      import f from '/foo';  
      var f = require('/some/path');

- 正确例子

      var foo = require('./foo');  
      import _ from 'lodash';

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-dynamic-require'></a>
## import/no-dynamic-require

- 规则含义

  require语法的地址必须使用静态地址

- 规则原因

  1. 会阻止打包工具和语法检查工具的正常使用  
  2. 不利于代码可读性

- 错误例子

      require(name);  
      require(`../${name}`);

- 正确例子

      require('../name');

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-webpack-loader-syntax'></a>
## import/no-webpack-loader-syntax

- 规则含义

  禁止在模块引入时使用webpack loader语法

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-named-default'></a>
## import/no-named-default

- 规则含义

  禁止把default import重命名

- 错误例子

      import { default as foo } from './foo.js';

- 正确例子

      import foo from './foo.js';

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-self-import'></a>
## import/no-self-import

- 规则含义

  禁止在模块中引用自己

- 错误例子

      // foo.js  
      import foo from './foo';

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-cycle'></a>
## import/no-cycle

- 规则含义

  禁止循环依赖

- 规则原因

  1. 造成紧耦合,不利于维护  
  2. commonJs下,循环依赖会导致模块不正确加载

- 错误例子

      // a.js  
      import b from './b.js'  
      // b.js  
      import a from './a.js'

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)

**[⬆ 回到目录](#目录)**

<a id='import/no-useless-path-segments'></a>
## import/no-useless-path-segments

- 规则含义

  禁止在模块路径中出现无效的符号

- 规则原因

  增强代码可读性

- 错误例子

      import "./../pages/about.js";  
      import "./pages//about"

- 正确例子

      import "../pages/about.js";  
      import "./pages/about"

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)

**[⬆ 回到目录](#目录)**

<a id='import/dynamic-import-chunkname'></a>
## import/dynamic-import-chunkname

- 规则含义

  动态加载模块必须使用webpack magic comment的`webpackChunkName`来配置打包模块名称

- 规则原因

  1. 报错时候可以迅速定位错误文件  
  2. 统一规范

[eslint](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md)

**[⬆ 回到目录](#目录)**


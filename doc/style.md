# 代码样式

## 目录

1. [camelcase](#camelcase)
2. [func-names](#func-names)
3. [func-style](#func-style)
4. [id-blacklist](#id-blacklist)
5. [id-length](#id-length)
6. [line-comment-position](#line-comment-position)
7. [linebreak-style](#linebreak-style)
8. [lines-between-class-members](#lines-between-class-members)
9. [max-depth](#max-depth)
10. [max-lines](#max-lines)
11. [max-lines-per-function](#max-lines-per-function)
12. [max-nested-callbacks](#max-nested-callbacks)
13. [max-params](#max-params)
14. [max-statements-per-line](#max-statements-per-line)
15. [new-cap](#new-cap)
16. [no-array-constructor](#no-array-constructor)
17. [no-bitwise](#no-bitwise)
18. [no-continue](#no-continue)
19. [no-inline-comments](#no-inline-comments)
20. [no-lonely-if](#no-lonely-if)
21. [no-multi-assign](#no-multi-assign)
22. [no-negated-condition](#no-negated-condition)
23. [no-nested-ternary](#no-nested-ternary)
24. [no-new-object](#no-new-object)
25. [no-plusplus](#no-plusplus)
26. [no-restricted-syntax](#no-restricted-syntax)
27. [no-underscore-dangle](#no-underscore-dangle)
28. [no-unneeded-ternary](#no-unneeded-ternary)
29. [one-var](#one-var)
30. [operator-assignment](#operator-assignment)
31. [spaced-comment](#spaced-comment)

<a id='camelcase'></a>
## camelcase

- 规则含义

  变量命名要求驼峰式  
  检查变量是否中间有_, 有的话报错

[eslint](https://eslint.org/docs/rules/camelcase)

**[⬆ 回到目录](#目录)**

<a id='func-names'></a>
## func-names

- 规则含义

  禁止出现匿名函数

- 规则原因

  为了更好的debug和定位错误

[eslint](https://eslint.org/docs/rules/func-names)

**[⬆ 回到目录](#目录)**

<a id='func-style'></a>
## func-style

- 规则含义

  强制使用函数表达式,不要用函数声明

- 规则原因

  1. 函数声明会悬置，在块作用域下根据strict模式有不同的表现，可以重新分配索引，这都是错误的隐患  
  2. 不利于重构：因为函数声明可以悬置，一般把它放到运行代码的下面，看不到就不会去重构。如果使用表达式，强制你先定义,后使用，  
   这样在读代码的时候,会先读到定义函数的代码,  
   如果他很大很复杂,你会有欲望把它重构或把他提取出  
   一个模块,因为太碍事了

[eslint](https://eslint.org/docs/rules/func-style)

**[⬆ 回到目录](#目录)**

<a id='id-blacklist'></a>
## id-blacklist

- 规则含义

  变量黑名单,禁止使用data,e,cb,callback

- 规则原因

  这些变量名降低可读性

[eslint](https://eslint.org/docs/rules/id-blacklist)

**[⬆ 回到目录](#目录)**

<a id='id-length'></a>
## id-length

- 规则含义

  变量名长度在2到20之间

- 规则原因

  非常短的变量名和非常长的变量名会让程序难以阅读和维护

[eslint](https://eslint.org/docs/rules/id-length)

**[⬆ 回到目录](#目录)**

<a id='line-comment-position'></a>
## line-comment-position

- 规则含义

  强制要求单行注释必须在代码上方

[eslint](https://eslint.org/docs/rules/line-comment-position)

**[⬆ 回到目录](#目录)**

<a id='linebreak-style'></a>
## linebreak-style

- 规则含义

  强制要求换行必须是unix的\n

- 规则原因

  为了统一unix和windows下的源代码  
  因为有的时候你在linux下读文件然后进行匹配end换行start字符如下：  
  /end.\nstart/  
  在windows下这段代码可能就不正确了，因为换行是\r\n  
  保持一致，减少出错几率

[eslint](https://eslint.org/docs/rules/linebreak-style)

**[⬆ 回到目录](#目录)**

<a id='lines-between-class-members'></a>
## lines-between-class-members

- 规则含义

  要求类方法之间必须有空格分割

- 规则原因

  提高可读性

[eslint](https://eslint.org/docs/rules/lines-between-class-members)

**[⬆ 回到目录](#目录)**

<a id='max-depth'></a>
## max-depth

- 规则含义

  代码嵌套最多5层

- 规则原因

  过深的嵌套降低可读性

[eslint](https://eslint.org/docs/rules/max-depth)

**[⬆ 回到目录](#目录)**

<a id='max-lines'></a>
## max-lines

- 规则含义

  文件去除空行和注释行的行数<=300

- 规则原因

  过大的文件说明功能不止一个,不利于维护  
  鼓励重构成多个小文件 单一职责原则

[eslint](https://eslint.org/docs/rules/max-lines)

**[⬆ 回到目录](#目录)**

<a id='max-lines-per-function'></a>
## max-lines-per-function

- 规则含义

  函数去除注释和空行的行数<=50

- 规则原因

  理由同max-lines

[eslint](https://eslint.org/docs/rules/max-lines-per-function)

**[⬆ 回到目录](#目录)**

<a id='max-nested-callbacks'></a>
## max-nested-callbacks

- 规则含义

  回调函数嵌套数<=3

- 规则原因

  降低可读性，使用promise或async

[eslint](https://eslint.org/docs/rules/max-nested-callbacks)

**[⬆ 回到目录](#目录)**

<a id='max-params'></a>
## max-params

- 规则含义

  函数参数个数<=3

- 规则原因

  1. 函数参数越多，这个函数就越难读懂，测试就越复杂  
  2. 参数多，也说明函数做了不止一件事，鼓励让函数只做一件事，对函数进行重构

[eslint](https://eslint.org/docs/rules/max-params)

**[⬆ 回到目录](#目录)**

<a id='max-statements-per-line'></a>
## max-statements-per-line

- 规则含义

  一行只允许写一个执行语句

- 规则原因

  一行写太多内容降低可读性

- 错误例子

      var bar; var baz;  
      if (condition) { bar = 1; }

[eslint](https://eslint.org/docs/rules/max-statements-per-line)

**[⬆ 回到目录](#目录)**

<a id='new-cap'></a>
## new-cap

- 规则含义

  所有用new创建的函数,类,首字母大写

- 规则原因

  类首字母大写

[eslint](https://eslint.org/docs/rules/new-cap)

**[⬆ 回到目录](#目录)**

<a id='no-array-constructor'></a>
## no-array-constructor

- 规则含义

  不允许直接调用Array创建数组,使用new Array

- 规则原因

  Array全局可能被更改引用

[eslint](https://eslint.org/docs/rules/no-array-constructor)

**[⬆ 回到目录](#目录)**

<a id='no-bitwise'></a>
## no-bitwise

- 规则含义

  禁止使用按位运算符|

- 规则原因

  前端很少使用bit运算符（除了面试可能）  
  用的时候一般都是||忘了敲一个|

[eslint](https://eslint.org/docs/rules/no-bitwise)

**[⬆ 回到目录](#目录)**

<a id='no-continue'></a>
## no-continue

- 规则含义

  禁止使用continue

- 规则原因

  降低代码可读性，不易debug

[eslint](https://eslint.org/docs/rules/no-continue)

**[⬆ 回到目录](#目录)**

<a id='no-inline-comments'></a>
## no-inline-comments

- 规则含义

  禁止注释和代码放到同一行

[eslint](https://eslint.org/docs/rules/no-inline-comments)

**[⬆ 回到目录](#目录)**

<a id='no-lonely-if'></a>
## no-lonely-if

- 规则含义

  禁止if语句是else语句中的唯一语句

[eslint](https://eslint.org/docs/rules/no-lonely-if)

**[⬆ 回到目录](#目录)**

<a id='no-multi-assign'></a>
## no-multi-assign

- 规则含义

  禁止使用链式分配 a = b = c

- 规则原因

  会造成意外的全局变量  
  function x() {  
    var a = b = c = 5;  
  }  
  x()  
  console.log(b)

- 错误例子

      var a = b = c = 5;

- 正确例子

      const a = 5;  
      const b = 5;  
      const c = 5;

[eslint](https://eslint.org/docs/rules/no-multi-assign)

**[⬆ 回到目录](#目录)**

<a id='no-negated-condition'></a>
## no-negated-condition

- 规则含义

  禁止在if else和三目运算符中的判断条件出现否定表达(`! !=`)

- 规则原因

  否定句式降低可读性：  
  下面第一种比第二种更难以理解  
  if (!notHigh) else {}  
  if (low) else {}

- 错误例子

      if (!a) {  
         doSomething();  
      } else {  
         doSomethingElse();  
      }  
      if (a != b) {  
          doSomething();  
      } else {  
          doSomethingElse();  
      }  
      !a ? c : b

[eslint](https://eslint.org/docs/rules/no-negated-condition)

**[⬆ 回到目录](#目录)**

<a id='no-nested-ternary'></a>
## no-nested-ternary

- 规则含义

  禁止嵌套三目运算符

- 规则原因

  降低可读性

- 错误例子

      var thing = foo ? bar : baz === qux ? quxx : foobar;  
      foo ? baz === qux ? quxx() : foobar() : bar();

[eslint](https://eslint.org/docs/rules/no-nested-ternary)

**[⬆ 回到目录](#目录)**

<a id='no-new-object'></a>
## no-new-object

- 规则含义

  使用字面量创建新对象,不要用new Object

- 规则原因

  更简洁，少敲代码

- 错误例子

      var myObject = new Object();

- 正确例子

      var myObject = {};

[eslint](https://eslint.org/docs/rules/no-new-object)

**[⬆ 回到目录](#目录)**

<a id='no-plusplus'></a>
## no-plusplus

- 规则含义

  不允许使用自增减一元运算符

- 规则原因

  ++--会影响asi行为。  
  asi规定：当本行除了换行符和空白外只有++或--，那么换行符不自动插入\n  
  所以：  
  var i = 10;  
  var j = 20;  
  i  
  ++  
  j  
  //等价于 i;++j; i = 10, j = 21

- 错误例子

      i++

- 正确例子

      i += 1;  
      i -= 1

[eslint](https://eslint.org/docs/rules/no-plusplus)

**[⬆ 回到目录](#目录)**

<a id='no-restricted-syntax'></a>
## no-restricted-syntax

- 规则含义

  禁止使用for in,with,label语法

- 规则原因

  for..in遍历原型链，容易出错  
  label和with容易混淆

[eslint](https://eslint.org/docs/rules/no-restricted-syntax)

**[⬆ 回到目录](#目录)**

<a id='no-underscore-dangle'></a>
## no-underscore-dangle

- 规则含义

  禁止使用悬挂下划线(第一个字母是_)

- 规则原因

  悬挂下划线一般表示私有成员  
  但是变量的含义应该通过名称来表示而不是约定符号，这样降低可读性

[eslint](https://eslint.org/docs/rules/no-underscore-dangle)

**[⬆ 回到目录](#目录)**

<a id='no-unneeded-ternary'></a>
## no-unneeded-ternary

- 规则含义

  禁止使用无效的三目运算符

- 错误例子

      var isYes = answer === 1 ? true : false;

- 正确例子

      var isYes = answer === 1;

[eslint](https://eslint.org/docs/rules/no-unneeded-ternary)

**[⬆ 回到目录](#目录)**

<a id='one-var'></a>
## one-var

- 规则含义

  一个声明符只声明一个变量

- 规则原因

  一个声明符声明多个的坏处是：  
  1. 添加新变量的时需要费心在哪个位置添加：在中间，需要添加逗号。在底部必须更改之前最后一个变量的;变成,否则会产生意外的全局变量.  
  2. debug时候一次跳到声明结束，没法对每一个声明语句debug。

- 错误例子

      let a,b,c

- 正确例子

      let a;  
      let b;  
      let c;

[eslint](https://eslint.org/docs/rules/one-var)

**[⬆ 回到目录](#目录)**

<a id='operator-assignment'></a>
## operator-assignment

- 规则含义

  尽可能使用简写赋值运算符 +=

- 规则原因

  更简洁

- 错误例子

      x = x + y

- 正确例子

      x += y;

[eslint](https://eslint.org/docs/rules/operator-assignment)

**[⬆ 回到目录](#目录)**

<a id='spaced-comment'></a>
## spaced-comment

- 规则含义

  要求注释开头空一格

[eslint](https://eslint.org/docs/rules/spaced-comment)

**[⬆ 回到目录](#目录)**


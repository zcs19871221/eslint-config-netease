# React 和 jsx 规范

## 目录

1. [react/forbid-prop-types](#react/forbid-prop-types)
2. [react/jsx-boolean-value](#react/jsx-boolean-value)
3. [react/jsx-key](#react/jsx-key)
4. [react/jsx-no-bind](#react/jsx-no-bind)
5. [react/jsx-no-duplicate-props](#react/jsx-no-duplicate-props)
6. [react/jsx-no-undef](#react/jsx-no-undef)
7. [react/jsx-pascal-case](#react/jsx-pascal-case)
8. [react/jsx-uses-react](#react/jsx-uses-react)
9. [react/no-danger](#react/no-danger)
10. [react/no-deprecated](#react/no-deprecated)
11. [react/no-did-update-set-state](#react/no-did-update-set-state)
12. [react/no-will-update-set-state](#react/no-will-update-set-state)
13. [react/no-direct-mutation-state](#react/no-direct-mutation-state)
14. [react/no-is-mounted](#react/no-is-mounted)
15. [react/no-multi-comp](#react/no-multi-comp)
16. [react/no-string-refs](#react/no-string-refs)
17. [react/no-unknown-property](#react/no-unknown-property)
18. [react/prefer-es6-class](#react/prefer-es6-class)
19. [react/prop-types](#react/prop-types)
20. [react/react-in-jsx-scope](#react/react-in-jsx-scope)
21. [react/require-render-return](#react/require-render-return)
22. [react/self-closing-comp](#react/self-closing-comp)
23. [react/sort-comp](#react/sort-comp)
24. [react/jsx-no-target-blank](#react/jsx-no-target-blank)
25. [react/jsx-filename-extension](#react/jsx-filename-extension)
26. [react/jsx-no-comment-textnodes](#react/jsx-no-comment-textnodes)
27. [react/no-render-return-value](#react/no-render-return-value)
28. [react/no-find-dom-node](#react/no-find-dom-node)
29. [react/no-danger-with-children](#react/no-danger-with-children)
30. [react/no-unused-prop-types](#react/no-unused-prop-types)
31. [react/style-prop-object](#react/style-prop-object)
32. [react/no-unescaped-entities](#react/no-unescaped-entities)
33. [react/no-children-prop](#react/no-children-prop)
34. [react/no-array-index-key](#react/no-array-index-key)
35. [react/require-default-props](#react/require-default-props)
36. [react/forbid-foreign-prop-types](#react/forbid-foreign-prop-types)
37. [react/default-props-match-prop-types](#react/default-props-match-prop-types)
38. [react/no-redundant-should-component-update](#react/no-redundant-should-component-update)
39. [react/no-unused-state](#react/no-unused-state)
40. [react/boolean-prop-naming](#react/boolean-prop-naming)
41. [react/no-typos](#react/no-typos)
42. [react/jsx-curly-brace-presence](#react/jsx-curly-brace-presence)
43. [react/destructuring-assignment](#react/destructuring-assignment)
44. [react/no-access-state-in-setstate](#react/no-access-state-in-setstate)
45. [react/button-has-type](#react/button-has-type)
46. [react/no-this-in-sfc](#react/no-this-in-sfc)
47. [react/no-unsafe](#react/no-unsafe)
48. [react/jsx-handler-names](#react/jsx-handler-names)
49. [react/jsx-fragments](#react/jsx-fragments)

<a id='react/forbid-prop-types'></a>
## react/forbid-prop-types

- 规则含义

  propTypes校验禁止使用类型any,array(arrayOf替换),object(shape替换)

- 规则原因

  这三个关键词太笼统,起不到文档的约束作用,没有帮助

- 错误例子

      Component.propTypes = {  
        a: PropTypes.any,  
        r: PropTypes.array,  
        o: PropTypes.object  
      };

- 正确例子

      Component.propTypes = {  
        a: PropTypes.string,  
        r: PropTypes.arrayOf(PropTypes.number),  
        o: PropTypes.shape({  
          color: PropTypes.string,  
          fontSize: PropTypes.number  
        })  
      };

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-boolean-value'></a>
## react/jsx-boolean-value

- 规则含义

  jsx中使用省略写法设置属性为true的值

- 规则原因

  统一规范,更简洁

- 错误例子

      <Modal isShow={true} />

- 正确例子

      <Modal isShow />

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-key'></a>
## react/jsx-key

- 规则含义

  循环时组件必须设置key属性  
  不允许使用...运算符设置key属性

- 规则原因

  循环时使用key为了提高react性能：再次渲染如果key不变就不会重新渲染  
  不允许使用...设置key,不利于代码可读性(不推荐使用静态key值)

- 错误例子

      [<Hello />, <Hello />, <Hello />];  
      data.map(x => <Hello>{x}</Hello>);  
      <Hello {...{ key: id, id, caption }} />;

- 正确例子

      [<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];  
      data.map(x => <Hello key={x.id}>{x.value}</Hello>);  
      <Hello key={id} {...{ id, caption }} />;

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-no-bind'></a>
## react/jsx-no-bind

- 规则含义

  禁止在jsx的属性值中包含bind语法函数或创建箭头函数字面量

- 规则原因

  每次渲染时候,在{}中执行bind或箭头函数时候都会创建一个全新的函数  
  会造成不必要的刷新(这个函数的引用每次都变),出现性能问题

- 错误例子

      <Foo onClick={this._handleClick.bind(this)}></Foo>  
      <Foo onClick={() => console.log('Hello!')}></Foo>

- 正确例子

      // 构造函数时候绑定原型方法到对象属性  
      constructor() {  
       this.onClick= this.onClick.bind(this);  
      }  
      // 或者使用箭头函数定义：利用箭头函数创建时候绑定this的特性绑定对象  
      onClick = () => {}  
      <Foo onClick={this.onClick}></Foo>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-no-duplicate-props'></a>
## react/jsx-no-duplicate-props

- 规则含义

  禁止在jsx的属性中出现重名,大小写不一样的重名也不行

- 规则原因

  组件的props就是一个对象,同名的会覆盖,不同大小写的会认为是不同的,但不推荐使用

- 错误例子

      <Hello name="John" Name="John" />;

- 正确例子

      <Hello name="John"  />;

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-no-undef'></a>
## react/jsx-no-undef

- 规则含义

  禁止使用未定义jsx组件

- 错误例子

      <Hello name="John" />;

- 正确例子

      const Hello = ({name}) => {  
       return <div>{name}</div>  
      }  
      <Hello/>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-pascal-case'></a>
## react/jsx-pascal-case

- 规则含义

  强制要求组件以大骆驼形式命名

- 规则原因

  jsx标签第一个字母大写表示这是一个react组件.

- 错误例子

      <testcomponent />

- 正确例子

      <TestComponent />

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-uses-react'></a>
## react/jsx-uses-react

- 规则含义

  不使用jsx语法时候不要引用React模块

- 规则原因

  jsx语法会编译成React.createElement,因此jsx代码范围内必须引用React防止  
  执行时候报错

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-danger'></a>
## react/no-danger

- 规则含义

  使用dangerouslySetInnerHTML时发出警告

- 规则原因

  react的一大优势就是免去了用户的dom操作,这不仅仅是方便了开发.  
  而且因为react自己实现的dom系统可以提升性能和浏览器兼容性,  
  并且规避了一些特定浏览器或特定情况下的问题(边界条件,安全性问题等).  
  而dangerouslySetInnerHTML就相当于直接在dom上运行innerHTML,  
  react没有处理输入的字符串,这就有可能造成Xss攻击(字符串中注入JavaScript代码)

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-deprecated'></a>
## react/no-deprecated

- 规则含义

  禁止使用已弃用语法

- 规则原因

  弃用语法有的有安全性问题而且以后版本很可能会不支持

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-did-update-set-state'></a>
## react/no-did-update-set-state

- 规则含义

  禁止在componentDidUpdate中调用setState

- 规则原因

  这样很可能会导致死循环重复刷新组件

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-will-update-set-state'></a>
## react/no-will-update-set-state

- 规则含义

  禁止在componentWillUpdate中使用setState

- 规则原因

  componentWillUpdate官方文档禁止使用setState,并且  
  该方法已经弃用了,并将于react17正式不支持

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-direct-mutation-state'></a>
## react/no-direct-mutation-state

- 规则含义

  只允许使用setState改变state,不允许改变state属性或改变索引(不允许直接改变this.state, 唯一可以直接给 this.state 赋值的地方是 constructor)

- 规则原因

  react的核心思路就是保持一切都是纯的,然后利用持久化数据结构的原理优化性能：  
  当有改变发生需要比较状态的时候,找出树状结构上不变和变化的部分,  
  然后只替换变化的节点和受影响的所有父节点.  
  这个思路体现在每次render后的元素树的比较上,同样体现在state树上.  
  react的state必须保持纯的,因为react会把当前state  
  和上一个状态state做一个浅比较,决定是否render.  
  而且state作为props传到组件的时候,还会再和上一个props进行浅比较决定组件是否刷新  
  如果只是改变属性的话,引用不变不会刷新

- 错误例子

      this.state.name = XXX

- 正确例子

      this.setState({name: XXX})

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-is-mounted'></a>
## react/no-is-mounted

- 规则含义

  禁止使用isMounted

- 规则原因

  react已经弃用这个属性了.  
  很多人这么用isMounted:  
  ```  
  if (this.isMounted()) {  
   this.setState({...})  
  }  
  ```  
  来消除警告：组件已经umount但仍然调用setState.  
  这个警告通常表示组件没有卸载干净：卸载后仍然保持对组件的引用,有可能导致内存泄漏.  
  使用isMounted可能会消除警告,但警告的目的是让你发现为什么umount了还会调用setState,从而  
  发现代码潜在的问题.使用isMounted没有了警告,但你也发现不了问题  
  这个警告主要发生在异步回调的时候,你可以通过：在Umount中设置flag,在回调中判断flag来解决.  
  更好的方法是在umount的时候取消数据订阅,或者通过实现promise.cancel方法取消promise

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-multi-comp'></a>
## react/no-multi-comp

- 规则含义

  一个文件中只允许定义一个react class组件(函数组件不计算)

- 规则原因

  单一职责原则,功能拆分,利于组件复用,增加代码可读性,更好维护和修改

- 错误例子

      class Hello extends React.PureComponent{  
        render() {  
          return <div>Hello {this.props.name}</div>;  
        }  
      };  
      class HelloJohn extends React.PureComponent{  
        render: function() {  
          return <Hello name="John" />;  
        }  
      };

- 正确例子

      const Hello = require('./components/Hello');  
      class HelloJohn extends React.PureComponent{  
        render: function() {  
          return <Hello name="John" />;  
        }  
      };

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-string-refs'></a>
## react/no-string-refs

- 规则含义

  禁止使用字符串标识的ref属性

- 规则原因

  react以前的ref形式,已经废弃  
  现在使用ref搭配一个函数来获取dom引用

- 错误例子

      <div ref="helloDom">Hello, world.</div>

- 正确例子

      <div ref={helloDom => { this.helloDom = helloDom; }}>Hello, world.</div>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-unknown-property'></a>
## react/no-unknown-property

- 规则含义

  禁止在原生dom组件中出现非标准(不符合react属性名)的属性

- 规则原因

  具体哪些属性可用见索引

- 错误例子

      <div class="hello">Hello World</div>

- 正确例子

      <div className="hello">Hello World</div>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

**[⬆ 回到目录](#目录)**

<a id='react/prefer-es6-class'></a>
## react/prefer-es6-class

- 规则含义

  禁止使用createReactClass创建组件,使用class

- 规则原因

  用jsx语法,可读性好

- 错误例子

      const Hello = createReactClass({  
        render: function() {  
          return <div>Hello {this.props.name}</div>;  
        }  
      });

- 正确例子

      class Hello extends React.Component {  
        render() {  
          return <div>Hello {this.props.name}</div>;  
        }  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

**[⬆ 回到目录](#目录)**

<a id='react/prop-types'></a>
## react/prop-types

- 规则含义

  强制使用 PropTypes检查属性的数据类型

- 规则原因

  使用 PropTypes校验输入属性可以提高组件可用性,其他开发人员可根据定义的类型检查正确使用该组件,  
  相当于一个绝佳的文档,方便维护

- 错误例子

      function Hello({ name }) {  
       return <div>Hello {name}</div>;  
      }

- 正确例子

      function Hello({ name }) {  
        return <div>Hello {name}</div>;  
      }  
      Hello.propTypes = {  
        name: PropTypes.string.isRequired,  
      };

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

**[⬆ 回到目录](#目录)**

<a id='react/react-in-jsx-scope'></a>
## react/react-in-jsx-scope

- 规则含义

  使用jsx语法一定要引用react

- 规则原因

  jsx编译后就是React.createElement,作用域中必须引用React

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

**[⬆ 回到目录](#目录)**

<a id='react/require-render-return'></a>
## react/require-render-return

- 规则含义

  render方法必须包含return语句

- 错误例子

      class Hello extends React.Component {  
        render() {  
          <div>Hello</div>;  
        }  
      }

- 正确例子

      class Hello extends React.Component {  
        render() {  
          return <div>Hello</div>;  
        }  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

**[⬆ 回到目录](#目录)**

<a id='react/self-closing-comp'></a>
## react/self-closing-comp

- 规则含义

  没有子元素的组件强制使用自闭合标签

- 规则原因

  没必要使用闭合标签,简洁,统一

- 错误例子

      <Modal></Modal>

- 正确例子

      <Modal />

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

**[⬆ 回到目录](#目录)**

<a id='react/sort-comp'></a>
## react/sort-comp

- 规则含义

  类组件的方法按照以下顺序组织排列  
  1. 静态方法和属性  
  2. 生命周期方法  
  3. 其他方法  
  4. render方法

- 正确例子

      class Ex extends React.Component {  
           static propTypes = {};  
           static defaultProps = {};  
           componentDidmount() {};  
           myFunc() {};  
           render() {}  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-no-target-blank'></a>
## react/jsx-no-target-blank

- 规则含义

  使用有`target='_blank'`属性的a标签时候,必须加上rel='noreferrer noopener'属性

- 规则原因

  服务器安全隐患：钓鱼网站.当使用`<a target='_blank'/>`打开新页面时候,新页面可以通过window.opener  
  获得原页面的window对象,然后黑客可以通过执行window.opener.location  
  改变你原来的网址重定向到一个相似的钓鱼网站窃取你的信息.添加如上的rel属性可以让window.opener为空

- 错误例子

      <a target='_blank' href="http://example.com/">

- 正确例子

      <p target="_blank"></p>  
      <a target="_blank" rel="noopener noreferrer" href="http://example.com"></a>  
      <a target="_blank" href="path/in/the/host"></a>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-filename-extension'></a>
## react/jsx-filename-extension

- 规则含义

  .jsx后缀的文件才可以包含jsx语法

- 规则原因

  可通过文件名快速了解内容

- 错误例子

      // filename: MyComponent.js  
      function MyComponent() {  
        return <div />;  
      }

- 正确例子

      // filename: MyComponent.jsx  
      function MyComponent() {  
        return <div />;  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-no-comment-textnodes'></a>
## react/jsx-no-comment-textnodes

- 规则含义

  禁止在jsx文本节点中出现注释(行和块注释)

- 规则原因

  防止开发者以为注释了内容,实际没有,导致输出错误信息的问题

- 错误例子

      class Hello extends React.PureComponent{  
      render() {  
        return (  
          <div>  
            // empty div  
          </div>  
          )  
        }  
      }

- 正确例子

      class Hello extends React.PureComponent{  
        render() {  
          return <div>{// empty div }</div>;  
        }  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-render-return-value'></a>
## react/no-render-return-value

- 规则含义

  禁止使用 `React.render/ReactDOM.render`的返回值

- 规则原因

  这个返回值是对根元素的引用,但是以后有可能会使用异步渲染  
  为了防止以后升级版本可能出现的问题,不要用,如果要获取dom,使用ref

- 错误例子

      const inst = ReactDOM.render(<App />, document.body);  
      doSomethingWithInst(inst);

- 正确例子

      ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-find-dom-node'></a>
## react/no-find-dom-node

- 规则含义

  禁止使用findDOMNode方法, 用 ref

- 规则原因

  react以后会废弃掉 findDOMNode方法

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-danger-with-children'></a>
## react/no-danger-with-children

- 规则含义

  禁止使用dangerouslySetInnerHTML的同时还包含children

- 规则原因

  错误语法

- 错误例子

      <div dangerouslySetInnerHTML={{ __html: "HTML" }}>  
        Children  
      </div>

- 正确例子

      <div dangerouslySetInnerHTML={{ __html: "HTML" }} />  
      <div>  
        Children  
      </div>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-unused-prop-types'></a>
## react/no-unused-prop-types

- 规则含义

  不要定义使用不到的 prop types

- 规则原因

  代码越少越好,代码越多,问题越多

- 错误例子

      class Hello extends React.PureComponent{  
        static propTypes= {  
          name: PropTypes.string  
        }  
        render() {  
          return <div>Hello Bob</div>;  
        }  
      };

- 正确例子

      class Hello extends React.PureComponent{  
        static propTypes= {  
          name: PropTypes.string  
        }  
        render() {  
          return <div>Hello {this.props.name}</div>;  
        }  
      };

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)

**[⬆ 回到目录](#目录)**

<a id='react/style-prop-object'></a>
## react/style-prop-object

- 规则含义

  强制要求style属性的值必须是对象

- 规则原因

  错误语法 (This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.)

- 错误例子

      <div style="color: 'red'" />

- 正确例子

      <div style={{ color: "red" }} />

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-unescaped-entities'></a>
## react/no-unescaped-entities

- 规则含义

  禁止在jsx文本节点中出现没有转义字符： > " ' }

- 规则原因

  这几个字符出现了也没事,react会自动转义.但是大概率这几种字符的出现是由于敲错了,比如：  
  ```  
  <Component  
    a="b">  
    c="d">  
  >bodytext</Component>  
  ```  
  因为多敲了一个>,输出错误.这个规则就是让你及早发现错误  
  如果你需要用到这几个字符,使用转义符号或者通过{}输出：  
  ```  
  > -> &gt;  
  " -> &quot;  
  ' -> &apos;  
  } -> &#125;  
  ```

- 错误例子

      <div> > </div>

- 正确例子

      <div> &gt; </div>  
      <div> {'>'} </div>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-children-prop'></a>
## react/no-children-prop

- 规则含义

  禁止使用props的children属性传递子元素

- 规则原因

  放到jsx语法里更好理解

- 错误例子

      <Father children={<Child/>} />

- 正确例子

      <Father><Child/></Father>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-array-index-key'></a>
## react/no-array-index-key

- 规则含义

  禁止使用索引作为属性key的值

- 规则原因

  key能告诉react,哪些元素是不变的,哪些元素是变了的从而重新渲染  
  如果使用索引作为key,不能唯一标识元素,有可能的后果就是,内容变了,但是没有重新刷新  
  使用元素内容唯一标识

- 错误例子

      {list.map((item, index) => <div key={index}>{item}</div>)}

- 正确例子

      {list.map((item, index) => <div key={item}>{item}</div>)}

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

**[⬆ 回到目录](#目录)**

<a id='react/require-default-props'></a>
## react/require-default-props

- 规则含义

  强制要求每个非必需props都有一个对应的defaultProps

- 规则原因

  组件可以看成和js的函数一样的东西,输入就是props,输出就是elements  
  一个好的函数应该对每个输入值进行类型检查并设置默认值,运行时候保证  
  各种边界条件可以运行良好.  
  给所有props设置默认值,也能保证props缺失时组件能正常渲染.

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)

**[⬆ 回到目录](#目录)**

<a id='react/forbid-foreign-prop-types'></a>
## react/forbid-foreign-prop-types

- 规则含义

  禁止直接引用别的组件的proptypes(可以通过import解构重命名使用)

- 规则原因

  防止生产环境下使用babel插件 babel-plugin-transform-react-remove-prop-types  
  去除propTypes时出现问题

- 错误例子

      import SomeComponent from './SomeComponent';  
      SomeComponent.propTypes;  
      const { propTypes } = SomeComponent;  
      SomeComponent['propTypes'];

- 正确例子

      import SomeComponent, {propTypes as someComponentPropTypes} from './SomeComponent';

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md)

**[⬆ 回到目录](#目录)**

<a id='react/default-props-match-prop-types'></a>
## react/default-props-match-prop-types

- 规则含义

  必填(required)的props不允许出现在defaultProps中  
  没有在propTypes中定义的属性不允许出现在defaultProps中

- 规则原因

  减少冗余

- 错误例子

      MyStatelessComponent.propTypes = {  
        foo: React.PropTypes.string.isRequired,  
        bar: React.PropTypes.string  
      };  
      MyStatelessComponent.defaultProps = {  
        foo: "foo",  
        baz: "baz"  
      };

- 正确例子

      MyStatelessComponent.propTypes = {  
        foo: React.PropTypes.string.isRequired,  
        bar: React.PropTypes.string  
      };  
      MyStatelessComponent.defaultProps = {  
        bar: "bar"  
      };

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-redundant-should-component-update'></a>
## react/no-redundant-should-component-update

- 规则含义

  PureComponent类型的组件禁止使用shouldComponentUpdate方法

- 规则原因

  PureComponent默认实现了一个shouldComponentUpdate方法(通过对state和props浅比较决定是否渲染).  
  再定义shouldComponentUpdate仍然会按照你定义的方法来决定是否渲染  
  但这样使用PureComponent就没有意义了

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-unused-state'></a>
## react/no-unused-state

- 规则含义

  禁止出现未被使用的state属性

- 规则原因

  减少冗余

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)

**[⬆ 回到目录](#目录)**

<a id='react/boolean-prop-naming'></a>
## react/boolean-prop-naming

- 规则含义

  强制布尔值变量命名以is或has开始

- 规则原因

  统一规范,帮助理解变量含义

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-typos'></a>
## react/no-typos

- 规则含义

  保证react预留的静态类属性和生命周期方法大小写拼写正确

- 规则原因

  js属性大小写敏感,写错就不执行了

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-curly-brace-presence'></a>
## react/jsx-curly-brace-presence

- 规则含义

  不允许花括号给字符串属性或文本节点使用

- 规则原因

  减少冗余

- 错误例子

      <Test name={"zcs"}>{"zcs"}</Test>

- 正确例子

      <Test name="zcs">zcs</Test>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)

**[⬆ 回到目录](#目录)**

<a id='react/destructuring-assignment'></a>
## react/destructuring-assignment

- 规则含义

  强制要求使用解构获取所有props,state,context属性,再通过变量在render中使用

- 规则原因

  1. 减少this.props字符串的书写  
  2. 减少对this.props的索引搜索

- 错误例子

      render() {  
       <Component name={this.props.name} gender={this.props.gender}/>  
      }

- 正确例子

      render() {  
       const {name, gender} = this.props;  
       <Component name={name} gender={gender}/>  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-access-state-in-setstate'></a>
## react/no-access-state-in-setstate

- 规则含义

  setState方法中禁止使用this.state

- 规则原因

  setState中使用this.state都是为了获取上一次的状态,进行下一次的操作.  
  但setState有可能是异步的,批量的,因此使用this.state不能准确获取上一次的状态数据  
  你可以：  
  1. 要不使用回调函数获取修改后的state  
  2. 要不通过第一个函数参数获取上一次state

- 错误例子

      onClick() {  
         this.setState({  
             num: this.state.num + 1,  
         })  
      }

- 正确例子

      onClick() {  
         this.setState(prevState => {  
             return {  
               num: prevState.num + 1  
             }  
         })  
      }  
      onClick() {  
         this.setState(xx, () => {  
             ...  
         })  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)

**[⬆ 回到目录](#目录)**

<a id='react/button-has-type'></a>
## react/button-has-type

- 规则含义

  button标签必须设置type属性(button, submit, reset)

- 规则原因

  button的type属性默认值是submit,可能会导致意外现象

- 错误例子

      <button>Hello</button>

- 正确例子

      <button type="button">Hello</button>  
      <button type="submit">Hello</button>  
      <button type="reset">Hello</button>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-this-in-sfc'></a>
## react/no-this-in-sfc

- 规则含义

  禁止在sfc中出现this指针

- 规则原因

  sfc==stateless function component===无状态组件===函数组件  
  这种组件的this和class组件的不同

- 错误例子

      function Foo(props) {  
        return (  
          <div>{this.props.bar}</div>  
        );  
      }

- 正确例子

      function Foo(props) {  
        return (  
          <div>{props.bar}</div>  
        );  
      }

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)

**[⬆ 回到目录](#目录)**

<a id='react/no-unsafe'></a>
## react/no-unsafe

- 规则含义

  禁止使用不安全的生命周期方法(componentWillMount,componentWillUpdate,componentWillReceiveProps)

- 规则原因

  1. 这些方法将在react17正式不支持.  
  2. 这些方法本身就有潜在的问题.  
      * componentWillMount和 componentWillUpdate都是render前要调用的方法,不能调用setState容易出错  
      * componentWillReceiveProps有以下问题：  
        1. 你不能直接把props的值一股脑的设置给state,因为这样会把用户原生操作的状态冲掉  
        2. 当接收新props时,你需要对内容进行判断,决定更新哪个状态.这是很复杂的,随着props的增多很难维护.而且难以把状态复原  
        3. state的来源包括mount时候constructor中的props和 componentWillReceiveProps中的判断设置,来源不单一,你可能要写两种情况的代码  
      * 解决方法是：  
        1. 尽量不设置state,所有组件只是用props,state统一管理(redux的做法)  
        2. 使用key关联id,当一个组件的key换了,从新mount,避开 componentWillReceiveProps 方法  
  (这些方法在组价的异步渲染和严格模式下会有问题)

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-handler-names'></a>
## react/jsx-handler-names

- 规则含义

  强制要求jsx中onXXX(事件处理函数)的对应类的方法前缀必须是handle

- 规则原因

  统一规范,增强可读性

- 错误例子

      <MyComponent handleChange={this.componentChanged} />

- 正确例子

      <MyComponent onChange={this.handleChange} />

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

**[⬆ 回到目录](#目录)**

<a id='react/jsx-fragments'></a>
## react/jsx-fragments

- 规则含义

  强制fragment语法使用简写<></>

- 规则原因

  统一规范,减少冗余

- 错误例子

      <React.Fragment><Foo /></React.Fragment>

- 正确例子

      <><Foo /></>  
      <React.Fragment key="key"><Foo /></React.Fragment>

[eslint](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)

**[⬆ 回到目录](#目录)**


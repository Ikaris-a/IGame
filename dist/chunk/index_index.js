(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"100":function(e,n,t){"use strict";t.r(n);var o,r=t(0),i=t(1),c=t.n(i),a=t(99),l=t(97),u=t(4),s=t(93),p=t(96),f=(t(91),t(23)),d=t(27),m=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var h=Object(u.inject)("counterStore")(o=Object(u.observer)(o=function(e){function Index(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.increment=function(){e.props.counterStore.increment()},e.decrement=function(){e.props.counterStore.decrement()},e.incrementAsync=function(){e.props.counterStore.incrementAsync()},e.state={"value":"","current":0,"tabCurrent":0},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["Component"]),m(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(e){}},{"key":"handleTabClick","value":function handleTabClick(e){this.setState({"tabCurrent":e})}},{"key":"goMember","value":function goMember(){}},{"key":"render","value":function render(){return c.a.createElement(a.a,{"className":"ai-container"},c.a.createElement(d.a,null),c.a.createElement(s.a,{"className":"ai-home-tabs","current":this.state.tabCurrent,"tabList":[{"title":"推荐"},{"title":"赛事"},{"title":"视频"}],"onClick":this.handleTabClick.bind(this)},c.a.createElement(p.a,{"current":this.state.tabCurrent,"index":0},c.a.createElement(a.a,{"style":"background-color: #FAFBFC;text-align: center;"},c.a.createElement(l.a,{"className":"scrollview","scrollY":!0,"scrollWithAnimation":!0,"scrollTop":"0","style":"height: 150px;","lowerThreshold":"20","upperThreshold":"20","onScrolltoupper":this.onScrolltoupper,"onScroll":this.onScroll},c.a.createElement(a.a,{"style":"height:150px;background-color:rgb(26,173,25);"},"A"),c.a.createElement(a.a,{"style":"height:150px;background-color:rgb(39,130,215);"},"B"),c.a.createElement(a.a,{"style":"height:150px;background-color:rgb(241,241,241);color: #333;"},"C")))),c.a.createElement(p.a,{"current":this.state.tabCurrent,"index":1},c.a.createElement(a.a,{"style":"padding: 100px 50px;background-color: #FAFBFC;text-align: center;"})),c.a.createElement(p.a,{"current":this.state.tabCurrent,"index":2},c.a.createElement(a.a,{"style":"padding: 100px 50px;background-color: #FAFBFC;text-align: center;"},"图文"))),c.a.createElement(f.a,null))}}]),Index}())||o)||o;n.default=h},"23":function(e,n,t){"use strict";var o,r=t(0),i=t.n(r),c=t(1),a=t.n(c),l=t(99),u=t(4),s=t(92),p=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var f=Object(u.inject)("counterStore")(o=Object(u.observer)(o=function(e){function Index(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.setIndex=function(n){e.props.counterStore.setTabIndex(n)},e.state={"value":"","current":0},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["Component"]),p(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(e){console.log(e),2===e&&i.a.redirectTo({"url":"/pages/member/index"}),1===e&&i.a.redirectTo({"url":"/pages/camera/index"}),0===e&&i.a.redirectTo({"url":"/pages/index/index"}),this.setIndex(e)}},{"key":"render","value":function render(){var e=this.props.counterStore.counter;return a.a.createElement(l.a,{"className":"ai-footer"},a.a.createElement(s.a,{"fixed":!0,"tabList":[{"title":"首页","iconType":"home"},{"title":"","iconType":"camera"},{"title":"我","iconType":"user","text":"100","max":"99"}],"onClick":this.handleClick.bind(this),"current":e}))}}]),Index}())||o)||o;n.a=f},"27":function(e,n,t){"use strict";var o,r=t(0),i=t(1),c=t.n(i),a=t(99),l=t(4),u=t(39),s=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var p=Object(l.inject)("counterStore")(o=Object(l.observer)(o=function(e){function Index(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.increment=function(){e.props.counterStore.increment()},e.decrement=function(){e.props.counterStore.decrement()},e.incrementAsync=function(){e.props.counterStore.incrementAsync()},e.state={"value":""},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["Component"]),s(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"onChange","value":function onChange(e){this.setState({"value":e})}},{"key":"handleClick","value":function handleClick(e){}},{"key":"handleTabClick","value":function handleTabClick(e){this.setState({"current":e})}},{"key":"goMember","value":function goMember(){}},{"key":"render","value":function render(){return c.a.createElement(a.a,{"className":"ai-header"},c.a.createElement(u.a,{"fixed":!0,"value":this.state.value,"onChange":this.onChange.bind(this)}))}}]),Index}())||o)||o;n.a=p},"91":function(e,n,t){}}]);
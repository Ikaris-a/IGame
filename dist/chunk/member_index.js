(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"23":function(e,n,t){"use strict";var o,r=t(0),i=t.n(r),c=t(1),u=t.n(c),a=t(101),l=t(4),p=t(94),s=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var f=Object(l.inject)("counterStore")(o=Object(l.observer)(o=function(e){function Index(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.setIndex=function(n){e.props.counterStore.setTabIndex(n)},e.state={"value":"","current":0},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["Component"]),s(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(e){console.log(e),2===e&&i.a.redirectTo({"url":"/pages/member/index"}),1===e&&i.a.redirectTo({"url":"/pages/camera/index"}),0===e&&i.a.redirectTo({"url":"/pages/index/index"}),this.setIndex(e)}},{"key":"render","value":function render(){var e=this.props.counterStore.counter;return u.a.createElement(a.a,{"className":"ai-footer"},u.a.createElement(p.a,{"fixed":!0,"tabList":[{"title":"首页","iconType":"home"},{"title":"","iconType":"camera"},{"title":"我","iconType":"user","text":"100","max":"99"}],"onClick":this.handleClick.bind(this),"current":e}))}}]),Index}())||o)||o;n.a=f},"97":function(e,n,t){"use strict";t.r(n);var o,r=t(0),i=t(1),c=t.n(i),u=t(101),a=t(4),l=t(23),p=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var s=Object(a.inject)("counterStore")(o=Object(a.observer)(o=function(e){function Index(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.increment=function(){e.props.counterStore.increment()},e.decrement=function(){e.props.counterStore.decrement()},e.incrementAsync=function(){e.props.counterStore.incrementAsync()},e.state={"value":""},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["Component"]),p(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(e){}},{"key":"render","value":function render(){return c.a.createElement(u.a,{"className":"ai-container"},c.a.createElement(l.a,{"footerCurrent":"2"}))}}]),Index}())||o)||o;n.default=s}}]);
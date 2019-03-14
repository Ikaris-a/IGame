import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";
import { AtNavBar, AtTabBar, AtSearchBar, AtTabs, AtTabsPane } from "taro-ui";
import counterStore from "./store/counter";
import "./custom-variables.scss";
import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
};

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      current: 0,
      footerCurrent: 0
    };
  }
  config = {
    pages: ["pages/index/index", "pages/member/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <View className="i-container">
          <Index />
          <AtTabBar
            fixed
            tabList={[
              {
                title: "首页",
                iconType: "home"
              },
              { title: "", iconType: "camera" },
              { title: "我", iconType: "user", text: "100", max: "99" }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.footerCurrent}
          />
        </View>
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));

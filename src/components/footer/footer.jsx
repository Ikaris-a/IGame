import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtTabBar } from "taro-ui";
// import "./index.less";
@inject("counterStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      current: 0
    };
  }

  componentWillMount() {}

  componentWillReact() {
    // console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  setIndex = value => {
    const { counterStore } = this.props;
    counterStore.setTabIndex(value);
  };
  handleClick(value) {
    console.log(value);
    if (value === 2) {
      Taro.redirectTo({
        url: "/pages/member/index"
      });
    }
    if (value === 1) {
      Taro.redirectTo({
        url: "/pages/camera/index"
      });
    }
    if (value === 0) {
      Taro.redirectTo({
        url: "/pages/index/index"
      });
    }
    this.setIndex(value);
  }
  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className="ai-footer">
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
          current={counter}
        />
      </View>
    );
  }
}

export default Index;

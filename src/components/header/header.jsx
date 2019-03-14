import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Swiper,
  SwiperItem,
  Image,
  ScrollView
} from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtNavBar, AtTabBar, AtSearchBar, AtTabs, AtTabsPane } from "taro-ui";
@inject("counterStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ""
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };
  onChange(value) {
    this.setState({
      value: value
    });
  }
  handleClick(value) {}
  handleTabClick(value) {
    this.setState({
      current: value
    });
  }
  goMember() {}
  render() {
    return (
      <View className="ai-container">
        <AtSearchBar
          fixed
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </View>
    );
  }
}

export default Index;

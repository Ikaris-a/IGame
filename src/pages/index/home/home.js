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
import "./masonry.scss";
@inject("counterStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      current: 0,
      tabCurrent: 0
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
  handleClick(value) {}
  handleTabClick(value) {
    this.setState({
      tabCurrent: value
    });
  }
  goMember() {}
  render() {
    return (
      <View className="">
        <div className="g-container">
          <div className="g-queue">
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
          </div>
          <div className="g-queue">
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
            <div className="g-item" />
          </div>
        </div>
      </View>
    );
  }
}

export default Index;

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
import "./index.less";
import Ifooter from "../../components/footer/footer";
import Iheader from "../../components/header/header";
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
    navigationBarTitleText: "上传"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(value) {}
  handleTabClick(value) {
    this.setState({
      tabCurrent: value
    });
  }
  goMember() {}
  render() {
    return (
      <View className="ai-container">
        <Iheader />
        11111
        <Ifooter />
      </View>
    );
  }
}

export default Index;

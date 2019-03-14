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
    const tabList = [
      { title: "推荐" },
      { title: "赛事" },
      { title: "视频" }
      // ,
      // { title: "专栏" },
      // { title: "版本" },
      // { title: "英雄" }
    ];
    const swipeable = false;
    return (
      <View className="ai-container">
        <Iheader />
        <AtTabs
          className="ai-home-tabs"
          current={this.state.tabCurrent}
          tabList={tabList}
          onClick={this.handleTabClick.bind(this)}
        >
          <AtTabsPane current={this.state.tabCurrent} index={0}>
            <View style="background-color: #FAFBFC;text-align: center;">
              <ScrollView
                className="scrollview"
                scrollY
                scrollWithAnimation
                scrollTop="0"
                style="height: 150px;"
                lowerThreshold="20"
                upperThreshold="20"
                onScrolltoupper={this.onScrolltoupper}
                onScroll={this.onScroll}
              >
                <View style="height:150px;background-color:rgb(26,173,25);">
                  A
                </View>
                <View style="height:150px;background-color:rgb(39,130,215);">
                  B
                </View>
                <View style="height:150px;background-color:rgb(241,241,241);color: #333;">
                  C
                </View>
              </ScrollView>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.tabCurrent} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;" />
          </AtTabsPane>
          <AtTabsPane current={this.state.tabCurrent} index={2}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              图文
            </View>
          </AtTabsPane>
        </AtTabs>
        <Ifooter />
      </View>
    );
  }
}

export default Index;

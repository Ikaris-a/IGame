import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtNavBar, AtTabBar, AtSearchBar, AtTabs, AtTabsPane } from "taro-ui";
import "./index.less";

@inject("counterStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
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
  onChange(value) {
    this.setState({
      value: value
    });
  }
  handleClick(value) {}
  handleTabClick(value) {
    this.setState({
      tabCurrent: value
    });
  }
  render() {
    const {
      counterStore: { counter }
    } = this.props;
    const tabList = [{ title: "推荐" }, { title: "视频" }, { title: "图文" }];
    return (
      <View className="index">
        <AtNavBar
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color="#000"
          title="首页 "
          rightFirstIconType="bullet-list"
        />
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <AtTabs
          current={this.state.tabCurrent}
          tabList={tabList}
          onClick={this.handleTabClick.bind(this)}
        >
          <AtTabsPane current={this.state.tabCurrent} index={0}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              推荐
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.tabCurrent} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              {" "}
              <Swiper
                className="test-h"
                indicatorColor="#999"
                indicatorActiveColor="#1DA1F2"
                indicatorDots
                autoplay
              >
                <SwiperItem>
                  <Image
                    style="width:100%;background: #fff;"
                    src="http://img.dwstatic.com/lol/1512/314791918139/1450837187930.jpg"
                  />
                </SwiperItem>
                <SwiperItem>
                  <Image
                    style="width:100%;background: #fff;"
                    src="http://img3.dwstatic.com/lol/1512/314791918139/1450837176952.jpg"
                  />
                </SwiperItem>
                <SwiperItem>
                  <Image
                    style="width:100%;background: #fff;"
                    src="http://img3.dwstatic.com/lol/1512/315414597848/1451460779102.jpg"
                  />
                </SwiperItem>
              </Swiper>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.tabCurrent} index={2}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              图文
            </View>
          </AtTabsPane>
        </AtTabs>

        <AtTabBar
          fixed
          tabList={[
            {
              title: "首页",
              iconType: "home"
            },
            { title: "上传", iconType: "add" },
            { title: "我", iconType: "user", text: "100", max: "99" }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;

import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtNavBar, AtTabBar } from "taro-ui";
import "./index.less";

@inject("counterStore")
@observer
class Index extends Component {
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
  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className="index">
        <AtNavBar
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color="#000"
          title="首页 "
          rightFirstIconType="bullet-list"
        />

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
        <AtTabBar
          fixed
          tabList={[
            {
              title: "首页",
              iconType: "home"
            },
            { title: "上传", iconType: "add" },
            { title: "个人中心", iconType: "user", text: "100", max: "99" }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;

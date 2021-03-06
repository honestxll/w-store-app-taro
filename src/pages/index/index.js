import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { AtButton } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async componentWillMount() {
    const response = await Taro.request({
      // eslint-disable-next-line no-undef
      url: `${API_WS}/products`
    })
    console.log(response)
  }

  render () {
    return (
      <View className='index'>
        <AtButton type='primary' className='add_btn my-3' onClick={this.props.add}>+</AtButton>
        <AtButton type='secondary' className='dec_btn my-3' onClick={this.props.dec}>-</AtButton>
        <AtButton className='dec_btn my-3' onClick={this.props.asyncAdd}>async</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index

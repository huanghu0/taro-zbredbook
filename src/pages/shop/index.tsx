import { View, Text } from '@tarojs/components'
import { useDidHide, useDidShow, useLoad } from '@tarojs/taro'
import eventBus from '@/event'
import './index.scss'

export default function Shop() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(() => {
    eventBus.trigger('handleShow','我是购物页面')
  })

  return (
    <View className='shop'>
      <Text>Hello world!</Text>
    </View>
  )
}

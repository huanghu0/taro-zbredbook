import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Message() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='message'>
      <Text>Hello world!</Text>
    </View>
  )
}

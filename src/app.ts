import { PropsWithChildren } from 'react'
import { useLaunch,useDidShow,useDidHide,useLoad,useUnload } from '@tarojs/taro'
import './app.scss'

// taro不仅支持react的hooks 还支持小程序的生命周期钩子

function App({ children }: PropsWithChildren<any>) {

  // 等同于 小程序页面入口的 onLaunch监听页面初始化
  useLaunch(() => {
    console.log('App launched.')
  })

  useDidShow(() => {
    console.log('App show')
  })

  useDidHide(() => {
    console.log('App hide')
  })

  useLoad(() => {
    console.log('App load')
  })

  useUnload(() => {
    console.log('App unload')
  })


  // children 是将要会渲染的页面
  return children
}

export default App

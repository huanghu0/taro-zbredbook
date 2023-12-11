import { PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { useLaunch,useDidShow,useDidHide,useLoad,useUnload } from '@tarojs/taro'
import eventBus from '@/event/index'
import login from './api/login'
import './app.scss'

// taro不仅支持react的hooks 还支持小程序的生命周期钩子

function App({ children }: PropsWithChildren<any>) {

  // 等同于 小程序页面入口的 onLaunch监听页面初始化
  useLaunch(() => {
    console.log('App launched.')
  })

  useDidShow(async () => {
    // console.log('App show')
    const res:any = await login({
      data:{
        name:'18751609896',
        pwd:'123456'
      }
    })
    const { data } = res
    Taro.setStorageSync('userInfo',JSON.stringify(data))
    // console.log(res,'res------------------')

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

  useDidHide(() => {
    eventBus.off()
  })


  // children 是将要会渲染的页面
  return children
}

export default App

import React, { createRef, useCallback, useEffect, useState } from 'react'
import Taro,{ useLoad, useReady } from '@tarojs/taro'
import { View, Text,Canvas,Button, RootPortal } from '@tarojs/components'
import './index.scss'
import { CustomWrapper } from '@tarojs/components'
import { PageContainer } from '@tarojs/components'
import { ScrollView } from '@tarojs/components'
import { Swiper } from '@tarojs/components'
import { SwiperItem } from '@tarojs/components'
import { Picker } from '@tarojs/components'
export default function Home() {

  const [selector,setSelector] = useState(['美国', '中国', '巴西', '日本'])
  const [selectorChecked,setSelectorChecked] = useState('美国')
  const [timeSel,setTimeSel] = useState('12:01')
  const [dateSel,setDateSel] = useState('2018-04-22')

  const onChange = e => {
    setSelectorChecked(selector[e.detail.value])
  }

  const onTimeChange = e => {
    setTimeSel(e.detail.value)
  }
  const onDateChange = e => {
    setDateSel(e.detail.value)
  }


  return (
    <View className='container'>
    <View className='page-body'>
      <View className='page-section'>
        <Text>地区选择器</Text>
        <View>
          <Picker mode='selector' range={selector} onChange={onChange}>
            <View className='picker'>
              当前选择：{selectorChecked}
            </View>
          </Picker>
        </View>
      </View>
      <View className='page-section'>
        <Text>时间选择器</Text>
        <View>
          <Picker mode='time' onChange={onTimeChange}>
            <View className='picker'>
              当前选择：{timeSel}
            </View>
          </Picker>
        </View>
      </View>
      <View className='page-section'>
        <Text>日期选择器</Text>
        <View>
          <Picker mode='date' onChange={onDateChange}>
            <View className='picker'>
              当前选择：{dateSel}
            </View>
          </Picker>
        </View>
      </View>
    </View>
  </View>
  )
}


function LazyFloor(){
  useEffect(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
          .select('.ec-canvas')
          .fields({node:true,size:true})
          .exec(res => console.log('res:',res))
    })
  })
  return (
    <View>
      <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
    </View>
  )
}
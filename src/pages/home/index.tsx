import React, { createRef, useEffect, useState } from 'react'
import Taro,{ useDidShow, useLoad, useReady } from '@tarojs/taro'
import { View, Text,Canvas,Button } from '@tarojs/components'
import './index.scss'
import { CustomWrapper } from '@tarojs/components'
import eventBus from '@/event'
export default function Home() {
  // useLoad(() => {
  //   console.log('Page loaded.')
  // })

  // useReady(() => {
  //   Taro.createSelectorQuery()
  //       .select('#target')
  //       .boundingClientRect()
  //       .exec((res) => console.log(res,'res---------------'))
  // })

  // const [isShow,setIsShow] = useState(false)

  // const wrapperRef:any = createRef()

  // useReady(() => {
  //   Taro.createSelectorQuery()
  //     .in(wrapperRef.current.ctx)
  //     .select('.ec-canvas')
  //     .fields({node:true,size:true})
  //     .exec(res => console.log('res:',res))
  // })

  // const wrapperRef:any = createRef()

  // useReady(() => {
  //   Taro.createSelectorQuery()
  //     .in(wrapperRef.current.ctx)
  //     .select(`.ec-canvas`)
  //     .fields({ node: true, size: true })
  //     .exec(res => console.log('res: ', res))
  // })  

  const handleShow = (options:any) => {
    console.log(options)
  }

  useDidShow(() => {
    eventBus.on('handleShow',handleShow)
  })


  return (
    <View className='home'>
      {/* <Text id="target">Hello world!</Text> */}
      {/* <Button onClick={ () => setIsShow(true)}>Load Component</Button>
      { isShow && <LazyFloor></LazyFloor> } */}
      {/* <CustomWrapper ref={wrapperRef}>
        <Canvas canvasId="canvas" className="ec-canvas"></Canvas> 
      </CustomWrapper>  */}
      {/* <View><View><View>
            <View><View><View><View>
              <View><View><View><View>
                <CustomWrapper ref={wrapperRef}>
                <View><View><View><View>
                  <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
                </View></View></View></View>
                </CustomWrapper>
              </View></View></View></View>
            </View></View></View></View>
      </View></View></View> */}
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
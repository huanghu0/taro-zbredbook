import { CoverImage, CoverView, Video, View } from "@tarojs/components";
import "./index.scss"
import pause from './pause.png'

export function MyCoverImage(){
  return (
    <View className='container'>
    <Video id='myVideo' src='src'>
      <CoverView className='controls'>
        <CoverView className='play'>
          <CoverImage className='img' src={pause} />
        </CoverView>
      </CoverView>
    </Video>
  </View>
  )
}
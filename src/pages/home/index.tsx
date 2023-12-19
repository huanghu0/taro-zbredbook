import React, { useCallback, useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { VirtualWaterfall } from '@tarojs/components-advanced'
import { View,Text,Image } from '@tarojs/components'
import getHomeList from '@/api/home'
import ResizeImage from '@/components/ResizeImage'
import { Win_Width } from '@/utils/common'
import icon_heart_empty from '../../assets/img/page/icon_heart_empty.png'
import './index.scss'
const SIZE = 10;


export default function Home() {
    const [data,setData] = useState<ArticleSimple[]>([]) // 页面数据
    const [refresh,setRefresh] = useState<boolean>(false) // 加载
    const [page,setPage] =  useState<number>(1) // 页面page

    const requestHomeList = useCallback(async () => {
      if(refresh){
        return
      }
      
      try {
          Taro.showLoading()
          setRefresh(true)
          const params = {
            data:{
              page,
              size:SIZE
            }
          }
          const res:any = await getHomeList(params)
          const { data } = res
          if(data?.length){
              if(page === 1){
                setData(preData =>  [...data]) 
              }else{
                setData(preData => [...preData,...data])            
              }
              setPage(prePage => prePage + 1)
          }else{
              if(page === 1){
                  setData([])
              }else{
                  
              }
          }

      }catch(err){
          console.log(err);
      }finally{
        Taro.hideLoading()
        
      }
    },[])   

    const resetPage = useCallback(() => {
      setPage(1)
    },[])
    
    const refreshNewData = useCallback(() => {
      resetPage();
      requestHomeList()
    },[])




    const renferItem = React.memo(({ id,index,data }:any) => {
      return (
        <View id={id} className='item'>
          <ResizeImage src={data[index].image} ></ResizeImage>
          <Text className='nameText'>{ data[index].title }</Text>
          <View className='nameLayout'>
            <Image className="avatarImg" src={data[index].avatarUrl}></Image>
            <Text className='nameTxt'> { data[index].userName } </Text>
            <Image className='heart' src={icon_heart_empty}></Image>
            <Text className='countTxt'>{ data[index].favoriteCount }</Text>
          </View>
        </View>        
      )
    })     

    useEffect(() => {
      requestHomeList()
    },[])

    return (
      <View className='root'>
        <VirtualWaterfall
          className='virtual'
          columnWidth={Win_Width >> 1 - 16}
          column={2}
          width="100%"
          height="100%"
          itemData={data}
          itemCount={data.length}
          itemSize={200}
          item={renferItem} 
          unlimitedSize={true}
          onScrollToLower={requestHomeList}
          onScrollToUpper={refreshNewData}
        >

        </VirtualWaterfall>
      </View>
    )
}

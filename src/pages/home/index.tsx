import React, { createRef, useCallback, useEffect, useState } from 'react'
import Taro,{ useDidShow, useLoad, useReady } from '@tarojs/taro'
import { View, Text,Canvas,Button } from '@tarojs/components'
import getHomeList from '@/api/home'
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
                  setData(preData =>  data) 
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
        setRefresh(false)
      }
  },[])   

  useEffect(() => {
    requestHomeList()
  },[])


  return (
    <View className='home'>

    </View>
  )
}

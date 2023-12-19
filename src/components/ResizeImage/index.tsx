import React,{ useEffect,useState } from "react";
import Taro from "@tarojs/taro";
import { Image } from "@tarojs/components";
const windInfo = Taro.getWindowInfo()

export default ({src}:any) => {
    const [height,setHeight] = useState<number>(200);
    useEffect(() => {
        Taro.getImageInfo({
            src,
            success:function(res:any){
                const showHeight = (windInfo.windowWidth >> 1) * res.height / res.width 
                setHeight(showHeight)
            }
        })
    },[src])
    return (
        <Image
            src={src}
            style={{
                width:'100%',
                height:`${height}px`
            }}
        >

        </Image>
    )
}
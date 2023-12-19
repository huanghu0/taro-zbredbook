import Taro from "@tarojs/taro";

export const Win_Width = Taro.getWindowInfo().windowWidth

export const handleData = (data:any = []) => {
    let newData = data.map((item:any) => {
        let height = 200
        let src = item.image
        
        Taro.getImageInfo({
          src,
          success:function(res:any){
              height = (Win_Width >> 1) * res.height / res.width + 80 
          }
        })                      
        let obj = {
          ...item,
          height
        }
        return obj
      }) 
    return newData
}
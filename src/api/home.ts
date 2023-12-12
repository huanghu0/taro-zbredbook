import request from "@/utils/request"

const getHomeList = (params) => request({
    ...params,
    method:'get',
    url:'/home/homeList'
})

export default getHomeList
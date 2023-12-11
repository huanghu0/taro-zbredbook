import request from "@/utils/request"

const login = (params) => request({
    ...params,
    method:'get',
    url:'/user/login'
})

export default login
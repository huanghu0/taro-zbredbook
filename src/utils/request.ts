import Taro from '@tarojs/taro';
 
const TIME_OUT = 60000;
const BASE_URL = 'http://192.168.1.3:7001';
 
const request = (options) => {
  // 判断是不是完整的地址，不是的话，拼接上baseUrl
  let urlPath = '';
  if (options.url.indexOf('http') === -1) {
    urlPath = BASE_URL + options.url;
  } else {
    urlPath = options.url;
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      timeout: TIME_OUT,
      data: options.data || {},
      success(res) {
        // 可以根据自己的数据状态处理响应
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};
 
export default request;
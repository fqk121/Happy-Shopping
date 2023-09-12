import request from '@/utils/http'
// 封装获取订单接口
export const getUserOrder = (params) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}
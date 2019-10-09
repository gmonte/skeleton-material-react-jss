import get from 'lodash/get'
import http from '@conheca-meta-clients/s-http'

export const loginAd = async (options = {}) => {
  const {
    data: { username, password }
  } = options

  const data = new FormData()

  data.append('username', username)
  data.append('password', password)

  return http({
    method: 'POST',
    url: '/login',
    baseURL: 'http://177.220.237.11:8086/api',
    headers: {
      'Content-Type': 'multipart/form-data',
      ...get(options, 'headers', {})
    },
    data
  })
}

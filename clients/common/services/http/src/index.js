import axios from 'axios'
import upperCase from 'lodash/upperCase'

export default (options = {}) => {
  if (upperCase(options.method) === 'GET') {
    const { data, ...otherOptions } = options

    delete options.data

    options = {
      ...otherOptions,
      params: data
    }
  }

  return axios(options)
}

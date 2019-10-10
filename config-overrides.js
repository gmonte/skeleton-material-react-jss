const path = require('path')
const get = require('lodash/get')
const set = require('lodash/set')

module.exports = function override(config) {
  set(config, 'module.rules[2].oneOf[1]', {
    ...get(config, 'module.rules[2].oneOf[1]', {}),
    include: [
      get(config, 'module.rules[2].oneOf[1].include'),
      path.resolve(__dirname, '../../../../node_modules/@meta-react'),
      path.resolve(__dirname, '../../../../clients')
    ]
  })

  return config
}

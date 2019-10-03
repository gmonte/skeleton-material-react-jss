const path = require('path')
const get = require('lodash/get')
const set = require('lodash/set')

module.exports = function override(config) {
  set(config, 'module.rules[2].oneOf[1]', {
    ...get(config, 'module.rules[2].oneOf[1]', {}),
    include: [
      path.resolve(__dirname, '../../../../node_modules/@meta-react'),
      path.resolve(__dirname, '../../../../clients')
    ],
    options: {
      ...get(config, 'module.rules[2].oneOf[1].options', {}),
      plugins: [
        ...get(config, 'module.rules[2].oneOf[1].options.plugins', []),
        ['@babel/plugin-proposal-decorators', { legacy: true }]
      ]
    }
  })

  return config
}

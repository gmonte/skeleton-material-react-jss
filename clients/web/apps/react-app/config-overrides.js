const path = require('path')
const get = require('lodash/get')
const set = require('lodash/set')

module.exports = function override(config) {
  const rules = get(config, 'module.rules', [])

  set(config, 'module.rules[2].oneOf[1]', {
    ...get(rules, '[2].oneOf[1]', {}),
    include: [
      path.resolve(__dirname, '../../../../node_modules/@meta-react'),
      path.resolve(__dirname, '../../../../clients')
    ]
  })

  return config
}

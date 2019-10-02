const path = require('path')
const get = require('lodash/get')
const set = require('lodash/set')

module.exports = function override(config) {
  const rules = get(config, 'module.rules', [])
  const testJsx = get(rules, '[2].oneOf[1]', {})

  set(config, 'module.rules[2].oneOf[1]', {
    ...testJsx,
    include: [
      get(testJsx, 'include'),
      path.resolve(__dirname, '../../../../node_modules/@conheca-meta-clients'),
      path.resolve(__dirname, '../../../../node_modules/@meta-react')
    ]
  })

  return config
}

const path = require('path');

const i18nWebpackPlugin = [
  'react-intl',
  { messagesDir: path.resolve(__dirname, '../locales/') }
];

module.exports = {
  i18nWebpackPlugin
};

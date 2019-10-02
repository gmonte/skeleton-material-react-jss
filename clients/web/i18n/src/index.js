import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import I18nProvider from './I18nProvider';

const I18n = props => {
  const { children, params } = props;
  return <FormattedMessage id={children} values={params} />;
};

I18n.propTypes = {
  params: PropTypes.shape(),
  options: PropTypes.shape(),
  children: PropTypes.string.isRequired
};

I18n.defaultProps = {
  params: {},
  options: {}
};

export default I18n;
export { injectIntl, I18nProvider };

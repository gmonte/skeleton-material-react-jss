import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import localeEn from '../locales/en';
import localePtBR from '../locales/pt-BR';

const I18nProvider = props => {
  const { language, children } = props;

  const [mounted, setMounted] = useState(false);
  const [locales] = useState({
    en: localeEn,
    'pt-BR': localePtBR
  });

  useEffect(() => {
    addLocaleData([...en, ...pt]);
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Suspense fallback={<div />}>
        <IntlProvider locale={language} messages={locales} key={language}>
          {children}
        </IntlProvider>
      </Suspense>
    )
  );
};

I18nProvider.propTypes = {
  language: PropTypes.string,
  children: PropTypes.element
};

I18nProvider.defaultProps = {
  language: 'pt-BR',
  children: null
};

export default I18nProvider;

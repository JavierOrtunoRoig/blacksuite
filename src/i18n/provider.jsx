import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages'

import React from 'react';

const Provider = ({ children, locale = LOCALES.SPANISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={React.Fragment}
    messages={messages[locale]}
  >    
    {children}
  </IntlProvider>
);

export default Provider;
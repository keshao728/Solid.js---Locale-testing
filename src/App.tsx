import { Component, createSignal } from 'solid-js';
import {
  I18nContext,
  createI18nContext,
  useI18n,
} from '@solid-primitives/i18n';

import enTranslations from './locales/en/translation.json';
import znTranslations from './locales/zn/translation.json';

const dict = {
  en: enTranslations,
  zn: znTranslations,
};

const App: Component = () => {
  const [t, { add, locale }] = useI18n();

  return (
    <>
      <button onClick={() => locale('zn')}>zn</button>
      <button onClick={() => locale('en')}>en</button>
      <hr />
      <h1>{t('hello')}!</h1>
      <p>{locale()}</p>
    </>
  );
};

const i18nContextValue = createI18nContext(dict, 'en');

function AppWrapper() {
  return (
    <I18nContext.Provider value={i18nContextValue}>
      <App />
    </I18nContext.Provider>
  );
}

export default AppWrapper;

/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './locales/en.json';
import vi from './locales/vi.json';

Vue.use(VueI18n)

const locale = localStorage.getItem('systemLanguage') || 'vi' // default locale
const messages = {
  'en': {
      ...en,
  },
  'vi': {
     ...vi,
  }
};
export const i18n = new VueI18n({
  locale,
  fallbackLocale: locale,
  messages
})


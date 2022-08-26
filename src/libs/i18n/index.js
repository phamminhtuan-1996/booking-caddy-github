/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getTranslate, getLanguages } from '@/api/service.js';
import en from './locales/en.json';
import vi from './locales/vi.json';

Vue.use(VueI18n)

const locale = localStorage.getItem('systemLanguage') || 'vi' // default locale
const messageslocal = {
  'en': {
      ...en,
  },
  'vi': {
     ...vi,
  }
};
const messages = {'vi':{}, 'en':{}};


async function fetchTranslate() {
  const param = {
    'KeyGroup': "WEB_APP_CADDY"
  }
  const res = await getTranslate(param);
  const objectResult = JSON.parse(res.data.Data);
  const toArrayResult = Object.values(objectResult);
  const ListValueLanguage = Object.keys(objectResult);
  return {
    ListValueLanguage,
    toArrayResult
  };
}

async function fetchLanguages() {
  const res = await getLanguages();
  return res.data.Data.LangCategory;
}

export async function loadLocaleMessages() {
  const translate = await fetchTranslate();
  const languages = await fetchLanguages();
  messages.vi = translate.toArrayResult[0];
  messages.en = translate.toArrayResult[1];
}

export const i18n = new VueI18n({
  locale,
  fallbackLocale: locale,
  messages
});
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      hello: 'Hello i18n'
    }
  }
})
export default i18n;
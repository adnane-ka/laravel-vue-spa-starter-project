import { createI18n } from 'vue-i18n'

/**
 * translations objects
*/
import en from './en'
import ar from './ar'
import es from './es'

/**
 * fetch for active locale
*/
const active = localStorage.getItem('locale') ?? 'en'

/**
 * creating a i18n instance
*/
const i18n = createI18n({
  locale: active,
  messages: {
    'en': en,
    'ar': ar,
    'es': es
  }
})

export default i18n;
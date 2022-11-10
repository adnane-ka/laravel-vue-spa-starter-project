import { createApp } from 'vue'
import App from './App.vue'

/**
 * helper functions
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 */
import exampleHelper from './helpers/exampleHelper'
import storeLanguage from './helpers/storeLanguage'
import {changeMode} from './helpers/modeHandler'
import {setMode} from './helpers/modeHandler'
import {activeMode} from './helpers/modeHandler'

/**
 * vue router instance
 * @see https://router.vuejs.org/
 */
import router from './router'

/**
 * globale components
 * @see https://vuejs.org/guide/components/registration.html
*/
import GlobalComponentExample from './components/GlobalComponentExample.vue'

/**
 * axios
 * @see https://axios-http.com/docs/intro
*/
import axios from './axios'

/**
 * i18n
 * @see https://kazupon.github.io/vue-i18n/
*/
import i18n from './lang'

/**
 * creating an app instance
 * @see https://vuejs.org/guide/essentials/application.html
 */
const app = createApp(App)

/**
 * defining globale properties
 * @see https://vuejs.org/api/application.html#app-config-globalproperties
 */
app.config.globalProperties.$exampleHelper = exampleHelper
app.config.globalProperties.$storeLanguage = storeLanguage
app.config.globalProperties.$changeMode = changeMode
app.config.globalProperties.$setMode = setMode
app.config.globalProperties.$activeMode = activeMode
app.config.globalProperties.$axios = axios

/**
 * registering global components
 * @see https://vuejs.org/guide/components/registration.html
*/
app.component('GlobalComponentExample', GlobalComponentExample)

/**
 * installing plugins
 * @see https://vuejs.org/guide/components/registration.html
 */
app.use(router)
app.use(i18n)

/**
 * mounting to #app
 * @see https://vuejs.org/api/application.html#app-mount
 */
app.mount('#app')
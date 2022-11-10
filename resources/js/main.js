import { createApp } from 'vue'
import App from './App.vue'

/**
 * helper functions
 */
import exampleHelper from './helpers/exampleHelper'
import storeLanguage from './helpers/storeLanguage'
import {changeMode} from './helpers/modeHandler'
import {setMode} from './helpers/modeHandler'
import {activeMode} from './helpers/modeHandler'

/**
 * vue router instance
 */
import router from './router'

/**
 * globale components
*/
import GlobalComponentExample from './components/GlobalComponentExample.vue'

/**
 * axios
*/
import axios from './axios'

/**
 * i18n
*/
import i18n from './lang'

/**
 * creating an app instance
 */
const app = createApp(App)

/**
 * defining globale properties
 */
app.config.globalProperties.$exampleHelper = exampleHelper
app.config.globalProperties.$storeLanguage = storeLanguage
app.config.globalProperties.$changeMode = changeMode
app.config.globalProperties.$setMode = setMode
app.config.globalProperties.$activeMode = activeMode
app.config.globalProperties.$axios = axios

/**
 * registering global components
*/
app.component('GlobalComponentExample', GlobalComponentExample)

/**
 * installing plugins
 */
app.use(router)
app.use(i18n)

/**
 * mounting to #app
 */
app.mount('#app')
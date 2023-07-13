import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//IconsRiHandHeartFill
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { SiHellofresh, BiWhatsapp, BiFacebook, BiYoutube, BiTwitter, IoHome, FaSearchengin, HiSolidMenuAlt3   } from "oh-vue-icons/icons";


addIcons( BiFacebook, BiYoutube, BiTwitter, SiHellofresh, BiWhatsapp, IoHome, FaSearchengin, HiSolidMenuAlt3   );

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)
app.component("v-icon", OhVueIcon);

app.mount('#app')

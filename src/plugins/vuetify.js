// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
    defaults : { 
      global :{
        dense: true,
        outlined: true
      },
      VTextField: {
        dense: true,
        outlined: true,
        density: "compact",
      }
    }
  }
  )
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

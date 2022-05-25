import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' //all solid icons
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// register VueFusionCharts component
import VueFusionCharts, {FCComponent} from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'


library.add(fas, far)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)
Vue.component('fusioncharts', FCComponent, FusionCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')

import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './js/autoLoad'


const app = createApp(App);

app.use(router,ElementPlus, {
    locale: zhCn,
  })
  
app.mount("#app");

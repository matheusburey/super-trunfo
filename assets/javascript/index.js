import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import components from "./components/index.js";

createApp(
  {
    data() {
      return {
        amountCards: 10,
      };
    },
    components,

  }).mount('#app')
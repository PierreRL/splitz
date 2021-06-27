import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag-next";

const app = createApp(App).use(router);

app.use(VueGtag, {
    property: {
        id: "G-HLPBGW2T4Y"
    }
}, router);

app.mount("#app");

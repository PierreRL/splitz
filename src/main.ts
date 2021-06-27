import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(VueGtag, {
    property: {
        id: "277299114"
    }
}, router);

app.mount("#app");

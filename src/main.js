import { createApp } from "vue";
import App from "./App.vue";
// import form basecard
import BaseCard from "./components/BaseCard.vue";

let app = createApp(App);

app.component("base-card", BaseCard);

app.mount("#app");

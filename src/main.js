import { createApp } from "vue";
import App from "@/components/app/App.vue";
import layout from "@/layout";

import "./index.css";

const app = createApp(App);
layout.map((item) => app.component(item.name, item));
app.mount("#app");

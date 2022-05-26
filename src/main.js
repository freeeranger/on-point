import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faRocket,
    faDumbbell,
    faHouse,
    faCirclePlus,
    faCog,
    faPencil,
    faAngleLeft,
    faAngleRight,
    faUser,
    faPalette,
    faClipboard,
    faBell,
    faLock,
    faInfoCircle,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faRocket, faDumbbell, faHouse, faCirclePlus, faCog, faPencil, faAngleLeft, faAngleRight, faUser, faPalette, faClipboard, faBell, faLock, faInfoCircle, faTrash);

createApp(App).use(router).component("FaIcon", FontAwesomeIcon).mount("#app");

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faSpinner,
  faSimCard,
  faWifi,
  faUserNinja,
  faLink
} from "@fortawesome/free-solid-svg-icons";

import { faBtc } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faSpinner,
  faSimCard,
  faBtc,
  faWifi,
  faUserNinja,
  faLink
);
Vue.component("fa-icon", FontAwesomeIcon);

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faMessage,
  faCalendar,
  faBriefcase,
  faUserGroup,
  faCircleNodes,
  faDesktop,
  faMagnifyingGlass,
  faCircleQuestion,
  faBell,
  faArrowTrendUp,
  faChevronDown,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add([
  faHouse,
  faMessage,
  faCalendar,
  faBriefcase,
  faUserGroup,
  faCircleNodes,
  faDesktop,
  faMagnifyingGlass,
  faCircleQuestion,
  faBell,
  faArrowTrendUp,
  faChevronDown,
  faEllipsisVertical
]);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});

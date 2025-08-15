import router from "./route.js";
import movieAPIs from "../Js/api/cinema.mock.server.js"
import themeSwitcher from "../Js/lib/theme-switcher.js"

movieAPIs();
themeSwitcher()
router.start()
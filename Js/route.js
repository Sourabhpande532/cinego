import { AtomRouter } from "../Js/lib/atom-router.js"
import homes from "./pages/home.js";
import details from "./pages/details.js"
const router = new AtomRouter( { rootId: "app", debug: false } );
router.add( [
    { url: "/index.html", handler: homes },
    { url: "/details", handler: details },
] )
export default router;
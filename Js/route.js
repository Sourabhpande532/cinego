import { AtomRouter } from "../Js/lib/atom-router.js"
import homes from "./pages/home.js";
const router = new AtomRouter( { rootId: "app", debug: false } );
router.add( [
    { url: "/index.html", handler: homes }
] )
export default router;
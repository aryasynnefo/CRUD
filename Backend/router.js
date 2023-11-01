import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/add").post(controller.addUser);
router.route("/display").get(controller.displayUser);
router.route("/film/:id").post(controller.getFilm);
router.route("/filmdata/:id").post(controller.getFilmdata);
router.route("/deletefilm/:id").delete(controller.deleteFilmdata);
router.route("/updatefilm/:id").patch(controller.updateFilmdata);
router.route("/search").post(controller.searchFilm);
export default router;


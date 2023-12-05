import express from "express"
const router = express.Router()
import {getAllPost} from "../controllers/postController.js"

router.get("/", getAllPost )
/*router.get("/:id", getPost)
router.post("/", creo un posteo)
router.put("/:id", modifico un posteo)
router.delete("/:id", elimino un posteo) */

export default router
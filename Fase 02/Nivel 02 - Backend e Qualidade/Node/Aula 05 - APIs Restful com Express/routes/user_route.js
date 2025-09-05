const express = require("express")
const user_controller = require("../controller/user_controller")

const router = express.Router()


router.get("/", user_controller.getAllUsers)
router.get("/:id", user_controller.getUserById)
router.post("/", user_controller.createUser)
router.put("/:id", user_controller.updateUser)
router.delete("/:id", user_controller.deleteUser)

module.exports = router
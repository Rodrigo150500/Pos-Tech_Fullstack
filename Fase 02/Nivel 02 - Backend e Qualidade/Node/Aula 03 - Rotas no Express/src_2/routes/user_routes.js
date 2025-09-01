const express = require('express')
const router = express.Router()
const user_controller = require('../controllers/user_controller')
const { route } = require('../../src/routes/user_routes')

router.get("/", user_controller.getAllUsers)
router.get("/:id", user_controller.getUserById)
router.post("/", user_controller.createUser)
router.put("/:id", user_controller.updateUser)
router.delete("/:id", user_controller.deleteUser)

module.exports = router
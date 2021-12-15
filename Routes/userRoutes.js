const express = require('express')
const router = express.Router()
const userscontroller = require('../controllers/userscontroller')

router.route('/')
.get(userscontroller.getAllUsers)
.post(userscontroller.createUser)

router.route('/:id')
.get(userscontroller.getUser)
.patch(userscontroller.updateUser)
.delete(userscontroller.deleteUser)

module.exports = router
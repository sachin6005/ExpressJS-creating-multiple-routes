const express = require('express')
const studentcontroller = require('../controllers/studentcontroller')
const router = express.Router()

router.param('id',studentcontroller.checkID)

router
.route('/')
.get(studentcontroller.getStudent)
.post(studentcontroller.checkBody,studentcontroller.createStudent)

router
.route('/:id')
.get(studentcontroller.getPerson)
.patch(studentcontroller.updatePerson)
.delete(studentcontroller.deletePerson)

module.exports = router
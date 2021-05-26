import express from 'express'
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from '../controller/users.controller.js'

const router =  express.Router()

//validation

router.route('/').get(getAllUsers)
router.route('/:id').get(getOneUser)
router.route('/add').post(createUser)
router.route('/delete/:id').delete(deleteUser)
router.route('/update/:id').put(updateUser)
export default router
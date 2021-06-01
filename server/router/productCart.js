import express from 'express'
import { addOne, delOne, getAll } from '../controller/productController/items.controller.js'



const router = express.Router()

router.route('/').get(getAll)
router.route('/delete/:id').delete(delOne)
router.route('/add').post(addOne)

export default router


import express from 'express'
import { delOne, getAll, getOne, updateOne, upOne } from '../controller/productController/household.controller.js'


const router = express.Router()


router.route('/').get(getAll)
router.route('/:id').get(getOne)
router.route('/create').post(upOne)
router.route('/delete/:id').delete(delOne)
router.route('/update/:id').put(updateOne)

export default router
import express from 'express'
import { delProduct, getAll,   getOneItem,  updateProduct, upProduct } from '../controller/productController/products.controller.js'


const router = express.Router()

router.route('/').get(getAll)
router.route('/:id').get(getOneItem)
router.route('/create').post(upProduct)
router.route('/update/:id').put(updateProduct)
router.route('/delete/:id').delete(delProduct)
export default router
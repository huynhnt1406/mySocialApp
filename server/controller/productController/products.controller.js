import { ProductModel } from "../../model/ProductModel.js"



export const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find()
        console.log('product',products)
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const getOneItem = async (req,res ) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const upProduct = async (req,res) => {
    try {
        const newProduct = req.body
        const product =new ProductModel(newProduct)
        await product.save()
        console.log('this is new product', product)
        res.status(200).json(product)

    } catch (error) {
        res.status(400).json({msg:'Can not up a product '})
    }
}
export const delProduct = async (req,res) => {
    try {
        const products  = await ProductModel.findByIdAndDelete(req.params.id)
        console.log('this is rest product', products)
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}

export const updateProduct = async (req,res) => {
    try {
        const updateProduct = req.body
        const product = await ProductModel.findByIdAndUpdate(req.params.id,updateProduct,{new:true})
        console.log('product is updated successfully',product)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:'Failed to update product data'})
    }
}
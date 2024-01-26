const Product_modal = require("../model/dishes_modal");

module.exports = {
    getAllProducts:async(req,res) => {
        try {
            const products = await Product_modal.find();

            return res.status(200).json({
              message:"success to get all products",
              success:true,
              products
            })
        } catch (error) {
            return res.status(500).json({
                message:"error in get all products request",
                error:error.message
            })
        }
    },
    getProductById:async(req,res) => {
        try {

            const product = await Product_modal.findById(req.params.id);

            return res.status(200).json({
                message:"success to get product",
                success:true,
                product
              })

        } catch (error) {
                        return res.status(500).json({
                message:"error in get product request",
                error:error.message
            })
        }
    },
    addProduct:async(req,res) => {
        try {

         const {product_name ,product_price , product_description , product_image} = req.body;

         if(!product_name || !product_price) throw Error("required fields are missings");

         const new_product = new Product_modal({
               product_name,
               product_price,
               product_description,
               product_image
            });

         await new_product.save();

         return res.status(200).json({
            message:"success to add product",
            success:true
          })
        } catch (error) {
            return res.status(500).json({
                message:"error in add product request",
                error:error.message
            })
        }
    },
    updateProduct:async(req,res) => {
        try {
            const id = req.params.id;

           const product = await Product_modal.findByIdAndUpdate(id,req.body);


            return res.status(200).json({
                message:"success to update product",
                success:true,
                product
              })
        } catch (error) {
            return res.status(500).json({
                message:"error in add product request",
                error:error.message
            })
        }
    },
    deleteProduct:async(req,res) => {
        try {
            await Product_modal.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message:"success to delete product",
                success:true,
              })
        } catch (error) {
            return res.status(500).json({
                message:"error in delete product request",
                error:error.message
            })
        }
    }
}
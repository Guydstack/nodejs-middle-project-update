const Product_modal = require("../model/events_modal");

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
    addProduct: async (req, res) => {
        try {
            let urlImage = "";
    
            // Check if there is a file uploaded
            if (req.file) {
                urlImage = `http://localhost:3000/${req.file.filename}`;
            } else {
                // If no file is uploaded, check if event_image is provided in the request body
                if (req.body.event_image) {
                    urlImage = req.body.event_image;
                }
            }
        
            const { event_name, event_price, event_description } = req.body;
    
            if (!event_name || !event_price) throw Error("Required fields are missing");
    
            const new_product = new Product_modal({
                event_name,
                event_price,
                event_description,
                event_image: urlImage, // Use the determined URL or file path
            });
    
            await new_product.save();
    
            return res.status(200).json({
                message: "Success to add product",
                success: true,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error in add product request",
                error: error.message,
            });
        }
    }
    ,
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
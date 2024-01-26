const Orders_modal = require("../model/orders_modal");

module.exports = {
    getAllOrders:async(req,res) => {
        try {
            const orders = await Orders_modal.find()
            .populate({
                path: 'products',
                select: 'product_name'
            })
            .populate({
                path: 'user',
                select: 'user_email'
            });
            // Othere option
            // .populate("user")
            
            return res.status(200).json({
              message:"success to get all orders",
              success:true,
              orders
            })
        } catch (error) {
            return res.status(500).json({
                message:"error in get all orders request",
                error:error.message
            })
        }
    },
    getOrderById:async(req,res) => {
        try {

            const orders = await Orders_modal.findById(req.params.id);
            

            return res.status(200).json({
                message:"success to get orders",
                success:true,
                orders
              })

        } catch (error) {
                        return res.status(500).json({
                message:"error in get product request",
                error:error.message
            })
        }
    },
    addOrder:async(req,res) => {
        try {

         const { total_price ,products ,user } = req.body;

         if(!total_price || !products || !user) throw new Error("required fields are missings");

         const new_order = new Orders_modal({
            total_price,
            products,
            user
            });

         await new_order.save();

         return res.status(200).json({
            message:"success to add order",
            success:true
          })
        } catch (error) {
            return res.status(500).json({
                message:"error in add order request",
                error:error.message
            })
        }
    },
    updateOrder:async(req,res) => {
        try {
            const id = req.params.id;

           const order = await Orders_modal.findByIdAndUpdate(id,req.body);


            return res.status(200).json({
                message:"success to update order",
                success:true,
                order
              })
        } catch (error) {
            return res.status(500).json({
                message:"error in add order request",
                error:error.message
            })
        }
    },
    deleteOrder:async(req,res) => {
        try {
            await Orders_modal.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message:"success to delete order",
                success:true,
              })
        } catch (error) {
            return res.status(500).json({
                message:"error in delete order request",
                error:error.message
            })
        }
    }
}
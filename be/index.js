import express from 'express'
import mongoose from 'mongoose';
import cors from "cors"








const app = express()
const port = 3000


app.use(cors())
app.use(express.json());


const productSchema = new mongoose.Schema({
    img:String,
    name: String,
    price:Number

  });


  const ProductModel = mongoose.model('product', productSchema);




app.get('/product', async (req, res) => {
    const products=await ProductModel.find()
    
    res.send(products)
  })
  app.get('/product/:id', async (req, res) => {
    const {id}=req.params
    const products=await ProductModel.findById(id)

    
    
    res.send(products)
  })


  
  app.post('/product',async (req, res) => {
    const body=req.body
    const product=new ProductModel(body)
    await product.save()

    res.send(product)
  })
  
  app.put('/product/:id', async(req, res) => {
    const {id}=req.params
    const body=req.body
    const update=await ProductModel.findByIdAndUpdate(id,body)
    res.send(update)
  })
  
  app.delete('/product/:id', async(req, res) => {
    const {id}=req.params
    const deleteproduct=await ProductModel.findByIdAndDelete(id)
    res.send(deleteproduct)
  })
  mongoose.connect('mongodb+srv://nezrin:nezrin@nezrin.dtlskcs.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
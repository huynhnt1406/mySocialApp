import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import post from './router/post.js'
import users from './router/users.js'
import video from './router/video.js'
import products from './router/products.js'
import household from './router/household.js'
import productCart from './router/productCart.js'
import {createServer} from 'http'
import {Server} from "socket.io"


const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer)
const PORT = process.env.PORT || 3333
const MONGO_URI = 'mongodb+srv://admin:huynhnguyenbkak63@cluster0.mf7fr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 
app.use(cors())
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
mongoose.connect(MONGO_URI , {useUnifiedTopology:true, useNewUrlParser:true})
    .then(
        console.log('db connected'),
        httpServer.listen(PORT, () => 
            console.log(`Server is running on PORT : ${PORT}`)
        )
    )
    .catch((err) => {
        console.log({msg:err})
    })
app.use('/posts', post)
app.use('/users', users)
app.use('/videos', video )
app.use('/products',products)
app.use('/household',household)
app.use('/items',productCart)


export default io
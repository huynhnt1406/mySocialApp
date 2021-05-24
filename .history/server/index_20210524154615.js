import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import post from './router/post.js'
const app = express()
const PORT = process.env.PORT || 3333
const MONGO_URI = 'mongodb+srv://admin:huynhnguyenbkak63@cluster0.m8cw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 
app.use(cors())
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
mongoose.connect(MONGO_URI , {useUnifiedTopology:true, useNewUrlParser:true})
    .then(
        console.log('db connected'),
        app.listen(PORT, () => 
            console.log(`Server is running on PORT : ${PORT}`)
        )
    )
    .catch((err) => {
        console.log({msg:err})
    })
app.use('/posts', post)


import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`))

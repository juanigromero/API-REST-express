let express = require("express")
const indexRouter = require("./src/routes/index")
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', './src/views')
app.set('view engine', 'ejs')


app.use("/api", indexRouter)

// app.get("/", (_req,res) => {
//     // let message = "Comer comida como los comienzos como no lo viste?"
//     res.render("index")
// })



module.exports = app;
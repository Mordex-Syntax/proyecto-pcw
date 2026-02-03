import express from "express"
import { PORT } from "./config.js"
import morgan from "morgan"
import productoRoutes from "./routers/product.route.js"

const app = express()

app.use(morgan("dev"))

//middelwares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(productoRoutes)

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT)
})
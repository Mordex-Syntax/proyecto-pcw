import {Router} from "express"
import {getProductos, getProducto, crearProducto} from "../controllers/product.controller.js"

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:id', getProducto)
router.post('/productos/crear', crearProducto)

export default router
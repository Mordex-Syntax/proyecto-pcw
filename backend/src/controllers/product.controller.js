import {pool} from "../db.js"

export const getProductos = async (req, res) => {
    const data = await pool.query("SELECT * FROM public.productos ORDER BY id_producto ASC;")
    res.json(data.rows)
}

export const getProducto = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = await pool.query("SELECT * FROM public.productos WHERE id_producto = $1;",[id])
    res.json(data.rows)
}

export const crearProducto = async (req, res) => {
    try {
        const { descripcion, precio } = req.body
        console.log(descripcion, precio)
        const { rows } = await pool.query(
            "INSERT INTO public.productos (descripcion, precio) VALUES($1,$2) RETURNING *;",
            [descripcion, precio]
        )
        console.log(rows)
        res.json(rows[0])
    } catch (error) {
        return res.json({error: error.message})
    }
}
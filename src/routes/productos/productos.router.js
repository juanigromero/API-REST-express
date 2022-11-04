const express = require("express")
const Productos = require("../../services/productos")

const router = express.Router()

let idCount = 3



router.get('/', (_req, res) => {
    try {
        let productos = new Productos()
        res.render('index',{productos: productos.getProducts()})
    } catch (error) {
        res.status(500).json(error)
    }
})

// router.get('/:id', (req, res) => {
//     try {
//         let producto = productos.find(product => product.id == req.params.id)
//         producto ? res.status(200).json(producto) : res.status(300).json({error:"producto no encontrado"})
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

router.post('/', (req, res) => {
    try {
        const { name, price, image } = req.body
        const productos = new Productos()
        productos.postProducts({name, price, image})
        res.redirect('/api/productos')
        // productos.push({id:idCount,...body})
        // idCount += 1
        // res.status(200).json({
        //     success:true,
        //     data:productos.find(e => e.id == idCount-1)
        // })
    } catch (error) {
        res.status(500).json(error)
    }
})

// router.put('/:id', (req, res) =>{
//     try{
//     const { body } = req
//     let index = productos.findIndex(product => product.id == req.params.id)
//     productos[index] = {...productos[index],...body}
    
//     res.status(200).json({
//         success:true,
//         data:productos[index]
//     })
//     }catch(error){
//         res.status(500).json(error)
//     }

// })

// router.delete('/:id', (req, res) => {
//     try {
//         let index = productos.findIndex(product => product.id == req.params.id)
//         productos.splice(index,1)
//         res.status(200).json({
//             success:true,
//         })
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

module.exports = router
const express = require("express")

const router = express.Router()

let idCount = 3

let productos = [
    {
        id:1,
        title:"mochila",
        price:150,
        thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffree-png-vectors%2Fmochilas&psig=AOvVaw3qMWyQUOd3EBuFBcxrpbob&ust=1666917601777000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIj325KW__oCFQAAAAAdAAAAABAE"
    },
    {
        id:2,
        title:"carpeta",
        price:1500,
        thumbnail:"https://w7.pngwing.com/pngs/595/611/png-transparent-directory-computer-icons-folders-miscellaneous-angle-rectangle.png"
    }
]

router.get('/', (_req, res) => {
    try {
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', (req, res) => {
    try {
        let producto = productos.find(product => product.id == req.params.id)
        producto ? res.status(200).json(producto) : res.status(300).json({error:"producto no encontrado"})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', (req, res) => {
    try {
        const { body } = req
        productos.push({id:idCount,...body})
        idCount += 1
        res.status(200).json({
            success:true,
            data:productos.find(e => e.id == idCount-1)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', (req, res) =>{
    try{
    const { body } = req
    let index = productos.findIndex(product => product.id == req.params.id)
    productos[index] = {...productos[index],...body}
    
    res.status(200).json({
        success:true,
        data:productos[index]
    })
    }catch(error){
        res.status(500).json(error)
    }

})

router.delete('/:id', (req, res) => {
    try {
        let index = productos.findIndex(product => product.id == req.params.id)
        productos.splice(index,1)
        res.status(200).json({
            success:true,
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
const productos = []

let idCount = 1

class Productos {
    constructor(){}

    getProducts(){
        return productos
    }

    postProducts(product){
        productos.push({
            ...product,
            id: idCount
        })
        idCount += 1
        return productos
    }
}


module.exports = Productos
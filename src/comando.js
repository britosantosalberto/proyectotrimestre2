/* Creo una coleccion fichajeshechos en la que se incluyen los productos vendidos. */
db.fichajes.aggregate( [
    { 
        $unwind: { 
            path: "$items" 
        } 
    },
    {
        $project: {
            _id: 0,  
            _idjugador: "$items.idjugador", 
            idVenta:1, 
            caracteristicas: "$items.caracteristicas",  
            precio:"$items.precio"
        }
    },
    { 
        $out: "fichajeshechos" 
    } 
] )

/* Crear una coleccion ventas en la que se incluyan las ventas */
db.fichajes.aggregate( [
    {
        $project: {
            _id: 0,
            items: 0,
        }
    },
    {
        $out: "ventas"
    }
])

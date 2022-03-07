/* Quiero saber el fichaje mas caro y el mas barato producido en 2021 */
db.fichajeshechos.aggregate([
    {
      $match : { 
          "fechaFichaje": { 
              $gte: new ISODate("2021-01-01"), 
              $lt: new ISODate("2022-01-01") 
            } 
        }
    },
    {
      $group : {
         _id : null,
         fichajeMasCaro: { 
             $max: "$precio"
            },
         fichajeMasBarato: { 
             $min: "$precio" 
            },
        }
    },
])

/* Queremos saber todo el dinero que ha generado cada equipo vendedor ordenadas de mayor a menor. */
db.ventas.aggregate( [
    {
        $lookup:{
            from: 'fichajeshechos',
            localField: 'idFichaje',
            foreignField: 'idFichaje',
            as: 'equipo'
        }
    },
    {
        $unwind: {
            path:"$equipo"
        }
    },
    {
       $project: {
            _id: 0,
            vendedor:1,
            _idjugador:"$equipo._idjugador",
            precio: 1,
            ganancias: {
                $let: {
                    vars: {
                        price: { 
                            $cond: { 
                                if: '$equipo.caracteristicas.goleador', 
                                then: 150, 
                                else: 0 
                            } 
                        }
                    },
                    in: { 
                        $subtract: [ 
                            "$equipo.precio", 
                            "$$price" 
                        ] 
                    }
                }
            }
        }
    },
    {
        $group:{
            _id: "$vendedor",
            ganancias:{
                $sum: "$ganancias"
            }
        }
    },
    {
        $sort:{
            ganancias:-1
        }
    }
] )

/* Ver el ordenador mas caro y el mas barato */
db.fichajeshechos.aggregate( [
    {
        $group: {
            _id: 1,
            fichajeMasCaro: {
                $max: "$precio"
            },
            fichajeMasBarato: {
                $min: "$precio"
            }
        }
    }
] )

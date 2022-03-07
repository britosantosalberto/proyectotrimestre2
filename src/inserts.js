db.fichajes.drop()
db.fichajes.insertMany(  [

    {idFichaje: 1,
        items: [ 
            {
                idjugador: 65,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "real madrid", 
                            nacionalidad:"frances", 
                            trofeos: ["liga", "champions", "copa", "eurocopa"], 
                            nombre:"karim benzema" 
                        }, 
                        detalles: {
                            edad:33, 
                            posición:"delantero" 
                        }, 
                        selección: {
                            nombre: "Francia",
                            seleccionador: "Didier Deschamps ",
                            trofeos: 2
                        } , 
                        club: { 
                            importancia: "capitán" 
                        },
                        fisico: {
                            cualidad: ["habilidoso", "creativo"], 
                            tamaño: { h:184, w:60 },
                            números: [ 9, 10, 19 ] 
                        }, 
                        apodo:"el gato", 
                        goles: [
                            { 
                                tipo:"cabeza", 
                                capacidad:131 
                            }, 
                            {
                                tipo: "pierna",
                                capacidad: 456
                            } 
                        ],
                        goleador: true,
                        fecha_nacimiento: new Date("1987-12-19")
                    },
                precio: 85.05
            },
            {
                idjugador: 34,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "real madrid", 
                            nacionalidad:"español", 
                            trofeos: ["liga", "champions", "copa", "mundial", "eurocopa"], 
                            nombre:"Lucas Vázquez" 
                        }, 
                        detalles: {
                            edad:25, 
                            posición:"lateral" 
                        }, 
                        selección: {
                            nombre: "España",
                            seleccionador: "Luis Henrique ",
                            trofeos: 4
                        } , 
                        club: { 
                            importancia: "rotación" 
                        },
                        fisico: {
                            cualidad: ["rápido", "regateador"], 
                            tamaño: { h:173, w:55 },
                            números: [ 17, 11 ] 
                        }, 
                        apodo:"luquita", 
                        goles: [ 
                            {
                                tipo: "pierna",
                                capacidad: 24
                            } 
                        ],
                        goleador: false,
                        fecha_nacimiento: new Date("1991-07-01")
                    },
                precio: 25.72
            }
        ],
        vendedor: "Real Madrid",
        comprador: "Paris Saint Germain",
        fechaFichaje: new Date("2021-06-31")
    },    
    {   
        idFichaje: 2,
        items: [ 
            {
                idjugador: 78,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "real betis", 
                            nacionalidad:"frances", 
                            trofeos: ["liga","copa", "supercopa"], 
                            nombre:"nabil fekir" 
                        }, 
                        detalles: {
                            edad:28, 
                            posición:"mediapunta" 
                        }, 
                        selección: {
                            nombre: "Francia",
                            seleccionador: "Didier Deschamps ",
                            trofeos: 3
                        } , 
                        club: { 
                            importancia: "clave" 
                        },
                        fisico: {
                            cualidad: ["habilidoso", "regateador"], 
                            tamaño: { h:172, w:65 },
                            números: [  10, 8 ] 
                        }, 
                        apodo:"fekir", 
                        goles: [
                            { 
                                tipo:"cabeza", 
                                capacidad:14 
                            }, 
                            {
                                tipo: "pierna",
                                capacidad: 67
                            } 
                        ],
                        goleador: true,
                        fecha_nacimiento: new Date("1993-07-18")
                    },
                precio: 80.00
            },
            {
                idjugador: 38,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "real betis", 
                            nacionalidad:"español", 
                            trofeos: ["copa", "uefa"], 
                            nombre:"alex moreno" 
                        }, 
                        detalles: {
                            edad:26, 
                            posición:"lateral" 
                        }, 
                        selección: {
                            nombre: "españa",
                            seleccionador: "luis henrique ",
                            trofeos: 0
                        } , 
                        club: { 
                            importancia: "importante" 
                        },
                        fisico: {
                            cualidad: ["rápido", "creativo"], 
                            tamaño: { h:169, w:57 },
                            números: [ 3, 15] 
                        }, 
                        apodo:"alex", 
                        goles: [
                            { 
                                tipo:"cabeza", 
                                capacidad:2 
                            }, 
                            {
                                tipo: "pierna",
                                capacidad: 9
                            } 
                        ],
                        goleador: false,
                        fecha_nacimiento: new Date("1993-06-08")
                    },
                precio: 20.63
            },{
                idjugador: 94,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "real betis", 
                            nacionalidad:"español", 
                            trofeos: ["liga","copa"], 
                            nombre:"sergio canales" 
                        }, 
                        detalles: {
                            edad:30, 
                            posición:"mediocentro" 
                        }, 
                        selección: {
                            nombre: "españa",
                            seleccionador: "luis henrique ",
                            trofeos: 1
                        } , 
                        club: { 
                            importancia: "clave" 
                        },
                        fisico: {
                            cualidad: ["habilidoso", "pasador"], 
                            tamaño: { h:182, w:62 },
                            números: [  10, 6 ] 
                        }, 
                        apodo:"canales", 
                        goles: [
                            {
                                tipo: "pierna",
                                capacidad: 27
                            } 
                        ],
                        goleador: false,
                        fecha_nacimiento: new Date("1991-02-16")
                    },
                precio: 65.05
            }
        ],
        vendedor: "real betis",
        comprador: "f.c barcelona",
        fechaFichaje: new Date("2021-08-24")
    },
    {idFichaje: 3,
        items: [ 
            {
                idjugador: 56,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "paris saint germain", 
                            nacionalidad:"argentino", 
                            trofeos: ["liga", "champions", "copaamerica",], 
                            nombre:"lionel messi " 
                        }, 
                        detalles: {
                            edad:34, 
                            posición:"delantero" 
                        }, 
                        selección: {
                            nombre: "Argentina",
                            seleccionador: "Lionel scaloni ",
                            trofeos: 1
                        } , 
                        club: { 
                            importancia: "clave" 
                        },
                        fisico: {
                            cualidad: ["habilidoso", "creativo"], 
                            tamaño: { h:173, w:61 },
                            números: [  10, 30,19 ] 
                        }, 
                        apodo:"la pulga", 
                        goles: [
                            { 
                                tipo:"cabeza", 
                                capacidad:31 
                            }, 
                            {
                                tipo: "pierna",
                                capacidad: 456
                            } 
                        ],
                        goleador: true,
                        fecha_nacimiento: new Date("1987-06-24")
                    },
                precio: 100.03
            },
            {
                idjugador: 93,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "paris saint germain", 
                            nacionalidad:"brasileño", 
                            trofeos: ["liga", "champions", "copa", "jjoo"], 
                            nombre:"neymar" 
                        }, 
                        detalles: {
                            edad:30, 
                            posición:"extremo" 
                        }, 
                        selección: {
                            nombre: "Brasil",
                            seleccionador: "tite",
                            trofeos: 3
                        } , 
                        club: { 
                            importancia: "clave" 
                        },
                        fisico: {
                            cualidad: ["rápido", "regateador"], 
                            tamaño: { h:180, w:59 },
                            números: [ 10, 11 ] 
                        }, 
                        apodo:"ney", 
                        goles: [ 
                            {
                                tipo: "cabeza",
                                capacidad: 37
                            }, 
                            {
                                tipo: "pierna",
                                capacidad: 178
                            }  
                        ],
                        goleador: true,
                        fecha_nacimiento: new Date("1992-02-05")
                    },
                precio: 90.05
            }
        ],
        vendedor: "Paris Saint Germain",
        comprador: "F.C Barcelona",
        fechaFichaje: new Date("2022-01-01")
    },
    {idFichaje: 4,
        items: [ 
            {
                idjugador: 46,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "manchester city", 
                            nacionalidad:"belga", 
                            trofeos: ["premier", "copa", "facup",], 
                            nombre:"kevin de bruyne " 
                        }, 
                        detalles: {
                            edad:30, 
                            posición:"mediapunta" 
                        }, 
                        selección: {
                            nombre: "Bélgica",
                            seleccionador: "Roberto Martínez ",
                            trofeos: 2
                        } , 
                        club: { 
                            importancia: "clave" 
                        },
                        fisico: {
                            cualidad: ["pasador", "creativo"], 
                            tamaño: { h:177, w:63 },
                            números: [  17,10 ] 
                        }, 
                        apodo:"de bruyne", 
                        goles: [
                            { 
                                tipo:"cabeza", 
                                capacidad:2 
                            }, 
                            {
                                tipo: "pierna",
                                capacidad: 26
                            } 
                        ],
                        goleador: false,
                        fecha_nacimiento: new Date("1991-06-28")
                    },
                precio: 83.05
            }
        ],
        vendedor: "Manchester City",
        comprador: "Liverpool",
        fechaFichaje: new Date("2020-08-23")
    }])




db.fichajes.updateOne(
    {
        idVenta: 4
    },
    {
        $push: {
            items:{
                idjugador: 40,
                caracteristicas: 
                    {
                        información: { 
                            equipo: "manchester city", 
                            nacionalidad:"portugal", 
                            trofeos: ["premier", "copa", "facup","eurocopa"], 
                            nombre:"ruben diaz" 
                        }, 
                        detalles: {
                            edad:24, 
                            posición:"central" 
                        }, 
                        selección: {
                            nombre: "portugal",
                            seleccionador: "Manuel costa ",
                            trofeos: 1
                        } , 
                        club: { 
                            importancia: "clave" 
                        },
                        fisico: {
                            cualidad: ["rapido", "muro"], 
                            tamaño: { h:187, w:65 },
                            números: [  3,4 ] 
                        }, 
                        apodo:"de bruyne", 
                        goles: [
                            { 
                                tipo:"cabeza", 
                                capacidad:2 
                            }
                        ],
                        goleador: false,
                        fecha_nacimiento: new Date("1997-05-14")
                    },
                precio: 83.05
            }
        }
    }
)
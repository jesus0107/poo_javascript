class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }

    agregarIntegrante(integrante) {
        const isExists = this.integrantes.find(integrantes => {
            return integrantes.instrumento === "Bateria";
        });

        if(integrante.instrumento === "Bateria" ){
            if (isExists){
                console.log("Lo sineto ya existe un baterista");
                return;
            }
        }
        this.integrantes.push(integrante)
    }
}
//Crear clase Integrante
class Integrante {
    constructor({
        nombre,
        edad,
        instrumento
    }){
        this.nombre = nombre;
        this.edad = edad;
        this.instrumento = instrumento
    }
}

const data = {
    nombre: "Panda",
    generos: ["Rock", "Punk"]
}

const myBand = new Banda(data)
console.log(myBand)

const dataJesus = {
    nombre: "Jesus",
    edad: 28,
    instrumento: "Guitarra"
}
const dataMiguel = {
    nombre:"Mike",
    edad: 29,
    instrumento: "Bateria"
}
const dataLuis = {
    nombre:"Luis",
    edad: 25,
    instrumento: "Bateria"
}
const jesus = new Integrante(dataJesus) 
const miguel = new Integrante(dataMiguel)
const luis = new Integrante(dataLuis)

myBand.agregarIntegrante(jesus) // ok 
myBand.agregarIntegrante(luis) // ok
myBand.agregarIntegrante(miguel) // Lo sineto ya existe un baterista

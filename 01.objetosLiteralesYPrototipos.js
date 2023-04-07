// ------ Primer Objeto literal -------

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Definitiva de HTML",
        "Practico de HTML"
    ],
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso)
    }

};

// Que natalia apruebe otro curso
natalia.cursosAprobados.push("Basico de Javascript")
natalia.aprobarCurso("Otro cursos")

console.log(natalia.cursosAprobados)

// ------ Creacion de Prototipo --------

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (curso) {
    this.cursosAprobados.push(curso)
}

const jesus = new Student("Jesus", 28, ["Basico javascript", "Python"])
console.log(jesus)
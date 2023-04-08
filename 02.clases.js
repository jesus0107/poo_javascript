class Student{
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const jesus = new Student("Jesus", 28, ["POO javascript", "Python"]);
const martha = new Student("Martha", 27, ["Marketing", "Ingles A1"])

console.log(jesus.cursosAprobados, martha.cursosAprobados)


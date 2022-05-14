// Objeto exemplo 

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// // Função que adiciona chave turno a lesson2

// const addTurnL2 = (object, key, value) => {
//     object[key] = value;
// };
// addTurnL2(lesson2, 'Turno', 'noite');

// console.log(lesson2)

// // Função que mostra as chaves do objeto 

// const size = (object) => {
//     let sizeObj = Object.keys(object)
//     return sizeObj;
// }

// console.log(size(lesson1))

// // Função mostra os valores da chaves dos objetos 

// const value = (object) => {
//     let valueObj = Object.values(object)
//     return valueObj;
// }

// console.log(value(lesson1))

 // Função cria um objeto contendo todos os anteriores 
 
 const creatAll = (obj1, obj2, obj3) => {
     const allLessons = Object.assign({}, {obj1, obj2, obj3});
      console.log(allLessons);
 }
 creatAll(lesson1, lesson2, lesson3)




// 1. Добавление только чётных чисел в новый массив:
// Дан массив с числами. Используя forEach() и if, добавь в новый массив только чётные числа.
// Исходный массив:
// let numbers = [1, 2, 3, 4, 5, 6];


// const numbers = [1, 2, 3, 4, 5, 6];
// const result = [];
// numbers.forEach(item => {
//    if(item % 2 === 0 ){
//     result.push(item);
//    }
// })
// console.log(result)







//  2. Добавление только строк длиннее 5 символов:
// Дан массив строк. Используя forEach() и условие if, добавь в новый массив только строки длиной более 5 символов.
// Исходный массив:
// let strings = ["apple", "banana", "cherry", "date"];


// const strings = ["apple", "banana", "cherry", "date"];
// const result = [];
// strings.forEach(item => {
//    if(item.length > 5 ){
//     result.push(item);
//    }
// })
// console.log(result)






//  3. Копирование элементов, которые начинаются с гласной:
// Дан массив строк. Используя forEach() и if, добавь в новый массив только те строки, которые начинаются с гласной.
// Исходный массив:
// let words = ["apple", "pear", "orange", "grape", "apricot"];


// const words = ["apple", "pear", "orange", "grape", "apricot"]
// const glas = ['a', 'e', 'i', 'o', 'u']
// const result = [];
// words.forEach(item => {
//    if(glas.includes(item[0].toLowerCase() )){
//     result.push(item);
//    }
// })
// console.log(result)






//  4. Фильтрация массива по положительным и отрицательным числам:
// Дан массив чисел. Раздели массив на два: положительные числа в одном массиве и отрицательные в другом, используя forEach() и if/else.
// Исходный массив:
// let numbers = [-5, 3, -2, 8, 0, -1, 7];


// const numbers = [-5, 3, -2, 8, 0, -1, 7];
// const result1 = [];
// const result2 = [];
// numbers.forEach(item => {
//     if (item > 0) {
//         result1.push(item);
//     }
//     else if (item < 0) {
//         result2.push(item);
//     }
// })
// console.log(result1)
// console.log(result2)



// ????????????????????????????????????????????????????????????????????????????????
//  5. Добавление уникальных значений:
// Дан массив с повторяющимися числами. Используя forEach() и if, добавь в новый массив только уникальные значения.
// Исходный массив:
// let numbers = [1, 2, 3, 2, 4, 1, 5];


// const numbers = [1, 2, 3, 2, 4, 1, 5];
// const result = [];
// numbers.forEach(item => {
//    if( numbers.includes(item) ){
//     result.pop(item);
    
//    }
//    else if (item !=item ){
//     result.push(item);
//    }

// })
// console.log(result)





// ?????????????????????????????????????????????????????????????????????????????
//  6. Создание массива строк, которые не содержат цифры:
// Дан массив строк. Используя forEach() и if, добавь в новый массив только те строки, которые не содержат цифры.
// Исходный массив:
// let strings = ["hello", "world1", "test", "abc123", "example"];



// const strings = ["hello", "world1", "test", "abc123", "example"]
// const result = [];
// strings.forEach(item => {
//    if( strings === String + Number){
//     result.pop(item);
    
//    }
//    else {
//     result.push(item);
//    }

// })
// console.log(result)



//  7. Добавление объектов с определённым свойством:
// Дан массив объектов. Используя forEach() и if, добавь в новый массив только те объекты, которые содержат определённое свойство.
// Исходный массив:
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie" },
//   { name: "Dave", age: 22 }
// ];


// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie" },
//   { name: "Dave", age: 22 }
// ];
// const result = [];
// users.forEach(item => {
//    if( item.age != undefined ){
//     result.push(item);
    
//    }
// })
// console.log(result)








//  8. Фильтрация по рейтингу:
// Дан массив объектов с фильмами, у каждого есть поле “рейтинг”. Используя forEach() и if, добавь в новый массив только фильмы с рейтингом выше 7.
// Исходный массив:
// let movies = [
//   { title: "Movie 1", rating: 6.5 },
//   { title: "Movie 2", rating: 8.3 },
//   { title: "Movie 3", rating: 7.2 },
//   { title: "Movie 4", rating: 5.8 }
// ];


// const movies = [
//   { title: "Movie 1", rating: 6.5 },
//   { title: "Movie 2", rating: 8.3 },
//   { title: "Movie 3", rating: 7.2 },
//   { title: "Movie 4", rating: 5.8 }
// ];
// const result = [];
// movies.forEach(item => {
//    if( item.rating > 7 ){
//     result.push(item);
//    }
// })
// console.log(result)







//  9. Добавление слов с нечетным количеством букв:
// Дан массив слов. Используя forEach() и if, добавь в новый массив только те слова, у которых нечетное количество букв.
// Исходный массив:
// let words = ["one", "two", "three", "four", "five"];


// const words = ["one", "two", "three", "four", "five"];
// const result = [];
// words.forEach(item => {
//    if( item.length % 2 === 0 ){
//     result.push(item);
//    }
// })
// console.log(result)








//  10. Добавление чисел в два массива по условию:
// Дан массив чисел. Используя forEach() и if/else, раздели их на два массива: числа меньше 10 в один, а числа больше или равны 10 — в другой.
// Исходный массив:
// let numbers = [4, 12, 7, 19, 3, 10];


// let numbers = [4, 12, 7, 19, 3, 10];
// const result1 = [];
// const result2 = [];
// numbers.forEach(item => {
//    if( item < 10){
//     result1.push(item);
//    }
//    else if( item >= 10){
//     result2.push(item);
//    }
// })
// console.log(result1)
// console.log(result2)
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

'use strict';


let numberOfFilms;


function start() {

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let FilmsWatched = prompt('Один из последних просмотренных фильмов?'),
            RateIt = +prompt("На сколько оцените его?");

        if (FilmsWatched != null && RateIt != null && FilmsWatched != "" && RateIt != "" && FilmsWatched.length < 50) {
            personalMovieDB.movies[FilmsWatched] = RateIt;
            console.log('done')
        } else {
            i--
            console.log('err');
        }
    }

}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersonalLevel();


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}
writeYourGenres()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

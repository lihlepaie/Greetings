// var button = document.querySelector('.greet');
// var textArea = document.querySelector('.myText');
// var helloList = document.querySelector('.output');
// var click = document.querySelector('.ResetMe');
// var language = document.querySelector('.checked');
// var frontCounter = document.querySelector('.frontCounter');
//
// if (localStorage.getItem('namesGreeted')) {
//
//     console.log(localStorage.getItem('namesGreeted'))
//
//     var namesGreeted = JSON.parse(localStorage.getItem('namesGreeted'));
//
//
// } else {
//
//     var namesGreeted = {};
//
// }
//
// if (localStorage.getItem('greetingsCounter')) {
//
//     var greetingsCounter = parseInt(localStorage.getItem('greetingsCounter'));
//
//     frontCounter.innerHTML = greetingsCounter;
//
// } else {
//
//     var greetingsCounter = 0
//
//     frontCounter.innerHTML = greetingsCounter;
//
// }
//
//
// function myFunction() {
//
//     var userName = document.getElementById('yourName').value;
//
//     if (namesGreeted[userName] === undefined) {
//
//         greetingsCounter++;
//
//         namesGreeted[userName] = 0;
//
//         userName = true;
//
//         frontCounter.innerHTML = greetingsCounter;
//         console.log(JSON.stringify(greetingsCounter));
//         localStorage.setItem('greetingsCounter', parseInt(greetingsCounter));
//
//         console.log(JSON.stringify(namesGreeted));
//
//         localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));
//
//     }
// }
//
// function resetFunction() {
//     greetingsCounter = 0;
//     frontCounter.innerHTML = greetingsCounter;
// }
//
// var greetPerson = function() {
//     var pasie = document.querySelector("input[name='language']:checked");
//
//     helloList.innerHTML = pasie.value + ' ' + textArea.value;
//
//
// }
// // button.addEventListener('click', greetPerson);
// // click.addEventListener('click', function() {
// //     helloList.innerHTML = '';

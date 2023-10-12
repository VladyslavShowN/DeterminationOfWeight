// // window.onload = function () {
//     var wieght = document.getElementByClassName("wieght");
//     var height = document.getElementByClassName("height");
//     var text = document.getElementsByClassName("result_text");
// // }
// function Clicked() {

// }
// window.onload = function () {
//     var button = document.getElementByClassName("mainButton");
//     var wieght = document.getElementByClassName("wieght");
//     var height = document.getElementByClassName("height");
//     var text = document.getElementsByClassName("result_text");
//     button.onclick = function (event) {
//         text.innerHTML = 'авіповаішоп'
//     };
// };
window.onload = function () {
    var text1 = document.getElementById("massBody");
    var button = document.getElementById("mainButton");
    var text2 = document.getElementById("heightBody");
    var result = document.getElementById("result__item");
    button.onclick = function (event) {
        result.innerHTML = ''
        var mass = text1.value;
        var height = text2.value / 100;
        normal = mass / (height * height)
        if (!normal) {
            result.innerHTML += 'Спочатку заповніть відповідні поля.'
        } else if (normal) {
            console.log(normal)
            if(normal <= 25 && normal > 0){
                result.innerHTML = 'Нормальна вага'
            } else if(normal <= 30  && normal > 25){
                result.innerHTML = 'Надмірна вага'
            } else if(normal > 30){
                result.innerHTML = 'Ожиріння'
            }
        }
    };
};
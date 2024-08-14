// задача 1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}


console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));


//задача 2
const startInterval = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}
startInterval();

//задача 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;

        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

// задача 4
const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('click', function() {
    if (colorBox.classList.contains('box-background')) {
        colorBox.classList.remove('box-background');
    } else {
        colorBox.classList.add('box-background');
    }
});

//задача 5
var xhr = new XMLHttpRequest();
xhr.open('GET', 'URL_ВАШЕГО_СЕРВЕРА', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            var response = JSON.parse(xhr.responseText);

            console.log(response);
        } catch (e) {
            console.error('Ошибка при парсинге JSON:', e);
        }
    } else {
        console.error('Ошибка при запросе. Статус:', xhr.status);
    }
};
xhr.onerror = function () {
    console.error('Ошибка запроса.');
};
xhr.send();
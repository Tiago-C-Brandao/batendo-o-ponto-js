let input = document.querySelectorAll('#value');
let pedCheck = document.querySelector('#checkPed');
let pedForm = document.querySelector('form.ped');
let englishCheck = document.querySelector('#checkEnglish');
let englishForm = document.querySelector('form.english');

pedCheck.addEventListener('click', (e) => {
    if(pedForm.style.display != 'flex') {
        pedForm.style.display = 'flex';
        return;
    }
    pedForm.style.display = 'none';
})

englishCheck.addEventListener('click', (e) => {
    if(englishForm.style.display != 'flex') {
        englishForm.style.display = 'flex';
        return;
    }
    englishForm.style.display = 'none';
})

input[3].addEventListener('click', (e) => {
    input[3].value = ' ';
})

input[4].addEventListener('click', (e) => {
    input[4].value = ' ';
})

function result() {
    let totalMinutes = 0
    for(var x = 0; x < input.length; x++) {
        a = parseInt(input[x].value)
        if(x == 0) {
            totalMinutes += a * 60    
        } else {
            totalMinutes += a
        }
    }

    hour = parseInt((480 + totalMinutes) / 60)
    minutes = parseInt((480 + totalMinutes) % 60)
    alert(hour + ":" + minutes)
}
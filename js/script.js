let enterHour = document.querySelector('#enterHour');
let enterMinute = document.querySelector('#enterMinute');
let lunchMinute = document.querySelector('#lunch');
let pedCheck = document.querySelector('#checkPed');
let pedMinute = document.querySelector('#ped')
let pedForm = document.querySelector('form.ped');
let englishCheck = document.querySelector('#checkEnglish');
let englishMinute = document.querySelector('#english')
let englishForm = document.querySelector('form.english');
let btnResult = document.querySelector('#btnResult');

enterHour.addEventListener('keypress', (e) => {
    enterMinute.focus()
});

enterMinute.addEventListener('keypress', (e) => {
    lunchMinute.focus()
})

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

pedMinute.addEventListener('click', (e) => {
    pedMinute.value = ' ';
})

englishMinute.addEventListener('click', (e) => {
    englishMinute.value = ' ';
})

btnResult.addEventListener('click', (e) => {
    result()
})

function result(){
    hourConvert = parseInt(enterHour.value * 60)
    minuteConvert = parseInt(enterMinute.value)
    lunchConvert = parseInt(lunchMinute.value)
    pedConvert = parseInt(pedMinute.value)
    englishConvert = parseInt(englishMinute.value)
    totalMinutes = hourConvert + minuteConvert + lunchConvert + pedConvert + englishConvert
    
    convertHour = (totalMinutes + 480) / 60
    finalMinute = (totalMinutes + 480) % 60

    alert('Você precisará largar às ' + parseInt(convertHour) + ':' + parseInt(finalMinute))
}
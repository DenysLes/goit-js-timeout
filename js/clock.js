const day = document.querySelector(".date-day");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const date = document.querySelector(".date");
const digitalClock = document.querySelector('.digital-clock');

const arrowSeconds = document.querySelector('.clock-seconds__arrow');
const arrowMinutes = document.querySelector('.clock-minutes__arrow');
const arrowHours = document.querySelector('.clock-hours__arrow');

const nameOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень','Чевень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П"ятниця', 'Субота' ];

setInterval(() => {
    const currentTime = new Date();
    const currentDay = arrDay[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = nameOfMonth[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const changeSeconds = (360 / 60) * currentSeconds;
    const changeMinutes = (360 / 60) * currentMinutes;
    const changeHours = (360 / 12 ) * currentHour + (360 / 12 / 60 ) * currentMinutes ;
    console.log(changeSeconds);
    const formatTime = `${currentHour.toString().padStart(2, '0')} : ${currentMinutes.toString().padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`
    
   
    day.textContent = currentDay;
    date.textContent = currentDate;
    month.textContent = currentMonth;
    year.textContent = currentYear;

    digitalClock.textContent = `Поточний час : ${formatTime}`;
    
    arrowSeconds.style.transform = `rotate(${changeSeconds}deg)`;
    arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
    arrowHours.style.transform = `rotate(${changeHours}deg`;
}, 1000);


const currentTime = new Date();


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysTime = document.querySelector('[data-days]');
const hoursTime = document.querySelector('[data-hours]');
const minutesTime = document.querySelector('[data-minutes]');
const secondsTime = document.querySelector('[data-seconds]');

btnStart.disabled = true;
const currentDate = new Date();


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d H:i',

  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      btnStart.addEventListener('click', () => {
       const timerId = setInterval(() => {
        const currentDate = new Date();
          const ms = selectedDates[0].getTime() - currentDate.getTime();
          daysTime.textContent = addLeadingZero(convertMs(ms).days);
          hoursTime.textContent = addLeadingZero(convertMs(ms).hours);
          minutesTime.textContent = addLeadingZero(convertMs(ms).minutes);
          secondsTime.textContent = addLeadingZero(convertMs(ms).seconds);
          if (ms<0) {
            clearInterval(timerId);
            daysTime.textContent = "00";
          hoursTime.textContent = "00";
          minutesTime.textContent = "00"
          secondsTime.textContent = "00"
          }
        }, 1000);
      });
    }
  },
};

flatpickr(dateTime, options);


function convertMs(ms) {
 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };
  function addLeadingZero(number) {
    return ('0' + number).slice(-2);
  }
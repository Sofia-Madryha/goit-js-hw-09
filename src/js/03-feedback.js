const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
const form = document.querySelector('form');

const VALUE = 'feedback-form-state';

form.addEventListener('input', throttle(getData,500));
const storageData = JSON.parse(localStorage.getItem(VALUE));
if (storageData){
    form.elements.email.value = storageData.email;
    form.elements.message.value = storageData.message;
}
function getData() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(VALUE, JSON.stringify(data));
}

form.addEventListener("submit", formSubmit)
function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;
   if (email.value === "" || message.value === "") {
       alert("Please fill in all the fields!");
       
      }
console.log(JSON.parse(localStorage.getItem(VALUE)));
form.reset();
localStorage.removeItem(VALUE)
}

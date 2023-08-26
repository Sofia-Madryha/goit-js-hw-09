import Notiflix from 'notiflix';

const form = document.querySelector('form');


form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);

for (let i = 1; i <= amount; i++) {
    createPromise(i, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
promise
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateInpute();
function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = refs.email.value;
  formData.message = refs.textarea.value;
  event.currentTarget.reset();
  console.log(formData);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInpute() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    console.log(savedData);
    const data = JSON.parse(savedData);
    console.log(data);
    refs.email.value = data.email;
    refs.textarea.value = data.message;
  }
}

import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
populateTextarea();
function onFormInput(e) {
  const formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  console.log(formData);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  evt.preventDefault();
  console.log('Відправити');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    refs.form.value = savedData;
  }
}

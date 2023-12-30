const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', getInputsValue);
populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}
function getInputsValue(event) {
  const inputValue = input.value.trim();
  const textareaValue = textarea.value.trim();
  const userInfo = {
    email: inputValue,
    massage: textareaValue,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
}
function populateTextarea() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInfo) {
    input.value = savedInfo.email;
    textarea.value = savedInfo.massage;
  }
}

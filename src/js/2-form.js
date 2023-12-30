const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', saveUserInfo);
populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = form.elements.email.value.trim();
  const textareaValue = form.elements.message.value.trim();
  if (inputValue && textareaValue) {
    console.log({ email: inputValue, message: textareaValue });
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  } else {
    alert('Please fill in all required fields, before sending');
  }
}
function saveUserInfo(event) {
  const inputValue = form.elements.email.value.trim();
  const textareaValue = form.elements.message.value.trim();
  const userInfo = {
    email: inputValue,
    message: textareaValue,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
}
function populateTextarea() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  form.elements.email.value = savedInfo.email || '';
  form.elements.message.value = savedInfo.message || '';
}

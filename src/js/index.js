import { input, container, listCountry } from './ref';
import API from './api';
import debounce from 'lodash.debounce';
import parcelData from './data';
import '../css/styles.css';

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(getCountry, DEBOUNCE_DELAY));

function getCountry({ target: { value } }) {
  const inputValue = value.trim();
  if (inputValue === '') {
    container.innerHTML = '';
    listCountry.innerHTML = '';
    return;
  }

  API.fetchCountry(inputValue).then(data => parcelData(data));
}

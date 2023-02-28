import { container, listCountry } from './ref';
import { countryCard } from './card';
import { flagCart } from './flag';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function parcelData(data) {
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    clear();
  } else if (data.length < 10) {
    container.innerHTML = '';
    listCountry.innerHTML = flagCart(data);
    if (data.length === 1) {
      container.innerHTML = countryCard(data);
    }
  } else {
    clear();
  }
}

const clear = () => {
  container.innerHTML = '';
  listCountry.innerHTML = '';
};

export default parcelData;

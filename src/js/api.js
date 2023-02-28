import { Notify } from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1/name';

function fetchCountry(country) {
  return fetch(
    `${BASE_URL}/${country}?name,capital,population,flags,languages`
  ).then(response => {
    if (response.status === 404) {
      Notify.failure('Oops, there is no country with that name');
    }

    return response.json();
  });
}

export default { fetchCountry };

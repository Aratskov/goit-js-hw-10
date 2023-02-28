export const countryCard = country => {
  return country
    .map(
      ({ capital, population, languages }) =>
        `<div>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages)}</p>
        </div>`
    )
    .join('');
};

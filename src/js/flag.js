export const flagCart = country => {
  return country
    .map(
      ({ name, flags }) =>
        `<li>
          <img src="${flags.svg}" alt="${name.official}" width="60" height="45">${name.official}
          </li>`
    )
    .join('');
};

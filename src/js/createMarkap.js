export function createMarkupList(countires) {
  return countires
    .map(
      ({ name, flags }) =>
        `<li class="country-list__item"><img src="${flags.png}" alt="${name.official}" width="60" height="40"><h3 class="country-list__name">${name.official}</h3></li>`
    )
    .join('');
}

export function createMarkupInfoList(countires) {
  return countires
    .map(
      ({ capital, population, languages }) => `
<ul class="country-info__list list">
  <li class="country-info__item">Capital: ${capital}</li>
  <li class="country-info__item">Population: ${population}</li>
  <li class="country-info__item">Languages: ${Object.values(
              languages
            ).join(', ')}</li>
</ul>
    `
    )
    .join('');
}

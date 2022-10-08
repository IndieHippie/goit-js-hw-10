export function createMarkupList(countires) {
  return countires
    .map(
      ({ name, flags }) =>
        `<li><img src="${flags.png}" alt="${name.official}" width="60" height="40">${name.official}</li>`
    )
    .join('');
}

export function createMarkupInfoList(countires) {
  return countires
    .map(
      ({ capital, population, languages }) => `
<ul class="country-info__list">
  <li class="country-info__item">${capital}</li>
  <li class="country-info__item">${population}</li>
  <li class="country-info__item">${Object.values(
              languages
            ).join(', ')}</li>
</ul>
    `
    )
    .join('');
}

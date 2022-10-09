import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { createMarkupList } from './js/createMarkap';
import { createMarkupInfoList } from './js/createMarkap';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const infoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch() {
  const countryName = inputRef.value.trim();
  listRef.innerHTML = '';
  infoRef.innerHTML = '';

  if (!countryName) {
    return;
  }
  fetchCountries(countryName)
    .then(countries => {
      console.log(countries);
      listRef.innerHTML = '';
      infoRef.innerHTML = '';
      if (countries.length === 1) {
        listRef.insertAdjacentHTML('beforeend', createMarkupList(countries));
        infoRef.insertAdjacentHTML(
          'beforeend',
          createMarkupInfoList(countries)
        );
      } else if (!(countries.length > 10)) {
        listRef.insertAdjacentHTML('beforeend', createMarkupList(countries));
      } else {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(() => {
      Notify.failure('Oops, there is no country with that name');
    });
}

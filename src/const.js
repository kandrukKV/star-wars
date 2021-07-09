export const AppRoute = {
  MAIN: `/`,
  FAVORITES: `/favorites`
};

export const SearchOption = {
  ALL: `All`,
  MALE: `Male`,
  FEMALE: `Female`
};

export const SearchOptions = [
  {value: SearchOption.ALL, label: `All`},
  {value: SearchOption.MALE, label: `Male`},
  {value: SearchOption.FEMALE, label: `Female`},
];

export const GET_PEOPLE_URL = `https://swapi.dev/api/people/`;

export const BASE_IMG_URL = `https://starwars-visualguide.com/assets/img/characters/`;

export const REG_EXP_FOR_ID = /\/([0-9]*)\/$/;

export const LOCAL_STORAGE_KEY = `StarWars2`;

export const NUMBER_OF_ITEMS_IN_CARD_LIST = 9;

export const GenderValueOfServer = {
  MALE: `male`,
  FEMALE: `female`
};

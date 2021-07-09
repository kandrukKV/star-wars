import {REG_EXP_FOR_ID, SearchOption, GenderValueOfServer} from "./const";

export const getHeroId = (heroUrl) => {
  return heroUrl.match(REG_EXP_FOR_ID)[1];
};

export const transformHeroesToApp = (heroes, favoriteHeroes) => {
  return heroes.map((hero) => {
    const id = getHeroId(hero.url);
    const flag = favoriteHeroes.findIndex((item) => item.id === id) !== -1;

    return {
      id,
      name: hero.name,
      gender: hero.gender,
      isFavorite: flag
    };
  });
};

export const filterByGender = (currentGender, cards) => {
  switch (currentGender) {
    case SearchOption.MALE:
      return cards.filter((item) => item.gender === GenderValueOfServer.MALE);
    case SearchOption.FEMALE:
      return cards.filter((item) => item.gender === GenderValueOfServer.FEMALE);
    default:
      return cards;
  }
};

export const filterByName = (searchFieldValue, cards) => {
  if (searchFieldValue.length === 0) {
    return cards;
  }
  return cards.filter((item) => item.name.toUpperCase().indexOf(searchFieldValue.toUpperCase()) > -1);
};

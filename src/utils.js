import {REG_EXP_FOR_ID, SearchOption, GenderValueOfServer} from "./const";

export const getHeroId = (heroUrl) => {
  return heroUrl.match(REG_EXP_FOR_ID)[1];
};

export const transformHeroesToApp = (heroes, favoriteHeroes) => {
  return heroes.map((hero) => {
    const id = getHeroId(hero.url);
    const isFavorite = favoriteHeroes.findIndex((item) => item === id) !== -1;

    return {
      id,
      name: hero.name,
      gender: hero.gender,
      isFavorite
    };
  });
};

export const updateCardList = (cards, favoriteList) => {
  return cards.map((card) => {
    const isFavorite = favoriteList.findIndex((item) => item === card.id) !== -1;
    return {
      ...card,
      isFavorite
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

export const getFavoriteHeroes = (cards) => {
  if (!cards) {
    return [];
  }
  return cards.filter((card) => card.isFavorite);
};

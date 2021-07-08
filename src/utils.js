import {REG_EXP_FOR_ID} from "./const";

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

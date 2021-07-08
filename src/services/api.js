import {GET_PEOPLE_URL, LOCAL_STORAGE_KEY} from "../const";

class Api {
  async getHeroes() {
    const res = await fetch(GET_PEOPLE_URL);
    if (!res.ok) {
      throw new Error(`Ошибка сервера `, res.status);
    }
    return await res.json();
  }

  getFavoriteHeroes() {
    const cards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return cards ? JSON.parse(cards) : [];
  }

  addFavoriteHeroes(hero) {
    let cards = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cards) {
      cards = JSON.parse(cards);
      const index = cards.findIndex((item) => item.id === hero.id);
      if (index > -1) {
        cards.splice(index, 1);
      } else {
        cards.push({...hero, isFavorite: true});
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([hero]));
    }
    return this.getFavoriteHeroes();
  }
}

export default Api;


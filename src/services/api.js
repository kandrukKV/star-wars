import {GET_PEOPLE_URL, LOCAL_STORAGE_KEY} from "../const";

class Api {
  async getAllHeroes() {
    const tempArr = [];
    const res = await fetch(GET_PEOPLE_URL);
    if (!res.ok) {
      throw new Error(`Ошибка сервера `, res.status);
    }
    const data = await res.json();
    const pagesCount = Math.ceil(data.count / data.results.length);

    let urls = Array.from({length: pagesCount}, (v, i) => i + 1);
    urls = urls.map((url) => `${GET_PEOPLE_URL}?page=${url}`);

    const promises = urls.map((url) => fetch(url));

    const allResponses = await Promise.all(promises);

    for (const response of allResponses) {
      const temp = await response.json();
      await tempArr.push(temp.results);
    }
    return tempArr;
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


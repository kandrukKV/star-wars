import {GET_PEOPLE_URL} from "../const";

class Api {
  async getPeople() {
    const res = await fetch(GET_PEOPLE_URL);
    if (!res.ok) {
      throw new Error(`Ошибка сервера `, res.status);
    }
    return await res.json();
  }
}

export default Api;


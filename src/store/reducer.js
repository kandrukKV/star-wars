import {SearchOption} from "../const";
import {ActionTypes} from "./actions";

const initialState = {
  sexFilterValue: SearchOption.ALL,
  searchFieldValue: ``,
  cards: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEX_FILTER_VALUE:
      return {
        ...state,
        sexFilterValue: action.payload
      };
    case ActionTypes.SET_SEARCH_FIELD_VALUE:
      return {
        ...state,
        searchFieldValue: action.payload
      };
    case ActionTypes.SET_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case ActionTypes.CHANGE_FAVORITE:
      const index = state.cards.findIndex((item) => item.id === action.payload);
      const newCard = {
        ...state.cards[index],
        isFavorite: !state.cards[index].isFavorite
      };
      return {
        ...state,
        cards: [
          ...state.cards.slice(0, index),
          newCard,
          ...state.cards.slice(index + 1)
        ]
      };
    default:
      return state;
  }
};

import {SearchOption} from "../const";
import {ActionTypes} from "./actions";

const initialState = {
  sexFilterValue: SearchOption.ALL,
  searchFieldValue: null,
  cards: null
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
    default:
      return state;
  }
};

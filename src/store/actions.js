export const ActionTypes = {
  SET_SEX_FILTER_VALUE: `SET_SEX_FILTER_VALUE`,
  SET_SEARCH_FIELD_VALUE: `SET_SEARCH_FIELD_VALUE`,
  SET_CARDS: `SET_CARDS`
};

export const setSexFilterValueAction = (value) => ({
  type: ActionTypes.SET_SEX_FILTER_VALUE,
  payload: value
});

export const setSearchFieldValueAction = (value) => ({
  type: ActionTypes.SET_SEARCH_FIELD_VALUE,
  payload: value
});

export const setCardsAction = (cards) => ({
  type: ActionTypes.SET_CARDS,
  payload: cards
});

const SET_ACTIVE_CATEGORY = 'filtersReducer/SET_ACTIVE_CATEGORY';
const SET_ACTIVE_SORTING = 'filtersReducer/SET_ACTIVE_SORTING';

const initialState = {
  activeCategoryId: 0,
  activeSorting: { name: 'популярности', type: 'rating' },
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategoryId: action.payload };
    case SET_ACTIVE_SORTING:
      return {
        ...state,
        activeSorting: { ...state.activeSorting, ...action.payload },
      };

    default:
      return state;
  }
};

export const setActiveCategory = (categoryId) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: categoryId,
});

export const setActiveSorting = (activeSorting) => {
  return {
    type: SET_ACTIVE_SORTING,
    payload: activeSorting,
  };
};

export default filtersReducer;

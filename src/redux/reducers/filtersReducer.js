const SET_ACTIVE_CATEGORY = 'filtersReducer/SET_ACTIVE_CATEGORY';

const initialState = {
  activeCategoryId:0
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategoryId: action.payload};

    default:
      return state;
  }
};

export const setActiveCategory = (categoryId) => ({ type: SET_ACTIVE_CATEGORY, payload:categoryId });


export default filtersReducer;

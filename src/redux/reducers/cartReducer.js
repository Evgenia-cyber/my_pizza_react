const SET_ACTIVE_CATEGORY = 'cartReducer/SET_ACTIVE_CATEGORY';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_ACTIVE_CATEGORY:
    //   return { ...state, activeCategoryId: action.payload };

    default:
      return state;
  }
};

// export const setActiveCategory = (categoryId) => ({
//   type: SET_ACTIVE_CATEGORY,
//   payload: categoryId,
// });

export default cartReducer;

const ADD_PIZZA_TO_CART = 'cartReducer/ADD_PIZZA_TO_CART';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  countPizzasInGroup: [], //[{id:5, countPizzas:1},{...},{...}]
  sortedItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      const sortedItems = [...state.items, action.pizza].reduce(
        (tmp, value) => {
          // Находим одинаковые пиццы
          const match = tmp.find((y) =>
            y.some(
              (z) =>
                z.id === value.id &&
                z.activeType === value.activeType &&
                z.activeSize === value.activeSize,
            ),
          );

          // Если такой массив есть, добавляем в него новую пиццу
          if (match) {
            match.push(value);
          } else {
            // Иначе создаем новый массив
            tmp.push([value]);
          }

          return tmp;
        },
        [],
      );
      return {
        ...state,
        items: [...state.items, action.pizza],
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.pizza.price,
        countPizzasInGroup: [
          ...state.countPizzasInGroup,
          action.countPizzasInGroupObject,
        ],
        sortedItems: sortedItems,
      };

    default:
      return state;
  }
};

export const addPizzaToCart = (pizza, countPizzasInGroupObject) => ({
  type: ADD_PIZZA_TO_CART,
  pizza,
  countPizzasInGroupObject,
});

export default cartReducer;

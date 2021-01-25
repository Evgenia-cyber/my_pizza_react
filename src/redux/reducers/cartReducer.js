const ADD_PIZZA_TO_CART = 'cartReducer/ADD_PIZZA_TO_CART';
const CLEAR_CART = 'cartReducer/CLEAR_CART';

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
        (tmp, pizzaObj) => {
          // Находим, есть ли в tmp массив с такими пиццами
          const match = tmp.find((array) =>
            array.some(
              (itemObj) =>
                itemObj.id === pizzaObj.id &&
                itemObj.activeType === pizzaObj.activeType &&
                itemObj.activeSize === pizzaObj.activeSize,
            ),
          );

          // Если такой массив есть, добавляем в него новую пиццу
          if (match) {
            match.push(pizzaObj);
          } else {
            // Иначе создаем новый массив и добавляем в него новую пиццу
            tmp.push([pizzaObj]);
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
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalCount: 0,
        totalPrice: 0,
        countPizzasInGroup: [],
        sortedItems: [],
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
export const clearCart = () => ({
  type: CLEAR_CART,
});

export default cartReducer;

const ADD_PIZZA_TO_CART = 'cartReducer/ADD_PIZZA_TO_CART';
const CLEAR_CART = 'cartReducer/CLEAR_CART';
const DELETE_GROUP_FROM_CART = 'cartReducer/DELETE_GROUP_FROM_CART';
const MINUS_ITEM = 'cartReducer/MINUS_ITEM';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  countPizzasInGroup: [], //[{id:5},{...},{...}]
  sortedItems: [], //[[{},{}],[{}]]
};

const sorted = (pizzas) => {
  return pizzas.reduce((tmp, pizzaObj) => {
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
  }, []);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      const sortedItems = sorted([...state.items, action.pizza]);
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
    case DELETE_GROUP_FROM_CART:
      const items = [
        ...state.items.filter(
          (item) =>
            item.id !== action.pizza.id ||
            item.activeSize !== action.pizza.activeSize ||
            item.activeType !== action.pizza.activeType,
        ),
      ];
      const newSortedItems = sorted(items);

      const countPizzasInGroup = [...state.countPizzasInGroup].sort(
        (item1, item2) => item1.id > item2.id,
      );
      const index = countPizzasInGroup.findIndex(
        (item) => item.id === action.pizza.id,
      );
      countPizzasInGroup.splice(index, action.count);

      return {
        ...state,
        items: items,
        totalCount: state.totalCount - action.count,
        totalPrice: state.totalPrice - action.pizza.price * action.count,
        countPizzasInGroup: countPizzasInGroup,
        sortedItems: newSortedItems,
      };

    case MINUS_ITEM:
      const newItems = [...state.items];
      const indexItem = newItems.findIndex((item) => {
        return item.id === action.pizza.id &&
          item.activeSize === action.pizza.activeSize &&
          item.activeType === action.pizza.activeType
          ? item
          : false;
      });
      newItems.splice(indexItem, 1);

      const newCountPizzasInGroup1 = state.countPizzasInGroup.filter(
        (item) => item.id === action.pizza.id,
      );
      const newCountPizzasInGroup2 = state.countPizzasInGroup.filter(
        (item) => item.id !== action.pizza.id,
      );
      newCountPizzasInGroup1.pop();

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - action.pizza.price,
        countPizzasInGroup: [
          ...newCountPizzasInGroup1,
          ...newCountPizzasInGroup2,
        ],
        sortedItems: sorted(newItems),
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
export const deleteGroupFromCart = (pizza, count) => ({
  type: DELETE_GROUP_FROM_CART,
  pizza,
  count,
});

export const minusItem = (pizza) => ({
  type: MINUS_ITEM,
  pizza,
});

export default cartReducer;

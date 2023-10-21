import {
  CONFIRMED_ORDERS_FAILURE,
  CONFIRMED_ORDERS_REQUEST,
  CONFIRMED_ORDERS_SUCCESS,
  DELETE_ORDERS_FAILURE,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELIVERED_ORDERS_FAILURE,
  DELIVERED_ORDERS_REQUEST,
  DELIVERED_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  PLACED_ORDERS_FAILURE,
  PLACED_ORDERS_REQUEST,
  PLACED_ORDERS_SUCCESS,
  SHIP_ORDERS_FAILURE,
  SHIP_ORDERS_REQUEST,
  SHIP_ORDERS_SUCCESS,
} from "./ActionType";

const initalState = {
  loading: false,
  orders: [],
  error: "",
};

export const adminOrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
    case CONFIRMED_ORDERS_REQUEST:
    case PLACED_ORDERS_REQUEST:
    case DELETE_ORDERS_REQUEST:
    case DELIVERED_ORDERS_REQUEST:
    case SHIP_ORDERS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, error: null, orders: action.payload };

    case CONFIRMED_ORDERS_SUCCESS:
      return { ...state, confirmed: action.payload, loading: false };

    case PLACED_ORDERS_SUCCESS:
      return { ...state, placed: action.payload, loading: false };

    case DELIVERED_ORDERS_SUCCESS:
      return { ...state, delivered: action.payload, loading: false };

    case SHIP_ORDERS_SUCCESS:
      return { ...state, shipped: action.payload, loading: false };

    case DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        deletedOrders: state.orders.filter((order) => order.id !== action.payload),
        loading: false,
      };

    case GET_ORDERS_FAILURE:
    case CONFIRMED_ORDERS_FAILURE:
    case PLACED_ORDERS_FAILURE:
    case DELIVERED_ORDERS_FAILURE:
    case DELETE_ORDERS_FAILURE:
    case SHIP_ORDERS_FAILURE:
      return { ...state, loading: false, error: action.payload, orders: [] };

    default:
      return initalState;
  }
};

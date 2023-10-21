import {
  CREATE_REVIEW_RAING_REQUEST,
  CREATE_REVIEW_RATING_FAILUER,
  CREATE_REVIEW_RATING_SUCCESS,
  GET_REVIEW_RATING_FAILUER,
  GET_REVIEW_RATING_REQUEST,
  GET_REVIEW_RATING_SUCCESS,
} from "./ActionType";

const initalState = {
  reviewsRatings: [],
  reviewRating: null,
  loading: false,
  error: false,
};

export const reviewsRatingsReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_REVIEW_RAING_REQUEST:
    case GET_REVIEW_RATING_REQUEST:
      return { ...state, loading: true, error: null };

    case CREATE_REVIEW_RATING_SUCCESS:
      return { ...state, loading: false, error: null, reviewRating: action.payload };

    case GET_REVIEW_RATING_SUCCESS:
      return { ...state, loading: false, error: null, reviewsRatings: action.payload };

    case CREATE_REVIEW_RATING_FAILUER:
    case GET_REVIEW_RATING_FAILUER:
      return { ...state, loading: false, error: action.payload };

    default:
      return initalState;
  }
};

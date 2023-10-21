import { api } from "../../config/ApiConfig";
import {
  CREATE_REVIEW_RAING_REQUEST,
  CREATE_REVIEW_RATING_FAILUER,
  CREATE_REVIEW_RATING_SUCCESS,
  GET_REVIEW_RATING_FAILUER,
  GET_REVIEW_RATING_REQUEST,
  GET_REVIEW_RATING_SUCCESS,
} from "./ActionType";

export const createReviewRating = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_REVIEW_RAING_REQUEST });

  try {
    const { data } = await api.post(`/api/reviews/create`, reqData);
    console.log("REVIEW", data);

    dispatch({ type: CREATE_REVIEW_RATING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_REVIEW_RATING_FAILUER, payload: error.message });
  }
};

export const getAllReviewsRatings = (reqData) => async (dispatch) => {
  dispatch({ type: GET_REVIEW_RATING_REQUEST });
  const { productId } = reqData;
  console.log("reqDATA",reqData);
  try {
    const { data } = await api.get(`/api/reviews/product/${productId}`);
    console.log("REVIEW", data);

    dispatch({ type: GET_REVIEW_RATING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_REVIEW_RATING_FAILUER, payload: error.message });
  }
};

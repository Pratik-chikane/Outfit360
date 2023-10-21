import { api } from "../../config/ApiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST } from "../Order/ActionType";
import { UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post(
      `/api/payments/${orderId}`,
      {}
    );
    console.log("((((((((((((((((9");
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
      console.log("##############");
    }
  } catch (error) {
    dispatch({type:CREATE_ORDER_FAILURE, payload:error.message})
    console.log("PAYMENTERROR",error.message);
  }
};


export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
      const { data } = await api.get(
        `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}&payment_link_id=${reqData.paymentLinkId}`
      );
      console.log("UPDATE PAYMENT DEATAILS",data);
      console.log("payment Link Id",reqData.paymentLinkId);
    } catch (error) {
      dispatch({type:UPDATE_PAYMENT_FAILURE, payload:error.message})
    }
  };
  

//import React, { useEffect } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
//import { useSelector, useDispatch } from "react-redux";
//import { useAlert } from "react-alert";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
//import { createOrder, clearErrors } from "../../actions/orderAction";

const OrderSuccess = () => {
  // const dispatch = useDispatch();
  // const alert = useAlert();
  //const { error } = useSelector((state) => state.newOrder);

  //const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  //dispatch(createOrder(order));

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, error, alert]);
};

export default OrderSuccess;

import React, { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
// import { useRouter } from "next/router";
// import { reset } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

// https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default

const Paypal = ({ cart, createOrder }) => {
  // This values are the props in the UI
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  // const dispatch = useDispatch();
  // const router = useRouter();

  // const createOrder = async (data) => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/orders", data);
  //     res.status === 201 && router.push("/orders/" + res.data._id);
  //     dispatch(reset());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AY54p7VBCmknafSeXfI7uJtmexpyK6Hl_U_F2RWtXqWNpGcYPjqHKyYUpFjmeUK97IosLMRwadcPIplS",
          components: "buttons",
          currency: "USD",
          "disable-funding": "credit,card,p24",
        }}
      >
        <ButtonWrapper currency={currency} showSpinner={false} />
      </PayPalScriptProvider>
    </>
  );
};

export default Paypal;

import { PayPalButtons } from "@paypal/react-paypal-js"
import { useEffect, useState } from "react";

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    return <PayPalButtons
        onClick={((data, actions) => {
            // Validate on button click, client or server side
            const hasAlreadyBoughtAReservation = false;

            if (hasAlreadyBoughtAReservation) {
                console.error("You already bought a reservation. Go to your account to view your future playthrough");
                return actions.reject();
            }

            return actions.resolve();
        })}
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: product.description,
                        amount: {
                            value: product.price
                        }
                    }
                ]
            })
        }}
        onApprove={props.onApprove}
        onCancel={() => {
            // Display cancel message
            console.log("Payement cancelled");
        }}
        onError={(err) => {
            console.error("PayPal Checkout onError", err);
        }}
    />;
};

export default PaypalCheckoutButton;
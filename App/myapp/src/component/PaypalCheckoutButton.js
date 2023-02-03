import { PayPalButtons } from "@paypal/react-paypal-js"
import { useEffect, useState } from "react";

const PaypalCheckoutButton = (props) => {
    const { product } = props;
    
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(false);

    const handleApprove = (orderId) => {
        // Fullfill the order

        // If response is success
        setPaidFor(true);
        // Refresh user's account

        // if the response if error
        // alert the user of the error message
        setError("Your  payement was processed successfully!");
    };

    useEffect(() => {
        // Display success page
        alert("Thank you for your purchase!");
    }, [paidFor]);

    useEffect(() => {
        // Display error message
        alert(error);
    }, [error]);

    return <PayPalButtons
        onClick={((data, actions) => {
            // Validate on button click, client or server side
            const hasAlreadyBoughtAReservation = true;

            if (hasAlreadyBoughtAReservation) {
                setError("You already bought a reservation. Go to your account to view your future playthrough");
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
        onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);

            handleApprove(data.orderID);
        }}
        onCancel={() => {
            // Display cancel message
            console.log("Payement cancelled");
        }}
        onError={(err) => {
            setError(err);
            console.error("PayPal Checkout onError", err);
        }}
    />;
};

export default PaypalCheckoutButton;
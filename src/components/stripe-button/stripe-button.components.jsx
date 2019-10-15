import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_y4QDWu4spBYUXZVNsSQHwP8R00NeUVqTcN";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothgram ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      tokens={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

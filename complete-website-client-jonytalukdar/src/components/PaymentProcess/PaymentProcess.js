import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SplitForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51IejRfD0bRJfEs6TtIuwOYhg7gnqkkab83AkaDvidJmlHLNYoQWdrZfE4Y3gYPA8s7rbEk79jdAUBgEtynO283gH00Fbu9VLEq'
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SplitForm></SplitForm>
    </Elements>
  );
};

export default ProcessPayment;

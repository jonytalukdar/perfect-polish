import React, { useEffect, useMemo, useState } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { useParams } from 'react-router';

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }));

  return options;
};

const SplitForm = () => {
  const { _id } = useParams();
  const [checkout, setCheckout] = useState([]);
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://arcane-shelf-91213.herokuapp.com/books/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckout(data);
      });
  }, []);

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    console.log('[PaymentMethod]', payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log('CardNumberElement [ready]');
          }}
          onChange={(event) => {
            console.log('CardNumberElement [change]', event);
          }}
          onBlur={() => {
            console.log('CardNumberElement [blur]');
          }}
          onFocus={() => {
            console.log('CardNumberElement [focus]');
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log('CardNumberElement [ready]');
          }}
          onChange={(event) => {
            console.log('CardNumberElement [change]', event);
          }}
          onBlur={() => {
            console.log('CardNumberElement [blur]');
          }}
          onFocus={() => {
            console.log('CardNumberElement [focus]');
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log('CardNumberElement [ready]');
          }}
          onChange={(event) => {
            console.log('CardNumberElement [change]', event);
          }}
          onBlur={() => {
            console.log('CardNumberElement [blur]');
          }}
          onFocus={() => {
            console.log('CardNumberElement [focus]');
          }}
        />
      </label>
      <br />
      {checkout.map((book) => (
        <h6>Your Services Charged Will Be {book.price}</h6>
      ))}
      <button
        className="btn btn-warning"
        style={{ backgroundColor: 'pink !important' }}
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default SplitForm;

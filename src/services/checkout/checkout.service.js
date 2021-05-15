import { host } from '../../utils/env';
import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51IquOKEdOtsN9DNi9NJRSIbOVuA0BtgynOkngkJDRWiRiAwH8gb39dQeHzwmLnom4S3hZIKeBsc0a4Jj33lieHb700w3feeeZv'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: 'POST',
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject('something went wrong processing your payment');
    }
    return res.json();
  });
};

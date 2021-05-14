import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51IquOKEdOtsN9DNi9NJRSIbOVuA0BtgynOkngkJDRWiRiAwH8gb39dQeHzwmLnom4S3hZIKeBsc0a4Jj33lieHb700w3feeeZv'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

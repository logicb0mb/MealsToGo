import axios from 'axios';
import camelize from 'camelize';
import { host, isMock } from '../../utils/env';

export const restaurantsRequest = (location) => {
  return axios
    .get(`${host}/placesNearby?location=${location}&mock=${isMock}`)
    .then((response) => {
      console.log(`Restuarant response: ${response}`);
      return response.data;
    })
    .catch((error) => console.error('error in fetching places', error));
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};

// restaurantRequest()
//   .then((result) => {
//     console.log(camelize(result));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

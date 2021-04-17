import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, FlatList, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    // backgroundColor: 'green',
  },
})``;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        //   horizontal
      />
    </SafeArea>
  );
};

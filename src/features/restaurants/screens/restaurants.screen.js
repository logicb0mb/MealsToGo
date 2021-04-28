import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, FlatList, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import LottieLoading from '../../../components/utility/lottie-loading.component';

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
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && <LottieLoading />}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          //   console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        //   horizontal
      />
    </SafeArea>
  );
};

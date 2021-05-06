import React, { useContext, useState } from 'react';
import { StatusBar, FlatList, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import LottieLoading from '../../../components/utility/lottie-loading.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    // backgroundColor: 'green',
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && <LottieLoading />}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          //   console.log(item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        //   horizontal
      />
    </SafeArea>
  );
};

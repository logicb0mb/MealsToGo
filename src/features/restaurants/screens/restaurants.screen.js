import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { FadeInView } from '../../../components/animations/fade.animation';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { LocationContext } from '../../../services/location/location.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantList } from '../components/restaurant-list.styles';

import LottieLoading from '../../../components/utility/lottie-loading.component';

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;
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
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          //   horizontal
        />
      )}
    </SafeArea>
  );
};

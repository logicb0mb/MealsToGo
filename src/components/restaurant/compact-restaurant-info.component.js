import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Image, Platform } from 'react-native';

import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant, inMapCallout = false }) => {
  const RenderedImage =
    isAndroid && inMapCallout ? CompactWebview : CompactImage;

  return (
    <Item>
      <RenderedImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const AnimationContainer = styled(View)`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

const StyledLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
`;

export default class LottieWaterMelon extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <AnimationContainer>
        <StyledLottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../assets/animation/watermelon.json')}
        />
      </AnimationContainer>
    );
  }
}

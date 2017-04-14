
'use strict';


function xzforHorizontal(props: NavigationSceneRendererProps): Object {
  const {
    layout,
    position,
    scene,
  } = props;
  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];
  const width = layout.initWidth;

  const opacity = position.interpolate({
    inputRange,
    outputRange: [1, 1, 0.84],
  });


  const translateY = 0;
  const translateX = position.interpolate({
    inputRange,
    outputRange: [width, 0, -100],//outputRange: [-width, 0, 200]
  });

  return {
    transform: [
      { translateX }
    ],
  };
}

function xzforVertical(props: NavigationSceneRendererProps): Object {
  const {
    layout,
    position,
    scene,
  } = props;
  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];
  const height = layout.initHeight;

  const opacity = position.interpolate({
    inputRange,
    outputRange: [1, 1, 0.3],
  });



  const translateX = 0;
  const translateY = position.interpolate({
    inputRange,
    outputRange: [height, 0, -10],
  });

  return {
    transform: [
      { translateX },
      { translateY },
    ],
  };
}

module.exports = {
  xzforHorizontal,
  xzforVertical,
};

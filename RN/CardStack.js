'use strict';

const StyleInterpolator = require('./StyleInterpolator');
const CardStackPanResponder = require('./CardStackPanResponder');
const XzTransitioner = require('./Transitioner');
const NavigationCard = require('NavigationCard');
const NavigationCardStackStyleInterpolator = require('NavigationCardStackStyleInterpolator');
const NavigationCardStackPanResponder = require('NavigationCardStackPanResponder');
const NavigationPropTypes = require('NavigationPropTypes');
const React = require('React');

// const ReactComponentWithPureRenderMixin = require('ReactComponentWithPureRenderMixin');
const StyleSheet = require('StyleSheet');
const View = require('View');

const emptyFunction = require('fbjs/lib/emptyFunction');

const {PropTypes} = React;
const {Directions} = NavigationCardStackPanResponder;

import type {
  NavigationState,
  NavigationSceneRenderer,
  NavigationSceneRendererProps,
  NavigationTransitionProps,
} from 'NavigationTypeDefinition';

import type {
  NavigationGestureDirection,
} from 'NavigationCardStackPanResponder';

type Props = {
  direction: NavigationGestureDirection,
  navigationState: NavigationState,
  onNavigateBack?: Function,
  renderOverlay: ?NavigationSceneRenderer,
  renderScene: NavigationSceneRenderer,
  style: any,
};

type DefaultProps = {
  direction: NavigationGestureDirection,
  renderOverlay: ?NavigationSceneRenderer,
};

/**
 * A controlled navigation view that renders a stack of cards.
 *
 *     +------------+
 *   +-+            |
 * +-+ |            |
 * | | |            |
 * | | |  Focused   |
 * | | |   Card     |
 * | | |            |
 * +-+ |            |
 *   +-+            |
 *     +------------+
 */
class NavigationCardStack extends React.Component<DefaultProps, Props, void> {
  _render : NavigationSceneRenderer;
  _renderScene : NavigationSceneRenderer;

  static propTypes = {
    direction: PropTypes.oneOf([Directions.HORIZONTAL, Directions.VERTICAL]),
    navigationState: NavigationPropTypes.navigationState.isRequired,
    onNavigateBack: PropTypes.func,
    renderOverlay: PropTypes.func,
    renderScene: PropTypes.func.isRequired,
  };

  static defaultProps: DefaultProps = {
    direction: Directions.HORIZONTAL,
    renderOverlay: emptyFunction.thatReturnsNull,
  };

  constructor(props: Props, context: any) {
    super(props, context);
  }

  componentWillMount(): void {
    this._render = this._render.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }


  render(): ReactElement<any> {
    return (
      <XzTransitioner
        navigationState={this.props.navigationState}
        render={this._render}

        style={this.props.style}
      />
    );
  }

  _render(props: NavigationTransitionProps): ReactElement<any> {
    const {
       navigationState,
     } = props;

    let overlay = null;
    const renderOverlay = this.props.renderOverlay;

    if (renderOverlay) {
      const route = navigationState.routes[navigationState.index];

      const activeScene = props.scenes.find(
       scene => !scene.isStale && scene.route === route ? scene : undefined
      );

      overlay = renderOverlay({
       ...props,
       scene: activeScene
      });
    }

    const scenes = props.scenes.map(
     scene => this._renderScene({
       ...props,
       scene,
     }),
     this
    );

    return (
      <View
        style={styles.container}>
        <View
          style={styles.scenes}>
          {scenes}
        </View>
        {overlay}
      </View>
    );
  }

  _renderScene(props: NavigationSceneRendererProps): ReactElement<any> {
    const isVertical = this.props.direction === 'vertical';
    const style = isVertical ?
      StyleInterpolator.xzforVertical(props) :
      StyleInterpolator.xzforHorizontal(props);


    const panHandlersProps = {
      ...props,
      onNavigateBack: this.props.onNavigateBack,
      onNavigate:this.props.onNavigate,
    };
    const panHandlers = isVertical ?
      CardStackPanResponder.forVertical(panHandlersProps) :
      CardStackPanResponder.forHorizontal(panHandlersProps);

    return (
      <NavigationCard
        {...props}
        key={'card_' + props.scene.key}
        panHandlers={panHandlers}
        renderScene={this.props.renderScene}
        style={[style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scenes: {
    flex: 1,
  },
});

module.exports = NavigationCardStack;

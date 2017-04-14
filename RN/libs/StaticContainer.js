
'use strict';

const React = require('React');


class StaticContainer extends React.Component {

  shouldComponentUpdate(nextProps: Object): boolean {
    return !!nextProps.shouldUpdate;
  }

  render() {
    const child = this.props.children;
    return (child === null || child === false)
      ? null
      : React.Children.only(child);
  }

}

module.exports = StaticContainer;

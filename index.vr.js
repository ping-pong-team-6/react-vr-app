import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import {VrLinks} from './src/links/vr-links.vr';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: 'white',
            backgroundColor: 'rgb(59,28,82)',
        };
    }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrLinks
          backgroundColor={this.state.backgroundColor}
          color={this.state.textColor}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);

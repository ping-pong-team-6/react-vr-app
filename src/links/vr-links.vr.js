import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-vr';

export class VrLinks extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = (url) => {
    console.log(url);
    NativeModules.LinkingManager.openURL(url);
  }
  render = () => {
    const {links = [], color = 'white', backgroundColor = 'black'} = this.props;
    console.log(links);
    return (
      <View>
        {links.map( ({name, url}, index) => (
          <VrButton
            key={index}
            style={{width: 1.5}}
            onClick={this.onClick.bind(this, url)}
          >
            <Text
              style={{
                backgroundColor,
                color,
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -3]}, {rotateX:-30}],
              }}>
              {name}
            </Text>
          </VrButton>
        ))}
      </View>
    );
  }
}

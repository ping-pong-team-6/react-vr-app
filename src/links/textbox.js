import React from 'react';
import {
  Text,
  View,
} from 'react-vr';

export default class TextBox extends React.Component {
  state = { value: ' ' }

  handleKey = (event) => {
    if (event.nativeEvent.inputEvent.type === 'KeyboardInputEvent' &&
          event.nativeEvent.inputEvent.eventType === 'keydown') {
      const key = event.nativeEvent.inputEvent.key;
      if (key.length === 1) {
        this.setState((prevState) => {
          const newVal = prevState.value === ' ' ? key : prevState.value + key;
          return { value: newVal };
        });
      } else if (key === 'Backspace') {
        this.setState((prevState) => {
          const newVal = prevState.value.substring(0, prevState.value.length - 1);
          return { value: newVal ? newVal : ' ' };
        });
      }
    }
  }

  render() {
    return (
      <View 
        onInput={this.handleKey}
      >
        <Text
          style={{
            borderRadius: 0.2,
            borderWidth: 0.1, 
            borderColor: 'green',
            backgroundColor: 'white',
            color: 'black',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -5]}],
          }}>
          {this.state.value}
        </Text>
      </View>
    );
  }
};

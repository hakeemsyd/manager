import {Button} from './Button';
import {CardSection} from './CardSection';
import React, {Component} from 'react';
import {Modal, Text, View} from 'react-native';

class Confirm extends Component {
  render() {
    const {children, onAccept, onDecline, visible} = this.props;
    const {cardSectionStyle, textStyle, containerStyle} = styles;
    return (
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => {}}
        transparent
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}


const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    justifyContent: 'center',
    flex: 1,
  },
};

export {Confirm}

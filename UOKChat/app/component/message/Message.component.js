// @flow
import React from 'react';
import {View, Text} from 'react-native';

import styles from './Message.styles';

type MessageProps = {};
type MessageState = {};

class MessageScreen extends React.PureComponent<MessageProps, MessageState> {
  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {/* Add your elements here. Make sure you break the renders into clean functions */}
        <Text>{'Message'}</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

export default MessageScreen;

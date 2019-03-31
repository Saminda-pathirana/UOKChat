// @flow
import React from 'react';
import {View, Text} from 'react-native';

import styles from './Chat.styles';

type ChatProps = {};
type ChatState = {};

class ChatScreen extends React.PureComponent<ChatProps, ChatState> {
  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {/* Add your elements here. Make sure you break the renders into clean functions */}
        <Text>{'CHAT'}</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

export default ChatScreen;

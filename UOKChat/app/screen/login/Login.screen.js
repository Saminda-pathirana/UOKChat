// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Login.styles';

type LoginProps = {};
type LoginState = {};

class LoginScreen extends React.PureComponent<LoginProps, LoginState> {
  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {/* Add your elements here. Make sure you break the renders into clean functions */}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

export default LoginScreen;

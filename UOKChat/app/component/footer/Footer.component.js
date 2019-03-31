// @flow
import React from 'react';
import {View, Text} from 'react-native';

import styles from './Footer.styles';

type FooterProps = {};
type FooterState = {};

class FooterScreen extends React.PureComponent<FooterProps, FooterState> {
  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {/* Add your elements here. Make sure you break the renders into clean functions */}
        <Text>{'Footer'}</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

export default FooterScreen;

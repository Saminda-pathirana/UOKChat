import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import MainStack from './app/navigation/mainStack/MainStack.navigaton';

type Props = {};
export default class App extends React.PureComponent<Props> {
  render() {
    return (
      <MainStack />
    );
  }
}

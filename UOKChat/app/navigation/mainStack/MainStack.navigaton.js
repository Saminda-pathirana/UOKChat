// @flow
import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import MainStackNavigationService from './MainStack.service';
import {ROUTES, MAIN_STACK_NAV_LOGIN} from './MainStack.routes';

// Navigation configurations
// See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
const NAV_CONFIG = {
  initialRouteName: 'MAIN_STACK_NAV_LOGIN',
  headerMode: 'none',
};

export const MainStackNavigation = createStackNavigator(ROUTES, NAV_CONFIG);
const AppContainer = createAppContainer(MainStackNavigation);

type MainStackNavigationProps = {};
type MainStackNavigationState = {};

class MainStackNavigationComponent extends
  React.PureComponent<MainStackNavigationProps, MainStackNavigationState> {
    static defaultProps: any

    handleRef = (navigatorRef): void => {
      MainStackNavigationService.setAuthNavigator(navigatorRef);
    }

    render() {
      return (
        <AppContainer
          ref={this.handleRef}
        />
      );
    }
}

export default MainStackNavigationComponent;

// @flow
import {NavigationActions} from 'react-navigation';

let _navigator = null;

const setAuthNavigator = (navigatorRef): void => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params): void => {
  _navigator && _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const goBack = (): void => {
  _navigator && _navigator.dispatch(NavigationActions.back());
};

export default {
  goBack,
  navigate,
  setAuthNavigator,
};

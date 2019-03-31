// @flow
import MainStackNavigationService from './MainStack.service';
import {
  MAIN_STACK_NAV_CHAT,
} from './MainStack.routes';

type navParams = any;

export const goBack = MainStackNavigationService.goBack

export const navigateToChatScreen = (user): void => {
  MainStackNavigationService.navigate(MAIN_STACK_NAV_CHAT, {user});
};

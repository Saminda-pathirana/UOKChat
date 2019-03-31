import ChatScreen from '../../screen/chat/Chat.screen';
import LoginScreen from '../../screen/login/Login.screen';

export const MAIN_STACK_NAV_LOGIN = 'MAIN_STACK_NAV_LOGIN';
export const MAIN_STACK_NAV_CHAT = 'MAIN_STACK_NAV_CHAT';

export const ROUTES = {
    [MAIN_STACK_NAV_LOGIN]: {
      screen: LoginScreen,
      path: `/${MAIN_STACK_NAV_LOGIN}`,
    },
    [MAIN_STACK_NAV_CHAT]: {
      screen: ChatScreen,
      path: `/${MAIN_STACK_NAV_CHAT}`,
    },
};

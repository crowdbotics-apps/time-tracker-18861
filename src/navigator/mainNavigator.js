import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList77789Navigator from '../features/NotificationList77789/navigator';
import Settings77788Navigator from '../features/Settings77788/navigator';
import Settings77780Navigator from '../features/Settings77780/navigator';
import UserProfile77778Navigator from '../features/UserProfile77778/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList77789: { screen: NotificationList77789Navigator },
Settings77788: { screen: Settings77788Navigator },
Settings77780: { screen: Settings77780Navigator },
UserProfile77778: { screen: UserProfile77778Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

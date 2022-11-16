import React from 'react';
import {RouteNames, Tab} from '../route';

import styles from '../index.style';
import {TabLabel} from '../../Components/TabComponents/TabLabel';
import {tabLabels} from '../../Constants';
import {Screens} from '../screens';

// App Tab Navigation
const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => null,
        tabBarLabel: ({focused}) => (
          <TabLabel text={route.name} focused={focused} />
        ),
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarStyle: styles.tabNavigation,
      })}>
      <Tab.Screen
        options={{
          title: tabLabels.randomgifs,
        }}
        name={RouteNames.RANDOMGIFS}
        component={Screens.RandomGifs}
      />
      <Tab.Screen
        options={{
          title: tabLabels.searchgif,
        }}
        name={RouteNames.SEARCHGIF}
        component={Screens.SearchGifs}
      />
    </Tab.Navigator>
  );
};
export default AppTabNavigator;

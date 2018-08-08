import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, Diary, Login, DiaryIntro } from './components';

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Diary: {
    screen: Diary,
    navigationOptions: {
      headerTitle: 'Diary',
    },
  },
  DiaryIntro: {
    screen: DiaryIntro,
    navigationOptions: {
      headerTitle: 'Introduction',
    },
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

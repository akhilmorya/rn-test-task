import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingScreenContainer from '../components/landingScreen/LandingScreenContainer';
import HomeScreenContainer from '../components/HomeScreen/HomeScreenContainer';

const StackNavigator = createStackNavigator(
  {
    LandingScreen: {screen: LandingScreenContainer},
    HomeScreen: {screen: HomeScreenContainer},
  },
  {
    initialRouteName: 'LandingScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(StackNavigator);

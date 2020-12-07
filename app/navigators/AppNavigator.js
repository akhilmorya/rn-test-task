import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingScreenContainer from '../components/landingScreen/LandingScreenContainer';
import HomeScreenContainer from '../components/HomeScreen/HomeScreenContainer';
import ResultsScreenContainer from '../components/ResultsScreen/ResultsScreenContainer';

const StackNavigator = createStackNavigator(
  {
    LandingScreen: {screen: LandingScreenContainer},
    HomeScreen: {screen: HomeScreenContainer},
    ResultScreen: {screen: ResultsScreenContainer},
  },
  {
    initialRouteName: 'LandingScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(StackNavigator);

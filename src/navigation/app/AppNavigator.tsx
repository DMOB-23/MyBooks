import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { AppStackParamList } from './interface';
import { RegisterBook } from '../../screens/register';
import { useTheme } from 'native-base';
import { ListBooks } from '../../screens/List';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const { colors } = useTheme();

  const navigatorScreenOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: colors.primary[600] },
    statusBarColor: colors.primary[700],
    headerTintColor: colors.white,
  };

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      <Stack.Screen name="ListBooks" component={ListBooks} />
      <Stack.Screen name="RegisterBook" component={RegisterBook} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

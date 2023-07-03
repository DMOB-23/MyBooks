import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackParamList = {
  ListBooks: undefined;
  RegisterBook: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<AppStackParamList>;

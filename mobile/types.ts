import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
export type Status = 'running' | 'finished';

export interface Lottery {
  id: string;
  name: string;
  prize: string;
  type: string;
  status: Status;
}

// navigation types
export type RootStackParamList = {
  Home: undefined;
  AddLottery: undefined;
  Register: { selectedLotteries: Array<string> };
  LotteryDetails: { id: string };
};

export type AddLotteryNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddLottery'
>;

export type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

export type LotteryDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LotteryDetails'
>;

export type LotteryDetailsRouteProp = RouteProp<
  RootStackParamList,
  'LotteryDetails'
>;

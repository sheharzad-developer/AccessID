import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppText from '../components/AppText';
import PrimaryButton from '../components/PrimaryButton';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ padding: 20 }}>
      <AppText style={{ fontSize: 22, fontWeight: '700' }}>
        Welcome to AccessID
      </AppText>

      <AppText style={{ marginVertical: 10 }}>
        Your digital disability certificate wallet
      </AppText>

      <PrimaryButton
        title="My Certificate"
        onPress={() => navigation.navigate('Wallet')}
        accessibilityLabel="View your disability certificate"
      />
    </View>
  );
}
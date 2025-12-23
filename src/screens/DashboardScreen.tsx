import { View } from 'react-native';
import AppText from '../components/AppText';
import PrimaryButton from '../components/PrimaryButton';

export default function DashboardScreen() {
  return (
    <View style={{ padding: 20 }}>
      <AppText style={{ fontSize: 22, fontWeight: '700' }}>
        Welcome to AccessID
      </AppText>

      <AppText style={{ marginVertical: 10 }}>
        Your digital disability certificate wallet
      </AppText>

      <PrimaryButton
        title="View Certificate"
        onPress={() => {}}
        accessibilityLabel="View your disability certificate"
      />
    </View>
  );
}
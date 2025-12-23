import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppText from '../components/AppText';
import PrimaryButton from '../components/PrimaryButton';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>Welcome to AccessID</AppText>
        <AppText style={styles.subtitle}>
          Your digital disability certificate wallet
        </AppText>
      </View>

      <View style={styles.content}>
        <PrimaryButton
          title="My Certificate"
          onPress={() => navigation.navigate('Wallet')}
          accessibilityLabel="View your disability certificate"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    padding: 24,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 17,
    color: '#6E6E73',
    lineHeight: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});
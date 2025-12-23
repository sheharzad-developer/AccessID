import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CertificateCard from '../components/CertificateCard';
import AppText from '../components/AppText';
import { mockCertificate } from '../data/mockCertificate';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CertificateWalletScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <AppText style={styles.headerTitle}>My Certificates</AppText>
        <AppText style={styles.headerSubtitle}>
          View and manage your disability certificates
        </AppText>
      </View>

      <CertificateCard
        certificate={mockCertificate}
        onView={() => navigation.navigate('CertificateViewer', { certificateId: mockCertificate.id })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6E6E73',
    marginBottom: 4,
  },
});
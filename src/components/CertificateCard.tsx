import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import PrimaryButton from './PrimaryButton';
import { colors } from '../theme/colors';
import { Certificate } from '../types/certificate';

interface Props {
  certificate: Certificate;
  onView: () => void;
}

export default function CertificateCard({ certificate, onView }: Props) {
  return (
    <View style={styles.card}>
      <AppText style={styles.title}>Disability Certificate</AppText>

      <AppText>Name: {certificate.name}</AppText>
      <AppText>Disability: {certificate.disabilityType}</AppText>
      <AppText>Certificate No: {certificate.id}</AppText>

      <PrimaryButton title="View Certificate" onPress={onView} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    borderColor: colors.border,
    borderWidth: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
});
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
      <View style={styles.cardHeader}>
        <AppText style={styles.title}>Disability Certificate</AppText>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.infoRow}>
          <AppText style={styles.label}>Name:</AppText>
          <AppText style={styles.value}>{certificate.name}</AppText>
        </View>

        <View style={styles.infoRow}>
          <AppText style={styles.label}>Disability:</AppText>
          <AppText style={styles.value}>{certificate.disabilityType}</AppText>
        </View>

        <View style={styles.infoRow}>
          <AppText style={styles.label}>Certificate No:</AppText>
          <AppText style={styles.certificateNumber}>{certificate.id}</AppText>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <PrimaryButton
          title="View Certificate"
          onPress={onView}
          accessibilityLabel="View disability certificate"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginVertical: 12,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  cardHeader: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1C1C1E',
    letterSpacing: -0.5,
  },
  cardBody: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    color: '#6E6E73',
    fontWeight: '500',
    flex: 0,
    minWidth: 120,
  },
  value: {
    fontSize: 15,
    color: '#1C1C1E',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  certificateNumber: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '700',
    flex: 1,
    textAlign: 'right',
  },
  cardFooter: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 8,
  },
});
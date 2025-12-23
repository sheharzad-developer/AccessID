import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AppText from '../components/AppText';

export default function QRVerificationScreen() {
  const qrData = JSON.stringify({
    certificateId: 'DC-2024-001245',
    status: 'Verified (Demo)',
  });

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Verification QR</AppText>

      <View style={styles.qrContainer}>
        <QRCode
          value={qrData}
          size={220}
          color="#000000"
          backgroundColor="#FFFFFF"
        />
      </View>

      <AppText style={styles.badge}>Verified (Demo)</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F7',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#1C1C1E',
  },
  qrContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  badge: {
    marginTop: 30,
    color: '#198754',
    fontWeight: '600',
    fontSize: 16,
  },
});
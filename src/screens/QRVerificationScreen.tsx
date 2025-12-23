import { View, StyleSheet } from 'react-native';
// @ts-ignore - expo-barcode-generator doesn't have TypeScript definitions
import { Barcode } from 'expo-barcode-generator';
import AppText from '../components/AppText';

export default function QRVerificationScreen() {
  const qrData = JSON.stringify({
    certificateId: 'DC-2024-001245',
    status: 'Verified (Demo)',
  });

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Verification QR</AppText>

      <Barcode
        value={qrData}
        options={{
          format: 'QR',
          width: 2,
          height: 220,
        }}
      />

      <AppText style={styles.badge}>Verified (Demo)</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  badge: {
    marginTop: 20,
    color: 'green',
    fontWeight: '600',
  },
});
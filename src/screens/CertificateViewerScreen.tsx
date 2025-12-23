import { View } from 'react-native';
import AppText from '../components/AppText';

export default function CertificateViewerScreen() {
  return (
    <View style={{ padding: 20 }}>
      <AppText style={{ fontSize: 22, fontWeight: '700' }}>
        Certificate Viewer
      </AppText>

      <AppText>
        PDF / Image certificate will be shown here
      </AppText>
    </View>
  );
}
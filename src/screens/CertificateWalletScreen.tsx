import { View } from 'react-native';
import CertificateCard from '../components/CertificateCard';
import { mockCertificate } from '../data/mockCertificate';

export default function CertificateWalletScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <CertificateCard
        certificate={mockCertificate}
        onView={() => navigation.navigate('CertificateViewer')}
      />
    </View>
  );
}
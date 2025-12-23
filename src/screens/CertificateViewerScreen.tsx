import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as DocumentPicker from 'expo-document-picker';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import AppText from '../components/AppText';
import { saveCertificate } from '../utils/storage';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const authenticate = async () => {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  if (!hasHardware) return true;

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Unlock your certificate',
  });
  return result.success;
};

export default function CertificateViewerScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [pdfUri, setPdfUri] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    (async () => {
      const success = await authenticate();
      setUnlocked(success);
    })();
  }, []);

  const pickCertificate = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (!result.canceled) {
      const savedPath = await saveCertificate(result.assets[0].uri);
      setPdfUri(savedPath);
    }
  };

  if (!unlocked) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <AppText>Authentication required</AppText>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {!pdfUri ? (
        <>
          <AppText>
            Upload your official disability certificate (PDF)
          </AppText>
          <PrimaryButton title="Upload Certificate" onPress={pickCertificate} />
        </>
      ) : (
        <>
          <AppText>
            Certificate saved successfully
          </AppText>
          <PrimaryButton
            title="Show Verification QR"
            onPress={() => navigation.navigate('QRVerification')}
          />
        </>
      )}
    </View>
  );
}
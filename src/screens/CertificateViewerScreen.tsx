import { View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';
import Pdf from 'react-native-pdf';
import PrimaryButton from '../components/PrimaryButton';
import AppText from '../components/AppText';
import { saveCertificate } from '../utils/storage';

export default function CertificateViewerScreen() {
  const [pdfUri, setPdfUri] = useState<string | null>(null);

  const pickCertificate = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (!result.canceled) {
      const savedPath = await saveCertificate(result.assets[0].uri);
      setPdfUri(savedPath);
    }
  };

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
        <Pdf
          source={{ uri: pdfUri }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
}
import * as FileSystem from 'expo-file-system/legacy';

const CERT_DIR = (FileSystem.documentDirectory || '') + 'certificates/';

export const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(CERT_DIR);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(CERT_DIR, { intermediates: true });
  }
};

export const saveCertificate = async (uri: string) => {
  await ensureDirExists();
  const dest = CERT_DIR + 'disability_certificate.pdf';
  await FileSystem.copyAsync({ from: uri, to: dest });
  return dest;
};
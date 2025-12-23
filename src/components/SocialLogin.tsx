import { View, StyleSheet, Alert } from 'react-native';
import { useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface Props {
  onLogin: (email: string) => void;
}

export default function SocialLogin({ onLogin }: Props) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '<YOUR_EXPO_GOOGLE_CLIENT_ID>',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Normally fetch user info from Google API
      onLogin('user@gmail.com'); // Demo email
      Alert.alert('Success', 'Logged in with Google!');
    }
  }, [response, onLogin]);

  return (
    <View style={styles.container}>
      <PrimaryButton
        title="Sign Up with Google"
        onPress={() => promptAsync()}
      />
      <PrimaryButton
        title="Sign Up with Outlook"
        onPress={() => onLogin('user@outlook.com')} // Demo email
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, gap: 10 },
});


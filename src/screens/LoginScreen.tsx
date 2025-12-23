import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import AppText from '../components/AppText';
import { useState } from 'react';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Demo login: accept any non-empty credentials
    if (email && password) {
      navigation.replace('Dashboard'); // Navigate to Dashboard
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>AccessID Login</AppText>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <PrimaryButton title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
  },
});
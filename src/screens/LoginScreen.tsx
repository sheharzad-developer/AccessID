import { View, TextInput, StyleSheet, ActivityIndicator, Switch, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialIcons } from 'expo-vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import AppText from '../components/AppText';
import { useState, useEffect } from 'react';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const REMEMBER_ME_KEY = '@accessid_remember_me';
const SAVED_EMAIL_KEY = '@accessid_saved_email';

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  useEffect(() => {
    // Load saved email if remember me was enabled
    loadSavedCredentials();
  }, []);

  const loadSavedCredentials = async () => {
    try {
      const savedRememberMe = await AsyncStorage.getItem(REMEMBER_ME_KEY);
      if (savedRememberMe === 'true') {
        const savedEmail = await AsyncStorage.getItem(SAVED_EMAIL_KEY);
        if (savedEmail) {
          setEmail(savedEmail);
          setRememberMe(true);
        }
      }
    } catch (error) {
      console.error('Error loading saved credentials:', error);
    }
  };

  const validateFields = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    if (!validateFields()) {
      return;
    }

    setLoading(true);

    // Save remember me preference
    try {
      if (rememberMe) {
        await AsyncStorage.setItem(REMEMBER_ME_KEY, 'true');
        await AsyncStorage.setItem(SAVED_EMAIL_KEY, email);
      } else {
        await AsyncStorage.setItem(REMEMBER_ME_KEY, 'false');
        await AsyncStorage.removeItem(SAVED_EMAIL_KEY);
      }
    } catch (error) {
      console.error('Error saving credentials:', error);
    }

    // Simulate authentication delay
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Dashboard');
    }, 1500);
  };

  const handleSocialLogin = (provider: 'google' | 'apple') => {
    // Demo social login - just navigate to dashboard
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>AccessID Login</AppText>

      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (errors.email) setErrors({ ...errors, email: '' });
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        editable={!loading}
      />
      {errors.email ? <AppText style={styles.errorText}>{errors.email}</AppText> : null}

      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (errors.password) setErrors({ ...errors, password: '' });
        }}
        secureTextEntry
        editable={!loading}
      />
      {errors.password ? <AppText style={styles.errorText}>{errors.password}</AppText> : null}

      <View style={styles.rememberMeContainer}>
        <AppText>Remember Me</AppText>
        <Switch value={rememberMe} onValueChange={setRememberMe} disabled={loading} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      ) : (
        <PrimaryButton title="Login" onPress={handleLogin} />
      )}

      <View style={styles.socialContainer}>
        <AppText style={styles.socialDivider}>Or continue with</AppText>
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('google')}
            accessibilityLabel="Login with Google"
            accessibilityRole="button"
          >
            <MaterialIcons name="google" size={20} color="#fff" />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('apple')}
            accessibilityLabel="Login with Apple"
            accessibilityRole="button"
          >
            <Ionicons name="logo-apple" size={20} color="#fff" />
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 5,
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 4,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  loader: {
    marginVertical: 20,
  },
  socialContainer: {
    marginTop: 30,
  },
  socialDivider: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#8E8E93',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingVertical: 14,
    minHeight: 44,
    borderRadius: 8,
    gap: 8,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
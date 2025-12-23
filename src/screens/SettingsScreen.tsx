import { View, Switch } from 'react-native';
import AppText from '../components/AppText';
import { useAccessibility } from '../context/AccessibilityContext';

export default function SettingsScreen() {
  const { largeText, highContrast, toggleLargeText, toggleHighContrast } =
    useAccessibility();

  return (
    <View style={{ padding: 20 }}>
      <AppText style={{ fontSize: 22, fontWeight: '700' }}>
        Accessibility Settings
      </AppText>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <AppText>Large Text</AppText>
        <Switch value={largeText} onValueChange={toggleLargeText} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <AppText>High Contrast</AppText>
        <Switch value={highContrast} onValueChange={toggleHighContrast} />
      </View>
    </View>
  );
}


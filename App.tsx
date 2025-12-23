import { AccessibilityProvider } from './src/context/AccessibilityContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AccessibilityProvider>
      <AppNavigator />
    </AccessibilityProvider>
  );
}

import { Text, TextProps } from 'react-native';
import { useAccessibility } from '../context/AccessibilityContext';

export default function AppText(props: TextProps) {
  const { largeText, highContrast } = useAccessibility();

  return (
    <Text
      {...props}
      allowFontScaling
      style={[
        {
          fontSize: largeText ? 20 : 16,
          color: highContrast ? '#000' : '#1C1C1E',
        },
        props.style,
      ]}
    />
  );
}
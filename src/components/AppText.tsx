import { Text, TextProps } from 'react-native';
import { typography } from '../theme/typography';

export default function AppText(props: TextProps) {
  return (
    <Text
      {...props}
      allowFontScaling
      style={[typography.body, props.style]}
    />
  );
}
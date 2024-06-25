import { GestureResponderEvent } from 'react-native';
import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

const Typography = ({ children, variant, style, onPress }: ITypography) => {
  return (
    <Text variant={variant} style={style} onPress={onPress}>
      {children}
    </Text>
  );
};

type ITypography = {
  children: string;
  variant?: VariantProp<any>;
  style?: any;
  onPress?: (e: GestureResponderEvent) => void;
}

export default Typography;

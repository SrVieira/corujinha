import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

const Typography = ({ children, variant, style }: ITypography) => {
  return (
    <Text variant={variant} style={style}>
      {children}
    </Text>
  );
};

type ITypography = {
  children: string;
  variant?: VariantProp<any>;
  style?: any;
}

export default Typography;

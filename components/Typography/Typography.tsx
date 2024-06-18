import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

const Typography = ({ label, variant }: ITypography) => {
  return (
    <Text variant={variant}>
      {label}
    </Text>
  );
};

type ITypography = {
  label: string;
  variant: VariantProp<any>;
}

export default Typography;

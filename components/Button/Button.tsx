import theme from '@/theme';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Button as LibButton } from 'react-native-paper';
import { ButtonMode } from 'react-native-paper/lib/typescript/components/Button/utils';

const Button = ({ children, mode = 'text', variant = 'primary', onPress, icon }: IButton) => {
  return (
    <LibButton style={styles(variant).button} labelStyle={styles(variant).label} mode={mode} onPress={onPress} icon={icon}>
      {children}
    </LibButton>
  );
};

const styles = (variant: IButtonVariant) => StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: theme.buttons[variant].backgroundColor
  },
  label: {
    fontSize: 20,
    fontFamily: 'Inter_500Medium',
    color: theme.buttons[variant].color
  }
});

type IButtonVariant = 'primary' | 'secondary';

type IButton = {
  children: string;
  mode?: ButtonMode;
  onPress: (e: GestureResponderEvent) => void;
  icon?: string;
  variant?: IButtonVariant;
}

export default Button;

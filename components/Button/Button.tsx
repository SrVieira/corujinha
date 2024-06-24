import { StyleSheet } from 'react-native';
import { Button as LibButton } from 'react-native-paper';
import { ButtonMode } from 'react-native-paper/lib/typescript/components/Button/utils';

const Button = ({ children, mode = 'text' }: IButton) => {
  return (
    <LibButton style={styles.button} labelStyle={styles.label} mode={mode}>
      {children}
    </LibButton>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 12
  },
  label: {
    fontSize: 20,
    fontFamily: 'Inter_500Medium'
  }
});

type IButton = {
  children: string;
  mode?: ButtonMode;
}

export default Button;

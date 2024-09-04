import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Style {
  button: ViewStyle,
  text: TextStyle,
}

export const styles = StyleSheet.create<Style>({
  button: {
    width: '33%', 
    borderWidth: 1, 
    borderColor: 'black', 
    padding: 10, 
    alignItems: 'center'
  },
  text: { 
    fontWeight: 'bold'
   }
});
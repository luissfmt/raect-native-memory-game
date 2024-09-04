import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  mainContainer: ViewStyle,
  messageContainer: ViewStyle,
  button: ViewStyle
}

export const styles = StyleSheet.create<Style>({
  container: { 
    width: '100%', 
    justifyContent: 'center',  
    alignItems: 'center', 
    marginTop: 10 
  },
  messageContainer: {
    padding: 10, 
    alignItems: 'center'
  },
  button: { 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 5, 
    marginTop: 15 
  }
})
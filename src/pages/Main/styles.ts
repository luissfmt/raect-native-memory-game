import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  mainContainer: ViewStyle,
  cardsContainer: ViewStyle,
  winnerContainer: ViewStyle,
  messageBox: ViewStyle
}

export const styles = StyleSheet.create<Style>({
  safeArea: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%' 
  },
  container: { 
    width: 300, 
    flexDirection: 'row', 
    flexWrap: 'wrap' 
  }
});
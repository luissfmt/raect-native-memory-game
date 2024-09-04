import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  message: String,
  handlePlayAgainClick: () => void
}

export function WinnerInfo({ message, handlePlayAgainClick }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text accessibilityLabel={message}>
          {message}
        </Text>

        <TouchableOpacity
          style={styles.button} 
          onPress={handlePlayAgainClick}
          accessibilityLabel='Play again'
        >
          <Text>Play again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
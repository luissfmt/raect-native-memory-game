import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  label: String,
  index: Number,
  foundOptions: String[],
  selectedOptions: String[],
  setSelectedOptions: React.Dispatch<React.SetStateAction<String[]>>
}

// that's not the ideal values for props, because every option would re-render when state from the parent component changes
export function Option({ label, index, foundOptions, selectedOptions, setSelectedOptions }: Props) {
  const isSelected = selectedOptions.includes(label + index);
  const wasFound = foundOptions.includes(label);

  const handleOptionClick = () => setSelectedOptions(prev => [...prev, (label + index)]);

  const readSelected = () => {
    if (isSelected && (selectedOptions.length < 2))
      return `${label}, select another option.`;
    else if (isSelected && (selectedOptions.length === 2))
      return `${label}, wrong match. Try again!`

    if (wasFound)
      return `${label}, option already found.`
  }

  return (
    <TouchableOpacity
      style={styles.button} 
      onPress={handleOptionClick}
      disabled={isSelected || wasFound || (selectedOptions.length === 2)}
    >
      <Text
        style={[styles.text, { color: wasFound ? 'green' : 'black' }]}
        accessibilityValue={{ text: (isSelected || wasFound) ? readSelected() : `Option ${index + 1}` }}
        accessibilityState={{ disabled: true }}
      >
        {(isSelected || wasFound) ? label : '?'}
      </Text>
    </TouchableOpacity>
  );
}